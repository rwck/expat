var app = app || {};

app.UserCollection = Backbone.Collection.extend({
  url: "/users",
  model: app.UserModel,

  initialize: function() {
    // this.on("change", )
  }

});
