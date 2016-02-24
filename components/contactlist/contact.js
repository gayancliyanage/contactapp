var app = angular.module('myApp', []);
app.controller('ContactCtrl', function($scope, $http) {
    $scope.contactlist = [
	{
	   id: 1,
	   firstName: "Peter",
	   lastName: "Jhons"},
	{
	   id: 2,
	   firstName: "David",
	   lastName: "Bowie"}
	];
});
