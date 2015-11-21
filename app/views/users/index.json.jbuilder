json.array!(@users) do |user|
  json.extract! user, :id, :firstname, :lastname, :email, :language, :gender, :current_location, :search_history, :date_of_birth, :education, :profession, :other_information
  json.url user_url(user, format: :json)
end
