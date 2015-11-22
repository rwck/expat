var app = app || {}

app.UsersView = Backbone.View.extend({
  el: $("#test"),
  // url
  // el: "#backbone-template",
  // template: _.template($("#backbone-template").html(), {}),

  render: function() {
    console.log("Rendering Users View");

    var tableTemplate = _.template($("#table-template").html());

    var pageContents = tableTemplate({users: this.collection});

    $("#put-table-here").html(pageContents);


    return


    // console.log(testClass);
    firstNameTemplate = _.template($("#first-name-template").html(), {});
    firstNameID = $(".firstname");
    lastNameID = $(".lastname");
    lastNameTemplate = _.template($("#last-name-template").html(), {});
    console.log(this.$el);

    models = this.collection.models;
    for (var i = 0; i < models.length; i++) {
      firstNameID.html(firstNameTemplate(models[i].attributes));
      lastNameID.html(lastNameTemplate(models[i].attributes));
    }
  }
});
