# !/usr/bin/env ruby
# frozen_string_literal: true

require "yaml"
require "./service/web_scraper"

CONFIG_FILE_NAME = "config.yml"

# Main class
class Main
  def run_cli
    WebScraper.new(YAML.load_file(CONFIG_FILE_NAME)).scrape_web_site
  end
end

Main.new.run_cli
