var app = app || {}

app.NewUserFormView = Backbone.View.extend({
  model: app.UserModel,
  el: "#new-user-form",

  template: _.template($("#enter-new-user-form-template").html(), {}),

  events: {
    "click .new-user-submit-button": "clicked",
    "keydown": "test",
  },

  render: function() {
    var templateResult = this.template(this.model.attributes);
    this.$el.html(templateResult);
  },

  clicked: function(event) {
    event.preventDefault();
    var newUserFirstName = $("#firstname-input-field").val();
    var newUserLastName = $("#lastname-input-field").val();
    var newUserLocation = $("#address-input-field").val()
    console.log(newUserFirstName);
    console.log(newUserLastName);
    console.log(newUserLocation);

    // myNewUser = new app.UserModel({
    //   firstname: newUserFirstName,
    //   lastname: newUserLastName,
    //   current_location: newUserLocation,
    // });

    // console.log(myNewUser);
    // myNewUser.save();


    this.model.create({
      firstname: newUserFirstName,
      lastname: newUserLastName,
      current_location: newUserLocation,
    });



  },
});
