var app = app || {};

app.onGoogleInitialise = function() {

};

app.setUpMapListen = function() {
  app.myGoogleView.listenTo(app.myCurrentUser, "change:latLng", function() {
    app.myGoogleView.setCentre(app.myCurrentUser.get("latLng"));
  });
}

app.setUpMeetupListen = function() {
  app.myGoogleView.listenTo(app.myCurrentUser, "change:latLng", function() {
    app.myGoogleView.searchMeetup(app.myCurrentUser.get("latLng"));
  });
}

app.setUpFlickrListen = function() {
  app.myFlickrView.listenTo(app.myCurrentUser, "change:latLng", function() {
    app.myFlickrView.flickrClicked(app.myCurrentUser.get("latLng"));
  });
};

app.init = function() {

  app.myGeocoder = new google.maps.Geocoder();
  app.myGoogleView = new app.GoogleView();

  app.myFlickrView = new app.FlickrView({
  });

  app.myFlickrView.render();

  app.myUserCollection = new app.UserCollection();

  app.myUsersView = new app.UsersView({
    collection: app.myUserCollection,
    lat: 40,
    lon: 40
  });

  // Added by Donald - this might not work
  app.myUserModel = new app.UserModel();
  // --------

  app.myUserCollection.fetch({
    success: function() {
      app.myUsersView.render();
      $.get("/users/current.json", function(data){
        console.log("test", data);
        app.myCurrentUser = app.myUserCollection.get(data.id);
        app.myCurrentUserView = new app.NewUserFormView({
          model: app.myCurrentUser,
        });
        app.myCurrentUserView.render();

        app.myCurrentUser.geocode();
        app.setUpMapListen();
        app.setUpMeetupListen();
        app.setUpFlickrListen();
        app.myGoogleView.initMap();

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
    collection: app.myUserCollection,
  });

  // app.myGoogleView.getGoogleMaps()

  app.myRouter = new app.Router();

  Backbone.history.start();

}
