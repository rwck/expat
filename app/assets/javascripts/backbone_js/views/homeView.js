var app = app || {}

app.HomeView = Backbone.View.extend({
  collection: app.UserCollection,
  el: "#main-div",
  // template: _.template($("#backbone-template").html(), {}),

  render: function() {
    console.log("rendering  app.homeview ");
    var models = this.collection.models;
    for (var i = 0; i < models.length; i++) {
      // var template = _.template($("#backbone-template").html(), {});
      // var templateResult = this.template(models[i].attributes);
      // console.log(templateResult);
      // this.$el.append(templateResult);

    }

    // this.$el.html(templateResult);
  }
});
