var app = app || {};

app.init = function() {

  app.user1 = new app.UserModel({
    firstname: "Trevor",
    lastname: "Sorbet"
  });

  app.user2 = new app.UserModel({
    firstname: "Gemima",
    lastname: "Puddleduck"
  });

  app.myUserCollection = new app.UserCollection();

  app.myUserCollection.fetch({
    success: function() {
      app.myUsersView.render()
  }});


  // # init in here

  app.myHomeView = new app.HomeView({
    collection: app.myUserCollection,
    model: app.myUserModel
  });

  app.myHomeView.render();

  app.myNewUserFormView = new app.NewUserFormView({
    collection: app.myUserCollection,
  });

  app.myNewUserFormView.render();

  app.myUsersView = new app.UsersView({
    collection: app.myUserCollection
  })
}
