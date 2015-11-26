var app = app || {};

app.NewUserFormView = Backbone.View.extend({

  el: "#new-user-form",

  // lat: 60,
  // lon: 60,

  initialize: function() {
    console.log("initialising new user view");
    console.log(this);
    this.listenTo(this.model, "change:current_location", function(event) {
      app.myGoogleView.getGoogleMaps();
      console.log("this is coming from the bigResults", app.myGoogleView.bigResults);




      app.myRouter.getMeetups(51.5072, 0.1275);
      // this.getCoordinates();
    });
  },


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
    var templateResult = this.template({
      user: this.model.attributes
    });

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
    // changed the below from save to set
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
