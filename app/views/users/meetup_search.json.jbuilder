json.array!(@response) do |search_result|
  json.extract! search_result, "name", "city", "link", "description"
end



# json.array!(@params) do |param|
#  json.extract! param, :controller, :action
#  json.url user_url(user, format: :json)
# end
