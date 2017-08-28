(function () {
    angular.module('projeto.endec')
    $servico = angular.service('JSONCtrl', function ($scope, $state, $ionicPopup) {

        $scope.choice = {};
        $scope.data = {};
        $scope.data.address = "";

        // dados dos enderecos em JSON
        $scope.endec = {url: '', keyword: ''};  
        $scope.endecs = [ {
          url : 'www.google.com',
          keyword : 'Gloogle'
        }, {
          url : 'www.yahoo.com.br',
          keyword : 'yahoo'
        },
        {
          url : 'www.globonews.com',
          keyword : 'globonews'
        }
         ];


    });
    
   


})();