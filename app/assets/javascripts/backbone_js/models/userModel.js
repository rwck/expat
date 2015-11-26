var app = app || {}

app.UserModel = Backbone.Model.extend({
  urlRoot: 'users',

  initialize: function() {
    this.on("change:current_location", this.geocode)
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
