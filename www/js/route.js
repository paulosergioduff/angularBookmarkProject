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

        ;
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/template1');
    });
})();