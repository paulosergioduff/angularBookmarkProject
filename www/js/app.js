(function () {
    angular.module('projeto', [
                                'ionic',
                                'projeto.route',
                                'projeto.projeto'
    ])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {


            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
            
        });
    });

    document.addEventListener("deviceready", onDeviceReady, false);

})();