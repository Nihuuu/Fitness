import React, { useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader"

const NearbyRestaurants = () => {
 /* global google */

  useEffect(() => {
    const loader = new Loader({
      apiKey: `AIzaSyB_-R8YD65zPOYOXg7xRLBubgimY8nZWX0`,
      version: "weekly",
      libraries: ["places"]
    });

    loader.load().then(() => {
      var map;
      var service;

      function initialize() {
        var pyrmont = new google.maps.LatLng(20.5937, 78.9629);

        map = new google.maps.Map(document.getElementById('map'), {
          center: pyrmont,
          zoom: 10
        })

        var input = document.getElementById('searchTextField');

        let autocomplete = new google.maps.places.Autocomplete(input)

        autocomplete.bindTo('bounds', map)

        let marker = new google.maps.Marker({
          map: map
        })

        google.maps.event.addListener(autocomplete, 'place_changed', () => {
          let place = autocomplete.getPlace()
          console.log(place)
          console.log(place.photos[0].getUrl())

          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport)
          } else {
            map.setCenter(place.geometry.location)
            map.setZoom(30)
          }
          marker.setPosition(place.geometry.location)
          marker.setVisible(true)

          let request = {
            location: place.geometry.location,
            radius: '500',
            type: ['restaurant']
          }

          service = new google.maps.places.PlacesService(map)
          service.nearbySearch(request, callback)

        })
      }

      function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
      }

      function createMarker(place) {
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function () {
          alert(place.name);
          window.open(place.photos[0].getUrl(), "_blank");
        });
      }

      initialize();
    });
  }, []);

  return (
    <div>
      <input id="searchTextField" type="text" size="100" style={{ height: '30px' }} />
      <div id="map" style={{ height: '720px' }}></div>
    </div>
  );
}

export default NearbyRestaurants;

