require 'pp'

class MeetupController < ApplicationController
  class MeetupsQuery
    include HTTParty
    base_uri 'https://api.meetup.com'
    # default_params

    def initialize(_service, lat, lon, page)
      @options = { query: { page: page, lon: lon, lat: lat } }
    end

    def search(options = {})
      options[:query] = options
      self.class.get('/find/groups', options)
      key = '25423068d7d50102e2030b14583f43'
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
      key: '25423068d7d50102e2030b14583f43',
      page: params[:page],
      radius: "smart",
    }.to_query

    url =
     'https://api.meetup.com/find/groups?' +
               query

    pp url

    response = HTTParty.get(url)

    @response = JSON.parse(response.body)

    # pp response.body, response.code, response.message, response.headers.inspect

    render 'users/meetup_search'
    nil
  end
end

# require 'pp'

# class MeetupController < ApplicationController

#   def search_meetup
#     client = RMeetup::Client.new do |config|
#       config.api_key = '25423068d7d50102e2030b14583f43'
#     end

#     pp 'here are the params' + params.to_s

#     results = client.fetch(:events, event_id: # 'some_id')
#     results.each do |_result|
# Do something with the result
#     end
#   end
# end
