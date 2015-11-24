var app = app || {}

app.SearchView = Backbone.View.extend({
  el: ".search-form",

  template: _.template( $("#search-template").html() ),

  events: {
    "click .flickr-search": "clicked",
    "keydown": "test",
  },

  render: function() {
    console.log(this.model);
    console.log("Rendering Search View");

    var templateResult = this.template(this.model.attributes);
    this.$el.html(templateResult);
  },

  clicked: function(event) {

    // var newSearch = $("#search-field").val();
    // alert(newSearch);

    event.preventDefault();
    var newSearch = $(".search-input").val();
    alert(newSearch);
  }
});
