require 'rubygems'
require 'sinatra'
require 'haml'

get "/" do
  haml :shogiboard
end

get "/manual" do
  haml :manual
end

