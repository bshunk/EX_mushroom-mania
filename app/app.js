'use strict';

let mushApp = angular.module("MushroomMania", ["ngRoute"])
.constant("FirebaseUrl", "https://mushroommania-33d32.firebaseio.com/");

mushApp.config( ($routeProvider) => {
  $routeProvider
  .when('/', {
    templateUrl: '/partials/mushroom-list.html',
    controller: 'MushroomController'
  });
});
