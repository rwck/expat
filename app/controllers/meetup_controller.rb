require 'pp'

class MeetupController < ApplicationController
  def search_meetup

    @params = params
    response = HTTParty.get('https://api.meetup.com/find/groups?key=25423068d7d50102e2030b14583f43&lat=-34.397&lon=150.644')
    @response = response
    pp response.body, response.code, response.message, response.headers.inspect

    render "users/home"

    # render nothing: true
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
