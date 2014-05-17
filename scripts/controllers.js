// Generated by CoffeeScript 1.4.0

app.controller('mainCtrl', [
  '$scope', 'nearestShelters', function($scope, nearestShelters) {
    window.SCOPE = $scope;
    return navigator.geolocation.getCurrentPosition(function(position) {
      return $scope.nearestShelters = nearestShelters({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      }).query_jsonp();
    }, function() {});
  }
]);
