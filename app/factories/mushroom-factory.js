'use strict';

myApp.factory("MushroomFactory", function($q, $http) {
  let getMushrooms = () => {
    return $q( (resolve, reject) => {
      $http.get("./lib/mushrooms.json")
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