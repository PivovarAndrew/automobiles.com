# !/usr/bin/env ruby
# frozen_string_literal: true

# Class which provides possibility to parse url from string
class URLParser
  REGEX_PATTERN = /'(.*?)'/
  CONTENT_INDEX_BETWEEN_DELIMITERS = 1

  def self.parse(string)
    string.split(REGEX_PATTERN)[CONTENT_INDEX_BETWEEN_DELIMITERS]
  end
end
