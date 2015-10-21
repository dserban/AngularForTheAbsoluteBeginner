'use strict';

var app = angular.module('PersonalDevelopmentApp', []);

app.controller('PersonalDevelopmentAppController', ['$scope', function($scope) {
  // begin

  $scope.currentlyViewing = 'welcomepage';
  $scope.currentlySelectedWeekDay = 'Monday';
  $scope.descriptionOfGoalToAdd = '';

  $scope.weekDays =
    [ 'Monday'   ,
      'Tuesday'  ,
      'Wednesday',
      'Thursday' ,
      'Friday'   ,
      'Saturday' ,
      'Sunday'   ];
  $scope.habits =
    [ { 'id':  '0', 'description': 'Drink at least 10 glasses of water'             },
      { 'id':  '1', 'description': 'Eat a healthy diet'                             },
      { 'id':  '2', 'description': 'Spend at least 15 minutes learning a new skill' },
      { 'id':  '3', 'description': 'Do your best to be punctual'                    },
      { 'id':  '4', 'description': 'Brisk-walk or jog at least 30 minutes'          },
      { 'id':  '5', 'description': 'Brush your teeth twice'                         },
      { 'id':  '6', 'description': 'Connect with family and friends'                },
      { 'id':  '7', 'description': 'Achieve Zero-Inbox'                             },
      { 'id':  '8', 'description': 'Refrain from watching TV'                       },
      { 'id':  '9', 'description': 'Drink no more than one beer'                    },
      { 'id': '10', 'description': 'Do something to declutter your life'            } ];



  // end

  window.sc = $scope;

}]);

