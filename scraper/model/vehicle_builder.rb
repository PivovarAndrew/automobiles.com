# !/usr/bin/env ruby
# frozen_string_literal: true

require "./model/vehicle"

# Builder pattern class that represents vehicle model
class VehicleBuilder
  attr_reader :vehicle

  def initialize
    @vehicle = Vehicle.new
  end

  def name(name)
    @vehicle.name = name
    self
  end

  def model(model)
    @vehicle.model = model
    self
  end

  def image(image)
    @vehicle.image = image
    self
  end

  def engine(engine)
    @vehicle.engine = engine
    self
  end

  def price(price)
    @vehicle.price = price
    self
  end

  def year(year)
    @vehicle.year = year
    self
  end

  def mileage(mileage)
    @vehicle.mileage = mileage
    self
  end

  def fuel(fuel)
    @vehicle.fuel = fuel
    self
  end

  def transmission(transmission)
    @vehicle.transmission = transmission
    self
  end

  def bodytype(bodytype)
    @vehicle.bodytype = bodytype
    self
  end

  def drive(drive)
    @vehicle.drive = drive
    self
  end
end
