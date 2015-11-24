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
    }
  });


  app.myHomeView = new app.HomeView({
    collection: app.myUserCollection,
    model: app.myUserModel
  });

  app.myHomeView.render();

  app.myNewUserFormView = new app.NewUserFormView({
    collection: app.myUserCollection
  });

  app.myNewUserFormView.render();

  app.myUsersView = new app.UsersView({
    collection: app.myUserCollection
  });

  app.myGoogleView = new app.GoogleView();

}
