'use strict';

var app = angular.module('AngularToDoListApp', []);

app.controller('AngularToDoListController', ['$scope', '$http', function($scope, $http) {
  // begin

  $scope.currentlyTalkingToTheServer = true;



  // end

  window.sc = $scope;

}]);

/*
    $http.post('/endpoint', { 'k1': $scope.v1, 'k2': $scope.v2 })
      .success(function(data, status, headers, config) {
        // code goes here
      })
      .error(function(data, status, headers, config) {
        console.log('Error when requesting something-something.');
      });
*/
