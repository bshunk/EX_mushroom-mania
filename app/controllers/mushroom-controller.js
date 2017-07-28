'use strict';

myApp.controller("MushroomController", function($scope, MushroomFactory) {
  MushroomFactory.getMushrooms()
  .then( (mushroomData) => {
    console.log(mushroomData);
    if(mushroomData) {
    $scope.mushroomList = mushroomData.data.mushrooms;
  } else {
    console.log($scope.mushroomList = mushroomData.data.mushrooms);
    $scope.mushroomList = mushroomData.data.mushrooms;
  }
  });
});