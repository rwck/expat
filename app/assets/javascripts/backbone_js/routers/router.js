var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    "users/:id": "usersShow",
    "meetups": "getMeetups"
    // "*other": "userIndex"

  },

  usersShow: function(id) {
    console.log("USERS SHOW IS BEING FIRED");
    console.log("id is", id);
  },

  getMeetups: function(myLat, myLon) {

    // this is not the best way to do this because it relies on a global variable
    // myLat = app.myGoogleView.bigResults[0];
    // myLon = app.myGoogleView.bigResults[1];

  $.ajax({
      url: '/meetups.json',
      context: this,
      type: "GET",
      dataType: "json",
      data: {
        lat: myLat,
        lon: myLon,
        // lat: "51.5072",
        // lon: "0.1275",
        page: "5",
      },

      success: function(data) {
        console.log("success", data);
      },

      error: function(xhr, status, message) {
        console.log("error", status, message);
      }
    });
  }
  //     app.router.navigate("#posts/" + route, true);
});
