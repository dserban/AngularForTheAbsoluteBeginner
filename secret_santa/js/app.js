'use strict';

var app = angular.module('SecretSantaNameDrawingApp', []);

app.controller('SecretSantaNameDrawingController', ['$scope', function($scope) {
  // begin



  // end

  window.sc = $scope;

}]);

// 'Alice, Andy, Ashley, Betty, Billy, Bobby, Bradley, Chris, Craig, Dorothy, Emily, Gregory, Jack, Jason, Jennifer, Jessica, Linda, Maggie, Ryan, Tony'

/*
  function generateSecretSantaHash(commaSeparatedListOfNames) {
    var resultOfSplittingByComma = commaSeparatedListOfNames.split(',');
    var resultOfTrimmingWhitespace = _.invoke(resultOfSplittingByComma, 'trim');
    var santas = _.shuffle(resultOfTrimmingWhitespace);
    var giftRecipients = _.clone(santas);
    var rightmostElement = santas.pop();
    var leftmostElement = giftRecipients.shift();
    var resultOfZip = _.zip(santas, giftRecipients);
    function absorbTupleIntoHash (hash, tuple) {
      hash[tuple[0]] = tuple[1];
      return hash;
    }
    var initialSecretSantaHash = {};
    initialSecretSantaHash[rightmostElement] = leftmostElement;
    var secretSantaHash = _.reduce( resultOfZip,
                                    absorbTupleIntoHash,
                                    initialSecretSantaHash );
    return secretSantaHash;
  }
*/

