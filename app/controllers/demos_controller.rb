class DemosController < ApplicationController
  include ReactOnRails::Controller

  def index
    redux_store("store")
  end
end
