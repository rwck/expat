var app = app || {};

app.GoogleView = Backbone.View.extend({

  initMap: function(mylat, mylon) {
    console.log("initialising map");


    if (mylat == undefined || mylat == null) {
      mylat = -33.8726559;
    }

    if (mylon == undefined || mylon == null) {
      mylon = 151.2044273;
    }


    map = new google.maps.Map(document.getElementById('googleMap'), {
      zoom: 12,
      center: {
        lat: mylat,
        lng: mylon
      }
    });

    console.log(map);

    geocoder = new google.maps.Geocoder();


    var thisIsMyThis = this;
    thisIsMyThis.geocodeAddress(geocoder, map);



    // $('.new-user-submit-button').click(function() {
    //   console.log("USER SUBMIT clicked");
    //   thisIsMyThis.geocodeAddress(geocoder, map);
    // });
  },

  // **************this works - i'm changing it to something that might not work
  // getGoogleMaps: function() {
  //   $.ajax({
  //     url: "https://maps.googleapis.com/maps/api/js?",
  //     dataType: "jsonp",
  //     data: {
  //       key: "AIzaSyAO2czLXUZis1LInOHGPLxNxFjkTx34X58",
  //       signed_in: true,
  //       callback: "app.myGoogleView.initMap"
  //     }
  //   });
  // },
  //************** end of what works

  getGoogleMaps: function(mylat, mylon) {
    $.ajax({
      url: "https://maps.googleapis.com/maps/api/js?",
      dataType: "jsonp",
      data: {
        key: "AIzaSyAO2czLXUZis1LInOHGPLxNxFjkTx34X58",
        signed_in: true,
      },
      success: function() {
        app.myGoogleView.initMap(mylat, mylon);
      }
    });
  },

  geocodeAddress: function(geocoder, resultsMap) {
    console.log("geocoder is firing");
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
          // alert(locationForMeetupSearch);
          console.log("this is the look up search coordinates", locationForMeetupSearch);

          latitude = locationForMeetupSearch.lat();
          longitude = locationForMeetupSearch.lng();

          htmlLookUpString = "https://api.meetup.com/find/groups";


          console.log(htmlLookUpString);

          ajaxResults = $.ajax({
            url: htmlLookUpString,
            dataType: "jsonp",
            data: {
              key: "25423068d7d50102e2030b14583f43",
              lat: latitude,
              lon: longitude
            },

            complete: function(result) {
              console.log(result);
            },

            error: function(xHR, status, message) {
              alert(message);
            }
          });

          console.log(ajaxResults);

          function logResults() {
            console.log(ajaxResults);
          }

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
