# !/usr/bin/env ruby
# frozen_string_literal: true

require "ishin"
require "net/http"
require "nokogiri"
require "nokogiri-styles"
require "./service/url_parser"
require "./model/vehicle_builder"

# Class responsible for scrap and import required information from the web site
class WebScraper
  def initialize(web_site_info)
    @web_site_info = web_site_info
  end

  FIRST_PAGE_NUMBER = 1

  def scrape_web_site
    base_url = URI.parse(@web_site_info["url_address"])
    prepare_document(base_url)
    pages_count = scrape_pages_count / @web_site_info["vehicles_count_on_page"]
    (FIRST_PAGE_NUMBER..pages_count).reduce([]) do |memo, page_number|
      url = URI.parse("#{base_url}#{page_number * @web_site_info["vehicles_count_on_page"]}")
      prepare_document(url)
      puts "#{(page_number.to_f / pages_count * 100).round(2)} %"
      memo.concat(scrape_page)
    end
  end

  private

  def scrape_page
    css_classes = @web_site_info["css_classes"]
    images = scrape_images_url(css_classes["image"])
    names = scrape_text(css_classes["name"])
    models = scrape_text(css_classes["model"])
    engines = scrape_text(css_classes["engine"])
    prices = scrape_text(css_classes["price"])
    years = scrape_text(css_classes["year"])
    mileages = scrape_text(css_classes["mileage"])
    fuels = scrape_text(css_classes["fuel"])
    transmissions = scrape_text(css_classes["transmission"])
    bodytypes = scrape_text(css_classes["bodytype"])
    drives = scrape_text(css_classes["drive"])

    # Combine the extracted data into an array of hashes
    names.zip(models, images, engines, prices, years, mileages, fuels, transmissions, bodytypes, drives).map do
      |name, model, image, engine, price, year, mileage, fuel, transmission, bodytype, drive|
      Ishin.to_hash(VehicleBuilder.new
        .name(name)
        .model(model)
        .image(image)
        .engine(engine)
        .price(price)
        .year(year)
        .mileage(mileage)
        .fuel(fuel)
        .transmission(transmission)
        .bodytype(bodytype)
        .drive(drive)
        .vehicle)
    end
  end

  def scrape_pages_count
    @document.css(@web_site_info["css_selectors"]["vehicles_count"])[0].text.to_i
  end

  def scrape_text(css_class)
    @document.css(css_class).map { |element| element.text }
  end

  def scrape_images_url(css_class)
    @document.css(css_class).map { |element| URLParser.parse(element.styles["background-image"]) }
  end

  def prepare_document(url)
    @document = Nokogiri::HTML(Net::HTTP.get_response(url).body)
  end
end
