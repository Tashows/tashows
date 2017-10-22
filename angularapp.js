/*global angular*/
/*global $*/
var updateHash = function() {
  $('.navbar-right > li').removeClass('active');
  $('.navbar-right > li > a[href="' + window.location.hash + '"]').parent().addClass('active');
  // if (hash == "#/") {
  //   $('.navbar-right > li').removeClass('active');
  //   $('.navbar-right > li > a[href="#/"]').parent().addClass('active');
  // } else if (hash == "#/services") {
  //   $('.navbar-right > li').removeClass('active');
  //   $('.navbar-right > li > a[href="#/services"]').parent().addClass('active');
  // } else if (hash == "#/portfolio") {
  //   $('.navbar-right > li').removeClass('active');
  //   $('.navbar-right > li > a[href="#/portfolio"]').parent().addClass('active');
  // } else if (hash == "#/contact") {
  //   $('.navbar-right > li').removeClass('active');
  //   $('.navbar-right > li > a[href="#/contact"]').parent().addClass('active');
  // }
};

var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider, $sceDelegateProvider){
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
  
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'https://drive.google.com/file/d/0B5a_7H9E7GsrQy1jbERwM2ZqY1U/preview',
    'https://drive.google.com/file/d/0B5a_7H9E7GsrRXNyRDlyV3BtTnM/preview',
    'https://www.youtube.com/embed/36fnjNPa_0I',
    'https://drive.google.com/file/d/0B5a_7H9E7GsrZGxOY3paMm83cmM/preview',
    'https://www.youtube.com/user/PhotoContestGR/videos',
    'https://www.youtube.com/watch?v=hSye3T6FQZs',
    'https://www.youtube.com/watch?v=WPJpXu1O7mM',
    'https://www.youtube.com/watch?v=HomAZcKm3Jo',
    'https://drive.google.com/file/d/0B5a_7H9E7GsrMWRoUldjZVlIbU0/preview',
    'https://drive.google.com/file/d/0B5a_7H9E7GsraWNlRjI0SnhfVEE/preview',
    'https://www.youtube.com/embed/LTsG1PpqPHE',
    'https://www.youtube.com/embed/UHI8o3MLMF8'
    
    
  ]);
});

app.controller("aboutController", ["$scope", "$location", function($scope, $location) {
  updateHash();
  
  $scope.reviews = [
    {
      body: "He delivered 110% of what I needed! Clearly understood the project and delivered a perfect end product. I definitely intend to use his services for future projects!",
      author: "nalarid",
      authorUrl: "https://www.fiverr.com/nalarid",
      origin: "Fiverr",
      originUrl: "https://www.fiverr.com"
    },
    {
      body: "Cant say enough good things. Was delivered a well edited file in a timely fashion. Delivered exactly what was promised and the sound quality was great. Added foley elements which greatly enhanced the final product. Will def use again!",
      author: "Anghus",
      authorUrl: "https://www.fiverr.com/anghus",
      origin: "Fiverr",
      originUrl: "https://www.fiverr.com"
    },
    {
      body: "Fantastic experience working with Tashows!! Great sound engineer, fast communication, total professional!! Thanks Tasos! LOTS more work coming your way!! Good luck with the move! Best, RR/cineMOOK",
      author: "Cinemook",
      authorUrl: "https://www.fiverr.com/cinemook",
      origin: "Fiverr",
      originUrl: "https://www.fiverr.com"
    },
     {
      body: "Tasos is the best professional you could possibly hire! EVER!",
      author: "Mom",
      authorUrl: "",
      origin: "Fiverr",
      originUrl: "https://www.fiverr.com"
    },
    {
      body: "I can not say enough good things about this seller! The files were high quality and I will use his services again! Thanks!",
      author: "Fotogsarah",
      authorUrl: "https://www.fiverr.com/fotogsarah",
      origin: "Fiverr",
      originUrl: "https://www.fiverr.com"
    },
    {
      body: "Beautifully prepared video. Thank you. My experience was excellent.",
      author: "Bstavrou",
      authorUrl: "https://www.fiverr.com/bstavrou",
      origin: "Fiverr",
      originUrl: "https://www.fiverr.com"
    },
    {
      body: "TASHOWS is awesome!! Super fast and always high quality. Great to work with ; ) Tonya",
      author: "Tonyarsimp",
      authorUrl: "https://www.fiverr.com/tonyarsimp",
      origin: "Fiverr",
      originUrl: "https://www.fiverr.com"
    }
  ];
  
}]);

