var app = app || {};

app.init = function() {

  app.myUserModel = new app.UserModel();

  app.myUserCollection = new app.UserCollection([
    user1,
    user2
  ]);

  app.myHomeView = new app.HomeView({
    collection: app.myUserCollection,
    model: app.myUserModel
  });
  app.myHomeView.render();
}

user1 = {
  firstname: "Trevor",
  lastname: "Sorbet"
}
user2 = {
  firstname: "Gemima",
  lastname: "Puddleduck"
}




function setupStartingData() {
  var users = {

  }
  return users["user1"]

}
