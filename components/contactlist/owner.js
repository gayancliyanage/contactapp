var app = angular.module('myApp', []);

app.controller('OwnerCtrl', function($scope, $http){
	$scope.owner = {
		firstName: "Krishalee",
	   	lastName: "Karunarathna",
	   	number:"09090909"
	}
});