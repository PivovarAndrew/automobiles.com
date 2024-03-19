# !/usr/bin/env ruby
# frozen_string_literal: true

require "json"

# Class responsible for import arrays to json files
class JSONImporter
  DATA_FILE_NAME = "data.json"
  OPERATION = "w"

  def self.import(data)
    File.open(DATA_FILE_NAME, OPERATION) do |file|
      file.puts(data.to_json)
    end
  end
end
