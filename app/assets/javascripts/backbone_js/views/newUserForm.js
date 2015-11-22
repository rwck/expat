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
    var newUserFirstName = $("#firstname-input-field").val();
    var newUserLastName = $("#lastname-input-field").val();
    alert(newUserFirstName);
    alert(newUserLastName);

    var myNewUser = new app.UserModel({
      firstname: newUserFirstName,
      lastname: newUserLastName,
    });

    console.log(myNewUser);
    myNewUser.save({
      success: function(myNewUser) {
        alert("Successfully saved ", myNewUser, "!")
      }
    });
    return false;
  },
});


//   firstname: newUserFirstName,
//   lastname: newUserLastName,
//   success: function(myNewUser) {
//     alert(newUserFirstName);
//   },
//   error: function(myNewUser) {
//     alert("FAiled");
//     console.log();
//   }
// });
