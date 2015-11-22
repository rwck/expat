var app = app || {};

app.UserCollection = Backbone.Collection.extend({
  url: "/users",
  model: app.UserModel

});
