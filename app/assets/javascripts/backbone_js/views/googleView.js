var app = app || {};

app.GoogleView = Backbone.View.extend({
  model: app.myUserModel,

  thisIsMyThisModel: this.model,

  el: "#meetup-list",

  // template: _.template($("#meetup-list").html(), {}),


  initMap: function(mylat, mylon) {
    // old
  },

  createMap: function(latLng) {
    return new google.maps.Map(document.getElementById('googleMap'), {
      zoom: 12,
      center: latLng
    });
  },

  setCentre: function(latLng) {
    this.map = this.map || this.createMap(latLng);
    this.map.setCenter(latLng);
  },

  searchMeetup: function(latLng) {
    latitude = latLng.lat();
    longitude = latLng.lng();
    htmlLookUpString = "https://api.meetup.com/find/groups";

    var thisIsMyThis = this;
    $.ajax({
      url: htmlLookUpString,
      dataType: "jsonp",
      data: {
        key: "25423068d7d50102e2030b14583f43",
        lat: latitude,
        lon: longitude,
        page: 10
      },

      complete: function(result) {
        var bigResult = result.responseJSON.data;
        console.log(bigResult);

        thisIsMyThis.$el.empty();
        for (var i = 0; i < bigResult.length; i++) {
          thisIsMyThis.$el.append(bigResult[i].link + "<br>" + bigResult[i].description);
        }
      },

      error: function(xHR, status, message) {
        alert(message);
      }
    });
  },
});


// var marker = new google.maps.Marker({
//   map: resultsMap,
//   position: results[0].geometry.location
// });
// } else {
// alert('Geocode was not successful for the following reason: ' + status);
// }
