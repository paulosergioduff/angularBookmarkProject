(function () {
    angular.module('projeto.route', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        
        $stateProvider

          // .state('app', {
          //     url: '/app',
          //     abstract: true,
          //     templateUrl: 'templates/menu.html'
          // })

        .state('template1', { //LUIGGI APPLE - tirei app.
            cache: false,
            url: '/template1',
            templateUrl: 'templates/template1.html',
            controller: 'Template1Ctrl'                   
        })

        .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'Template1Ctrl'
        }
      }
    })
   
    .state('template1.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "templates/template1.html"
        }
      }
    })
    
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/contact.html"
        }
      }
    });

        ;
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/template1');
    });
})();