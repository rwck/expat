# Ex pat website notes

`rails new expat --skip-turbolinks --database=postgresql`

## Rails -  this is all backend stuff

* Devise for authentication

## Models
User - has many I wants
I want (looking for) - belongs to user
I’ve got (offering) - belongs to user

-------- compare User1 I want with All Users I’ve got

Views
Results
Users list
User details
Clickable - give more details
No results view - populated from a search on Google / something

API
Google Maps (show the Users address details on map)
Flickr for pictures of places around user wants geography


Fields for User model

Name
Email
Contact number
Language
Gender
Current location
Date of birth
Status: married / single / kids
Education
Profession
Work type (if self employed, need ABN etc)

I want model / fields
Language -
Place I want to know about (travel)
What kind of professional am I looking for (eg plumber)
When

I’ve got model / fields
Language -
Place I want to know about (travel)
What kind of professional am I looking for (eg plumber)
When


Backbone - this is front end stuff

Models

Collections


Views
	Results - list of people / restaurants etc
	View on API information
	Login / Signup page


Router

App Javascript file

Home page(inside Rails)
	Templates

Search functionality is in here





Maybe look at these APIs

http://www.meetup.com/meetup_api/
https://developers.facebook.com/


Another site to look at:

http://www.transitionsabroad.com/listings/living/living_abroad/living_abroad_by_country.shtml

https://developers.google.com/blogger/

http://instagram.com/developer/

https://dev.twitter.com/
