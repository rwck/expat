var app = app || {}

app.FlickrView = Backbone.View.extend({
  el: "#search-template",

  events: {
    "click .flickr-search": "flickrClicked",
  },

  render: function() {
    console.log("calling render function for flickr view");
  },

  tryDisplay: function(data) {
    console.log("firing display data function");

    $(".image-container").empty();

    if (data.stat !== "fail") {
      var photosArray = data["photos"]["photo"];
      // if you want to change how many images to display, do it here
      for (var i = 0; i < photosArray.length; i++) {
        var photo = photosArray[i];
        var imageUrl = "https://farm" +
          photo.farm + ".staticflickr.com/" +
          photo.server + "/" + photo.id +
          "_" + photo.secret + "_m.jpg";
        var image = $("<img>");
        image.attr("src", imageUrl);

        $(".image-container").append(image);
      }
    } else {
      alert("No images for your request, please look for something else!");
    }
  },

  flickrClicked: function(latLng) {
    var thisIsMyThis = this;
    console.log("clickkk!");
    var lat = latLng.lat();
    var lon = latLng.lng();
    // get place ID from flickr
    $.ajax({
      url: "https://api.flickr.com/services/rest/",
      // context: this,
      type: "GET",
      data: {
        method: "flickr.places.findByLatLon",
        api_key: "0f22f51640ea8a231f4f054db5d14ef8",
        lat: lat,
        lon: lon,
      },
      success: function(data) {
        console.log("success", data);
        var xmlchunk = $(data).find("place")[0];
        var placeId = $(xmlchunk).attr("place_id");
        console.log(placeId);
        thisIsMyThis.getPictures(placeId);
      },
      error: function(xhr, status, message) {
        console.log("error", status, message);
      }
    });
  },

  getPictures: function(placeId) {
    $.ajax({
      url: "https://api.flickr.com/services/rest/",
      context: this,
      type: "GET",
      dataType: "jsonp",
      jsonp: "jsoncallback",
      data: {
        // method:
        method: "flickr.photos.search",
        place_id: placeId,
        api_key: "0f22f51640ea8a231f4f054db5d14ef8",
        format: "json",
        per_page: 8,
        page: 1
      },
      success: function(data) {
        console.log("success", data);
        this.tryDisplay(data);
      },
      error: function(xhr, status, message) {
        console.log("error", status, message);
      }
    })
  }
});
