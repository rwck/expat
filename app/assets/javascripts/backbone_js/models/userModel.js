var app = app || {}

app.UserModel = Backbone.Model.extend({
  urlRoot: 'users',

  initialize: function() {
    this.on("change:current_location", this.geocode);
    this.on("change:current_location", this.getPlaceName)
  },

  getPlaceName: function() {
    console.log("firing get placename function");
    var placeText = $("#address-input-field").val
    var placeName = app.myCurrentUser.get("current_location");
    $("#picture-box .pictures .place").html("Some pictures of  " + toTitleCase(placeName));
  },




  geocode: function() {
    var thisIsMyThis = this;

    var onGeocode = function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        var latLng = results[0].geometry.location;
        thisIsMyThis.set("latLng", latLng)
      }
    }

    var options = {
      'address': this.get("current_location")
    };

    app.myGeocoder.geocode(options, onGeocode);
  }
});
