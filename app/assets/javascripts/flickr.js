function displayData(data) {
  // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
  var photosArray = data["photos"]["photo"];
  for (var i = 0; i < photosArray.length; i++) {
    var photo = photosArray[i];
    var imageUrl = "https://farm" +
      photo.farm + ".staticflickr.com/" +
      photo.server + "/" + photo.id +
      "_" + photo.secret + "_m.jpg";
    var image = $("<img>");
    image.attr("src", imageUrl);
    $(".search-results").append(image);
  }
}

$(".flickr-search").on("click", function() {
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

$(".load-more").on("click", function() {
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
