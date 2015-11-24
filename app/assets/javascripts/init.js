var app = app || {};

app.init = function() {

  app.myUserCollection = new app.UserCollection();

  app.mySearchView = new app.SearchView({
    model: app.UserModel
  });

  app.myUsersView = new app.UsersView({
    collection: app.myUserCollection
  });

  app.myUserCollection.fetch({
    success: function() {
      app.myUsersView.render();
      app.mySearchView.render();
    }
  });







  // # init in here

  app.myHomeView = new app.HomeView({
    collection: app.myUserCollection,
    model: app.myUserModel
  });

  app.myHomeView.render();

  app.myNewUserFormView = new app.NewUserFormView({
    // model: app.myUserCollection.model
  });

  app.myNewUserFormView.render();


}
