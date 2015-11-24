var app = app || {};

app.SearchImages = Backbone.Collection.extend({
  url: "/users",
  model: app.SearchModel,

  initialize: function() {
   
  }

});
