# !/usr/bin/env ruby
# frozen_string_literal: true

require "net/http"
require "nokogiri"
require "nokogiri-styles"
require "./service/url_parser"

# Class responsible for scrap and import required information from the web site
class WebScraper
  def initialize(web_site_info)
    @web_site_info = web_site_info
  end

  private

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
