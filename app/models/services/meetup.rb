require 'pp'

class Meetup

  def initialize
  end

  def self.search(lat, lon)
      config.api_key = '25423068d7d50102e2030b14583f43'
    end

    # pp "here are the params" + params.to_s

    results = client.fetch(:events, event_id: 'some_id')
    results.each do |_result|
      # Do something with the result
    end
  end
end
