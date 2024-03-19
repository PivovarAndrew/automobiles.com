# !/usr/bin/env ruby
# frozen_string_literal: true

require "yaml"
require "./service/web_scraper"
require "./service/csv_importer"
require "./service/json_importer"

CONFIG_FILE_NAME = "config.yml"

# Main class
class Main
  def run_cli
    data = WebScraper.new(YAML.load_file(CONFIG_FILE_NAME)).scrape_web_site
    CSVImporter.import(data)
    JSONImporter.import(data)
  end
end

Main.new.run_cli
