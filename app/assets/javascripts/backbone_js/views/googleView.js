var app = app || {};

app.GoogleView = Backbone.View.extend({

  initMap: function() {

    map = new google.maps.Map(document.getElementById('googleMap'), {
      zoom: 10,
      center: {
        lat: -33.8674869,
        lng: 151.20699020000006
      }
    });

    geocoder = new google.maps.Geocoder();
    console.log(geocoder);
    console.log(map);

    console.log(this.geocodeAddress);

    var thisIsMyThis = this;

    $('.new-user-submit-button').click(function() {
      thisIsMyThis.geocodeAddress(geocoder, map);
    });
  },

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

          htmlLookUpString = "https://api.meetup.com/find/groups?key=25423068d7d50102e2030b14583f43&lat=";

          console.log(htmlLookUpString);

          htmlLookUpString += latitude.toString() + "&lon=" + longitude.toString();
          console.log(htmlLookUpString);

          ajaxResults = $.ajax({
            type: "POST",
            datatype: "jsonp",
            data: htmlLookUpString,
          });

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
