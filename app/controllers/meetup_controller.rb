require 'pp'

class MeetupController < ApplicationController
  class MeetupsQuery
    include HTTParty
    base_uri "https://api.meetup.com"
    # default_params


    def initialize(service, lat, lon, page)
      @options = { query: { page: page, lon: lon, lat: lat} }
    end

    def search(options = {})
      options[:query] = options
      self.class.get("/find/groups", options)
      key = "25423068d7d50102e2030b14583f43"
    end
  end

  def search_meetup

    @params = params
    pp "Params are: " + @params.to_s
    response = HTTParty.get('https://api.meetup.com/find/groups?key=25423068d7d50102e2030b14583f43&lat=-34.397&lon=150.644&page=20')
    @response = JSON.parse(response.body)

    # pp response.body, response.code, response.message, response.headers.inspect

    render "users/meetup_search"
    return
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
