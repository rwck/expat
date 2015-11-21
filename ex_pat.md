# Ex pat website notes


## Create the new rails app
`rails new expat --skip-turbolinks --database=postgresql`

## Add useful gems to the Gemfile now




## Create the scaffold

`rails generate scaffold user firstname lastname email:uniq language gender current_location search_history date_of_birth:date education profession other_information: text`

## Rails -  this is all backend stuff

* Devise for authentication

### What levels of authentication are needed?

* Admin/SuperUser
* Normal visitor
* Signed in user

## Models
* User - has many I wants

## Not sure we need these models, actually...
* I want (looking for) - belongs to user
* I’ve got (offering) - belongs to user

-------- compare User1 I want with All Users I’ve got

## Views
* Results
* Users list
* User details
Clickable - give more details
No results view - populated from a search on Google / something

## APIs
* Google Maps (show the Users address details on map)
* Flickr for pictures of places around user wants geography


## Fields for User model

* Name
* Email
* Contact number
* Language
* Gender
* Current location
* Date of birth
* Status: married / single / kids
* Education
* Profession
* Work type (if self employed, need ABN etc)

## I want model / fields
* Language -
* Place I want to know about (travel)
* What kind of professional am I looking for (eg plumber)
* When

## I’ve got model / fields
* Language -
* Place I want to know about (travel)
* What kind of professional am I looking for (eg plumber)
* When


# Backbone - this is front end stuff

## Models
* User
* I want
* I've got

## Collections
* Users
* I wants
* I've gots


## Views
* Results - list of people / restaurants etc
* View on API information
	Login / Signup page*

## Router
* App Javascript file
* Home page(inside Rails)

## What routes do we need?
* /users/:id
* /users/new
* /users



## Templates
* Search functionality is in here




## Maybe look at these APIs

http://www.meetup.com/meetup_api/
https://developers.facebook.com/


## Another site to look at:

http://www.transitionsabroad.com/listings/living/living_abroad/living_abroad_by_country.shtml

https://developers.google.com/blogger/

http://instagram.com/developer/

https://dev.twitter.com/
