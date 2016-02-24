// create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var app = angular.module('myApp', ['ngRoute']);

    // configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the contact list page
            .when('/', {
                templateUrl : 'components/contactlist/contactlist.html',
                controller  : 'ContactCtrl'
            })
            
            // route for the add new contact
            .when('/addnew', {
                templateUrl : 'components/addnew/addnew.html',
                controller  : 'AddCtrl'
            })

            // route for the contact page
            
    });

    
