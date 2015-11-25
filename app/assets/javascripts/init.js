var app = app || {};

app.init = function() {

  app.myFlickrView = new app.FlickrView({
  });

  app.myFlickrView.render();

  app.myUserCollection = new app.UserCollection();

  app.myUsersView = new app.UsersView({
    collection: app.myUserCollection
  });

  app.myUserCollection.fetch({
    success: function() {
      app.myUsersView.render();
      $.get("/users/current.json", function(data){
        console.log("test", data);
        app.myCurrentUser = app.myUserCollection.get(data.id);
        app.myCurrentUserView = new app.NewUserFormView({
          model: app.myCurrentUser
        });
        app.myCurrentUserView.render();
      });
    }
  });


  app.myHomeView = new app.HomeView({
    collection: app.myUserCollection,
    model: app.myUserModel

  // Deleted to get user authentication working
  // app.myNewUserFormView = new app.NewUserFormView({
  //   collection: app.myUserCollection

  });

  app.myHomeView.render();

  app.myUsersView = new app.UsersView({
    collection: app.myUserCollection
  });

  app.myGoogleView = new app.GoogleView();

  app.myRouter = new app.Router();

  Backbone.history.start();

}