app.controller("servicesController", ["$scope", "$location", function($scope, $location) {
  updateHash();
}]);

app.controller("portfolioController", ["$scope", "$location", function($scope, $location) {
  updateHash();
  $scope.portfolioItems = [
    {
      title: "Exodus Sound Design",
      description: "This is part of a video clip for Noizia made by Alexander Lehmann. I have muted the original sound and replaced all the audio.",
      url: "https://drive.google.com/file/d/0B5a_7H9E7GsrQy1jbERwM2ZqY1U/preview",
      extra: "Original video clip",
      extraUrl: "https://www.youtube.com/watch?v=WPJpXu1O7mM"
    },
    {
      title: "Sintel Sound Design",
      description: 'I did this for my sound design class. It took me about 16 hours including all the foley and voices recordings, editing, mixing and mastering. The music is the original track by Jan Morgenstern.',
      url: "https://drive.google.com/file/d/0B5a_7H9E7GsrRXNyRDlyV3BtTnM/preview",
      extra: "Original Movie",
      extraUrl: "https://www.youtube.com/watch?v=HomAZcKm3Jo"
    },
    {
      title: "Assassin's Creed - Trailer Sound Design",
      description: 'A client asked me to replace the music keeping the same sound effects. After explaining that this is not possible (yet), we decided I would redo all the effects and then add the new music track.',
      url: "https://www.youtube.com/embed/36fnjNPa_0I",
      extra: "Original trailer",
      extraUrl: "https://www.youtube.com/watch?v=hSye3T6FQZs"
    },
    {
      title: "Photocontest Logo Sound Design",
      description: 'Sound design for the intro of Photocontest\'s interviews series on youtube. The motion graphics are also created by me.',
      url: "https://drive.google.com/file/d/0B5a_7H9E7GsrZGxOY3paMm83cmM/preview",
      extra: "Photo Contest\'s Youtube Channel",
      extraUrl: "https://www.youtube.com/user/PhotoContestGR/videos"
    },
    {
      title: "Open Source Logo Sound Design",
      description: 'Sound design for an explossive logo intro. The motion graphics are also created by me.',
      url: "https://drive.google.com/file/d/0B5a_7H9E7GsrMWRoUldjZVlIbU0/preview",
    },
    {
      title: "Interactive Audio in FMOD",
      description: 'Here you can see two FMOD projects I created for the course "Sound Design for Games and Films". The first one is an interactive bicycle simulation. The second one is an environmental simulation.',
      url: "https://drive.google.com/file/d/0B5a_7H9E7GsraWNlRjI0SnhfVEE/preview",
    },
    {
      title: "Pavarini Design Promo Video",
      description: 'This is a promotional video for Pavarini Design. I did all the audio editing, denoising and mixing.',
      url: "https://www.youtube.com/embed/LTsG1PpqPHE",
    },
    {
      title: "Photocontest Interview",
      description: 'This is one of the many interviews by photocontest.gr. My duties there included recording, editing, mixing and also motion graphics production. You can find more interviews in',
      url: "https://www.youtube.com/embed/UHI8o3MLMF8",
      extra: "Photo Contest\'s Youtube Channel",
      extraUrl: "https://www.youtube.com/user/PhotoContestGR/videos"
    }
  ];

}]);

app.controller("contactController", ["$scope", "$location", function($scope, $location) {
  updateHash();
}]);

app.directive("portfolioItem", function() {
  return {
    restrict: "E",
    templateUrl: "directives/portfolio-partial.html",
    replace: true,
    scope: {
      title: "@",
      url: "@",
      desc: "@",
      extra: "@",
      extraUrl: "@"
    },
    link: function(scope, elements, attrs) {
      
      var setIframeSize = function(){
        for (var i=0; i < $('.video-area').length; i++) {
          var height = Math.floor($('.video-area').eq(i).width() / 1.77);
          $('.video-area').eq(i).css("height", height);
        }
      };
      setIframeSize();
      
      $(window).resize(function(){
        setIframeSize();
      });
      
      $('.body-area > p > a').attr("target", "_blank");
      
    }
  };
});

app.directive("review", function(){
  return {
    restrict: "E",
    templateUrl: "directives/review.html",
    replace: true,
    scope: {
      author: "@",
      body: "@",
      authorUrl: "@"
    }
  };
});