var app = app || {}

app.SearchModel = Backbone.Model.extend({
  urlRoot: 'users',

  defaults: {
    search: "Sydney"
  }
})
