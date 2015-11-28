var app = app || {}

// env = ENV["GOOGLEMAPS_API"];

app.HomeView = Backbone.View.extend({
  collection: app.UserCollection,
  el: "#main-div",
  // el: "#googlemaps-script",

  // googleMapsApi: ENV["GOOGLEMAPS_API"],

  //

  // template: _.template($("#backbone-template").html(), {}),

  // ENV["GOOGLEMAPS_API"]

  render: function() {

    // var models = this.collection.models;
    // for (var i = 0; i < models.length; i++) {
    //   var template = _.template($("#backbone-template").html(), {});
      // var templateResult = this.template(models[i].attributes);
      // console.log(templateResult);
      // this.$el.append(templateResult);
    //   // this.$el.html(templateResult);
    // }
  }
})
