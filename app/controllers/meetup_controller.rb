require 'pp'

class MeetupController < ApplicationController
  class MeetupsQuery
    include HTTParty
    base_uri 'https://api.meetup.com'

    def initialize(_service, lat, lon, page)
      @options = { query: { page: page, lon: lon, lat: lat } }
    end

    def search(options = {})
      options[:query] = options
      self.class.get('/find/groups', options)
      key = ENV["MEETUPS_API"]
    end
  end

  def search_meetup
    @params = params
    pp 'Params are: ' + @params.to_s

    lat = params[:lat]
    lon = params[:lon]

    query = {
      lat: lat,
      lon: lon,
      key: ENV["MEETUPS_API"],
      page: params[:page],
      radius: "smart",
    }.to_query

    url =
     'https://api.meetup.com/find/groups?' +
               query

    pp url

    response = HTTParty.get(url)

    @response = JSON.parse(response.body)

    render 'users/meetup_search'
    nil
  end
end
