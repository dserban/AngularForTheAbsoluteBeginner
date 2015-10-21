'use strict';

var app = angular.module('AngularToDoListApp', []);

app.controller('AngularToDoListController', ['$scope', '$http', function($scope, $http) {
  // begin

  $scope.currentlyTalkingToTheServer = true;



  // end

  window.sc = $scope;

}]);

