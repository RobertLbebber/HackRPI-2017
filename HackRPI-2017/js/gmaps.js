      // Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
      currentPos = {lat: 42.7293222, lng: -73.6795956};
      var map, infoWindow;
      function initMap() {


        map = new google.maps.Map(document.getElementById('map'), {

          center: {lat: 42.7293222, lng: -73.6795956},
          zoom: 20
        });
        infoWindow = new google.maps.InfoWindow;

        
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude

            };
             console.log(pos.lat +" , "+pos.lng);
            currentPos.lat = pos.lat;
            currentPos.lng = pos.lng;
            //console.log(currentPos.lat +" , "+currentPos.lng);
            /*
            infoWindow.setPosition(pos);
            infoWindow.setContent('Men\'s Bathroom');
            infoWindow.open(map);

            */
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
        console.log(currentPos.lat +" , "+currentPos.lng);

        /*
        var marker = new google.maps.Marker({
        	position: {lat:currentPos.lat, lng:currentPos.lng},
        	 title: 'Your Location',
        	map: map
        });
        */

             var icons = {
          male_female: {
          icon: 'icons/male+female.png'
        },
        male: {
          icon: 'icons/male.png'
        },
        female: {
          icon: 'icons/female.png'
        }
      };
      var features = [
      {
        position: new google.maps.LatLng( 42.7293222, -73.6795956),
        type: 'male_female'
      },
      {
        position: new google.maps.LatLng(-33.91721, 160.22630),
        type: 'male'
      },
      {
        position: new google.maps.LatLng(-33.91721, 151.22630),
        type: 'female'
      }];

      // Create markers.
        features.forEach(function(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
        });
        
        console.log(currentPos);

      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }