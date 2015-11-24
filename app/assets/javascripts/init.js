var app = app || {};

app.init = function() {

  // app.mySearchView = new app.SearchView({
  //   model: app.UserModel
  // });

  app.myFlickrView = new app.FlickrView({
  });

  app.myFlickrView.render();



  app.myUsersView = new app.UsersView({
    collection: app.myUserCollection
  });

  app.myUserCollection = new app.UserCollection();

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
    // model: app.myUserCollection.model
  });

  app.myNewUserFormView.render();

  app.myUsersView = new app.UsersView({
    collection: app.myUserCollection
  });

  app.myGoogleView = new app.GoogleView();

}
