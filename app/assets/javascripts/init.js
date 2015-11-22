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

  app.myUserCollection = new app.UserCollection([
    app.user1,
    app.user2
  ]);



  app.myHomeView = new app.HomeView({
    collection: app.myUserCollection,
    model: app.myUserModel
  });
  app.myHomeView.render();

  app.myNewUserFormView = new app.NewUserFormView({
  });
  app.myNewUserFormView.render();

  app.myUsersView = new app.UsersView({
    collection: app.myUserCollection
  })
}

user1 = {

}
user2 = {

}


function setupStartingData() {
  var users = {

  }
  return users["user1"]

}
