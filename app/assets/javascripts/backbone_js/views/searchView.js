var app = app || {}

app.SearchView = Backbone.View.extend({

  template: _.template( $("#search-template").html() ),

  events: {
    "click .search-button": "clicked",
    "keydown": "test",
  },

  render: function() {
    var templateResult = this.template(this.model.attributes);
    this.$el.html(templateResult);
  },

  clicked: function(event) {
    event.preventDefault();
    var newSearch = $(".search-input").val();
    alert(newSearch);
  }
});
