var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    "users/:id": "usersShow",
    "meetups/:number/:word": "getMeetups"
    // "*other": "userIndex"

  },

  usersShow: function(id) {
    console.log("USERS SHOW IS BEING FIRED");
    console.log("id is", id);
  },

  getMeetups: function(number, word) {
    alert(word);
    
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
