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

  getMeetups: function(number, word) {

// response = HTTParty.get('https://api.meetup.com/find/groups?key=25423068d7d50102e2030b14583f43&lat=-34.397&lon=150.644&page=20')

    $.ajax({
      url: '/meetups.json',
      context: this,
      type: "GET",
      dataType: "json",
      data: {
        lat: "60",
        lon: "60",
        page: "10",
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





})




//
//   postShow: function(id) {
//     console.log("PostShow is being fired", id);
//     var post = app.blogPosts.get(id);
//     var view = new app.PostView({model: post});
//     view.render();
//   },
//
//   postIndex: function() {
//     console.log("PostIndex is being fired");
//     var view = new app.AppView({collection: app.blogPosts});
//     view.render();
//   },
// });
