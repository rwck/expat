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
      for (var i = 0; i < 5; i++) {
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

  flickrClicked: function(event) {

    event.preventDefault();

    console.log("clickkk!");
    var text = $(".search-input").val();

    $.ajax({
      url: "https://api.flickr.com/services/rest/",
      context: this,
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
        this.tryDisplay(data);
      },
      error: function(xhr, status, message) {
        console.log("error", status, message);
      }
    });
  }
});
