var app = app || {}

app.FlickrView = Backbone.View.extend({
  el: "#search-template",

  // template: _.template( $("#search-template").html() ),

  events: {
    "click .flickr-search": "flickrClicked",
  },

  render: function() {
    console.log("calling render functin for flickr view");

    // var templateResult = this.template(this.model.attributes);
    // this.$el.html(templateResult);
  },

  tryDisplay: function(data) {
    console.log("firing display data function");

    $(".image-container").empty();

    if (data.stat !== "fail") {
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
  },

  flickrClicked: function(event) {

    event.preventDefault();

    console.log("clickkk!");
    var text = $(".search-input").val();
    alert(text);
    // var thisIsMyThis = this;

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
        // thisIsMyThis.tryDisplay(data);
        this.tryDisplay(data);
      },
      error: function(xhr, status, message) {
        console.log("error", status, message);
      }
    });
  }
});
