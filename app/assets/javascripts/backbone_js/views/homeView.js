app = app || {}

app.HomeView = Backbone.View.extend({
  collection: app.UserCollection,
  el: "#main-div",
  template: _.template($("#backbone-template").html(), {}),

  render: function() {
    var templateResult = this.template(this.model.attributes);
    this.$el.html(templateResult);
  }
});
