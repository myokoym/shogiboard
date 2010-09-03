require 'rubygems'
require 'sinatra'
require 'haml'

get "/" do
  haml :shogiboard
end

get "/b" do
  haml :shogiboard_b
end

get "/manual" do
  haml :manual
end

get "/release" do
  haml :release
end

