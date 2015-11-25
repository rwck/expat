var app = app || {}

app.NewUserFormView = Backbone.View.extend({

  el: "#new-user-form",

  template: _.template($("#enter-new-user-form-template").html(), {}),

  events: {
    "click .new-user-submit-button": "clicked",
    "keydown": "test",
  },

  render: function() {
    // console.log("rendering new user form", this.collection.url);
    // var templateResult = this.template();
    // this is daisy's version ...
    // console.log("rendering new user form", this.collection.url);
    //
    var templateResult = this.template(this.model.attributes);

    this.$el.html(templateResult);
  },

  // thisIsMyThis: this,

  clicked: function(event) {
    event.preventDefault();
    var newUserFirstName = $("#firstname-input-field").val();
    var newUserLastName = $("#lastname-input-field").val();
    var newUserLocation = $("#address-input-field").val();
    var newUserEmail = $("#email-input-field").val();

    console.log(newUserFirstName);
    console.log(newUserLastName);
    console.log(newUserLocation);
    console.log(newUserEmail);
    this.model.save({
      firstname: newUserFirstName,
      lastname: newUserLastName,
      current_location: newUserLocation,
      email: newUserEmail
    });


    // we no longer needed all this logic because the initial signup form redirects here and only needs an email field

    // if (
    //   newUserFirstName !== "" &&
    //   newUserLastName !== "" &&
    //   newUserLocation !== "" &&
    //   newUserEmail !== "") {
    //   console.log(newUserFirstName);
    //   console.log(newUserLastName);
    //   console.log(newUserLocation);
    //   console.log(newUserEmail);
    //   this.collection.create({
    //     firstname: newUserFirstName,
    //     lastname: newUserLastName,
    //     current_location: newUserLocation,
    //     email: newUserEmail
    //   });
    // }


    // myNewUser = new app.UserModel({
    //   firstname: newUserFirstName,
    //   lastname: newUserLastName,
    //   current_location: newUserLocation,
    // });

    // console.log(myNewUser);
    // myNewUser.save();


  },
});
