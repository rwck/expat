var app = app || {}

app.UserModel = Backbone.Model.extend({
  urlRoot: 'users',

  defaults: {
    firstname: "Henry",
    lastname: "Cooper"
  }
})
