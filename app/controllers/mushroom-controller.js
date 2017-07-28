'use strict';

myApp.controller("MushroomController", function($scope, MushroomFactory) {
  
  MushroomFactory.getMushrooms()
  .then( (mushroomData) => {
    console.log(mushroomData);
    $scope.mushroomList = mushroomData.data.mushrooms;
  });

  // defining $scope.showEdible to equal the result of the function
  $scope.showEdible = () => {
    $scope.isEdible = true;
    $scope.notEdible = false;
    console.log("edible?", $scope.isEdible);
  }

  // defining $scope.showNotEdible to equal the result of the function
  $scope.showNotEdible = () => {
    $scope.isEdible = false;
    $scope.notEdible = true;
    console.log("not edible?", $scope.notEdible);

  }

});
