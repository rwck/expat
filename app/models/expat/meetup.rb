require 'pp'

module Expat
  class Meetup

  end
end


require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pp'
​
get '/' do
  @title = params[:title] # from the <form> the user submitted
​
  if @title

    response = HTTParty.get("https://api.meetup.com/find/groups?key=25423068d7d50102e2030b14583f43&lat=-34.397&lon=150.644
")
    response = HTTParty.get("http://www.omdbapi.com/", query: { s: @title })
    # response.body is a biiiig string, formatted in JSON format
    ruby_hash = JSON.parse(response.body)
    @search_results = ruby_hash["Search"]
    #pp @search_results
  end
​
  erb :form
end


# def self.search(_lat, _lon)
#   client = RMeetup::Client.new do |config|
#     config.api_key = '25423068d7d50102e2030b14583f43'
#   end

  # pp "here are the params" + params.to_s

#   results = client.fetch(:events, event_id: 'some_id')
#   results.each do |_result|
    # Do something with the result
#   end
# end
