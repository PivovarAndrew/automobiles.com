# !/usr/bin/env ruby
# frozen_string_literal: true

require "csv"

# Class responsible for import arrays to csv files
class CSVImporter
  DATA_FILE_NAME = "data.csv"
  OPERATION = "w"
  COLUMNS_SEPARATOR = ";"

  def self.import(data)
    data && CSV.open(DATA_FILE_NAME, OPERATION, col_sep: COLUMNS_SEPARATOR) do |csv|
      csv << data.first.keys # Write the headers
      data.each { |hash| csv << hash.values } # Write the data rows
    end
  end
end
