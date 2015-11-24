require 'pp'

class MeetupController < ApplicationController
  def search_meetup
    client = RMeetup::Client.new do |config|
      config.api_key = '25423068d7d50102e2030b14583f43'
    end

    pp "here are the params" + params.to_s

    results = client.fetch(:events, event_id: 'some_id')
    results.each do |_result|
      # Do something with the result
    end

    event = client.post(:group, : 'some_group_id',
                                       group_urlname: 'some_group_urlname',
                                       name: 'My Event')

    client.delete(:event, 'event_id') # May throw exceptions or returns true
end
end
