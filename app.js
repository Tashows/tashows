/*global angular*/
/*global $*/
var hash = "";
var updateHash = function() {
  hash = window.location.hash;
  if (hash == "#/") {
    $('.navbar-right > li').removeClass('active');
    $('.navbar-right > li > a[href="#/"]').parent().addClass('active');
  } else if (hash == "#/services") {
    $('.navbar-right > li').removeClass('active');
    $('.navbar-right > li > a[href="#/services"]').parent().addClass('active');
  } else if (hash == "#/portfolio") {
    $('.navbar-right > li').removeClass('active');
    $('.navbar-right > li > a[href="#/portfolio"]').parent().addClass('active');
  } else if (hash == "#/contact") {
    $('.navbar-right > li').removeClass('active');
    $('.navbar-right > li > a[href="#/contact"]').parent().addClass('active');
  }
};

var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
  .when("/", {
    templateUrl: 'pages/about.html',
    controller: 'aboutController'
  })
   
  .when("/services", {
    templateUrl: 'pages/services.html',
    controller: 'servicesController'
  })
   
  .when("/portfolio", {
    templateUrl: 'pages/portfolio.html',
    controller: 'portfolioController'
  })
   
  .when("/contact", {
    templateUrl: 'pages/contact.html',
    controller: 'contactController'
  });
});

app.controller("aboutController", ["$scope", "$location", function($scope, $location) {
  updateHash();
}]);

app.controller("servicesController", ["$scope", "$location", function($scope, $location) {
  updateHash();
}]);

app.controller("portfolioController", ["$scope", "$location", function($scope, $location) {
  updateHash();
  $scope.portfolio1 = {
    title: "Exodus Sound Design",
    description: "This is part of a video clip for Noizia made by Alexander Lehmann. I have muted the original sound and replaced all the audio.",
    url: "https://drive.google.com/file/d/0B5a_7H9E7GsrQy1jbERwM2ZqY1U/preview"
  };
  
  $scope.portfolio2 = {
    title: "Sintel Sound Design",
    description: 'I did this for my class "Sound Design for Games and Films". Took me about 16 hours including all the foley recordings, voices recordings, editing, mixing and mastering. The music is the original track by Jan Morgenstern.',
    url: "https://drive.google.com/file/d/0B5a_7H9E7GsrRXNyRDlyV3BtTnM/preview",
  };
  
}]);

app.controller("contactController", ["$scope", "$location", function($scope, $location) {
  updateHash();
}]);