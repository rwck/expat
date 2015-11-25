var app = app || {};

app.GoogleView = Backbone.View.extend({

  initMap: function() {

    map = new google.maps.Map(document.getElementById('googleMap'), {
      zoom: 12,
      center: {
        lat: -33.8674869,
        // lat: 60.8674869,

        lng: 151.20699020000006
      }
    });

    geocoder = new google.maps.Geocoder();
    // console.log(geocoder);
    // console.log(map);

    // console.log(this.geocodeAddress);

    var thisIsMyThis = this;

    $('.new-user-submit-button').click(function() {
      console.log("USER SUBMIT clicked");
      thisIsMyThis.geocodeAddress(geocoder, map);
    });
  },

  getGoogleMaps: function() {
    $.ajax({
      url: "https://maps.googleapis.com/maps/api/js?",
      dataType: "jsonp",
      data: {
        key: "AIzaSyAO2czLXUZis1LInOHGPLxNxFjkTx34X58",
        signed_in: true,
        callback: "app.myGoogleView.initMap"
      }
    })
  },


  //   'http://maps.googleapis.com/maps/api/js?key=AIzaSyAO2czLXUZis1LInOHGPLxNxFjkTx34X58&&callback=app.myGoogleView.initMap',
  // })


  geocodeAddress: function(geocoder, resultsMap) {
    console.log(resultsMap);
    var address = document.getElementById('address-input-field').value;
    console.log(this.address);
    geocoder.geocode({
        'address': address
      },
      function(results, status) {
        console.log(results);
        bigResults = results;
        console.log(resultsMap);
        if (status === google.maps.GeocoderStatus.OK) {
          resultsMap.setCenter(results[0].geometry.location);
          locationForMeetupSearch = results[0].geometry.location;
          alert(locationForMeetupSearch);

          latitude = locationForMeetupSearch.lat()
          longitude = locationForMeetupSearch.lng();

          htmlLookUpString = "https://api.meetup.com/find/groups";
          // key=25423068d7d50102e2030b14583f43&lat=";

          console.log(htmlLookUpString);

          // htmlLookUpString += latitude.toString() + "&lon=" + longitude.toString();
          // console.log(htmlLookUpString);

          // $.ajaxSetup({
          //   headers:
          // })

          ajaxResults = $.ajax({
            url: htmlLookUpString,
            dataType: "json",
            // headers: Backbone.BasicAuth.getHeader({
            //   Access-Control-Allow-Origin: '*'
            // }),
            data: {
              key: "25423068d7d50102e2030b14583f43",
              lat: latitude,
              lon: longitude
            },
            complete: function(result) {
              console.log(result);
            },
            error: function(xHR, status, message) {
              alert(message)
            }
          });

          console.log(ajaxResults);

          function logResults() {
            console.log(ajaxResults)
          };

          var marker = new google.maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      }
    );
  }
});



//   latitude = locationForMeetupSearch.lat()
// longitude = locationForMeetupSearch.lng();
// var meetUpLookUp = "https://api.meetup.com/find/groups?key=25423068d7d50102e2030b14583f43&lat" + latitude + "&lon" + longitude;
// console.log(meetUpLookUp);
// alert([longitude, latitude]);
