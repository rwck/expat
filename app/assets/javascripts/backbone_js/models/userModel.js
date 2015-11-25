var app = app || {}

app.UserModel = Backbone.Model.extend({
  urlRoot: 'users',

  initialize: function() {

    this.listenTo(location, "change", app.myGoogleView.getGoogleMaps());
  }

})
