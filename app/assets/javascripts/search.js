//= require jquery
//= require jquery_ujs

//= require underscore-min
//= require backbone-min

//= require_tree ./backbone_js/models
//= require_tree ./backbone_js/collections
//= require_tree ./backbone_js/routers
//= require_tree ./backbone_js/views
//= require init.js

//= require_self

$(document).ready(function(){


// var template =  _.template( $("#search-template").html() );

	function displayData(data) {
		
		$(".image-container").empty();

		if(data.stat !== "fail"){
			var photosArray = data["photos"]["photo"];
			for (var i = 0; i < photosArray.length; i++) {
				var photo = photosArray[i];
				var imageUrl = "https://farm" + 
					photo.farm + ".staticflickr.com/" + 
					photo.server + "/" + photo.id +
					 "_" + photo.secret + "_m.jpg";
				var image = $("<img>");
				image.attr("src", imageUrl);

				// var templateResult = template(imageUrl);
    			// $('.container').html(templateResult);
				$(".image-container").append(image);
			}
		} else {
			alert("No images for your request, please look for something else!");
		}
	}

	$(".search-button").on("click", function(){
		console.log("click!");
		var text = $(".search-input").val();
		$.ajax({
			url: "https://api.flickr.com/services/rest/",
			type: "GET",
			dataType: "jsonp",
			jsonp: "jsoncallback",
			data: {
				method: "flickr.photos.search",
				text: text,
				api_key: "0f22f51640ea8a231f4f054db5d14ef8",
				format: "json"
			},
			success: function(data) {
				console.log("success", data);
				displayData(data);
			},
			error: function(xhr, status, message) {
				console.log("error", status, message);
			},
	 	});
	});
});