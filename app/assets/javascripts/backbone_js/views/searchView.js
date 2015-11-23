var app = app || {}

app.SearchView = Backbone.View.extend({

  template: _.template($("#search-template").html(), {}),

  events: {
    "click .search-button": "clicked",
    "keydown": "test",
  },

  render: function() {
    var templateResult = this.template(this.model.attributes);
    this.$el.html(templateResult);
  },

  clicked: function(event) {
    var newSearch = $("#search-field").val();
    alert(newSearch);
  },

  render: function() {
    console.log("Rendering Search View");
