'use strict';

const myApp = angular.module("mushroomMania", []);

myApp.factory("MushroomFactory", function($q, $http) {
	let getMushrooms = () => {
		return $q( (resolve, reject) => {
			$http.get("./mushrooms.json")
			.then( (mushrooms) => {
				resolve(mushrooms);
			})
			.catch( (err) => {
				reject(err);
			});
		});
	};
	return {getMushrooms};
});

myApp.controller("MushroomController", function($scope, MushroomFactory) {
	MushroomFactory.getMushrooms()
	.then( (mushroomData) => {
		console.log(mushroomData);
		$scope.mushroomList = mushroomData.data.mushrooms;
		console.log($scope.mushroomList = mushroomData.data.mushrooms);
	});
});
