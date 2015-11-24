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
    console.log("rendering new user form", this.collection.url);
    var templateResult = this.template(this.model.attributes);
    this.$el.html(templateResult);
  },

  clicked: function(event) {
    event.preventDefault();
    var newUserFirstName = $("#firstname-input-field").val();
    var newUserLastName = $("#lastname-input-field").val();
    var newUserLocation = $("#address-input-field").val();
    var newUserEmail = $("#email-input-field").val();
    if (
      newUserFirstName !== "" &&
      newUserLastName !== "" &&
      newUserLocation !== "" &&
      newUserEmail !== "") {
        console.log(newUserFirstName);
        console.log(newUserLastName);
        console.log(newUserLocation);
        console.log(newUserEmail);
        this.collection.create({
          firstname: newUserFirstName,
          lastname: newUserLastName,
          current_location: newUserLocation,
          email: newUserEmail
          });
        }


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
