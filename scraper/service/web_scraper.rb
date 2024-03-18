# !/usr/bin/env ruby
# frozen_string_literal: true

require "net/http"
require "nokogiri"

# Class responsible for scrap and import required information from the web site
class WebScraper
  def initialize(web_site_info)
    @web_site_info = web_site_info
  end

  def prepare_document(url)
    @document = Nokogiri::HTML(Net::HTTP.get_response(url).body)
  end
end
