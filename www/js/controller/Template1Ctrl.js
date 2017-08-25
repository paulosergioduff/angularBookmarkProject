(function () {
    angular.module('convem.Template1Ctrl')
    .controller('Template1Ctrl', function ($scope, $state, $ionicPopup) {

        loadSavedAddress();

        function loadSavedAddress() { //Chama API que carrega favoritos e historico nas abas correspondentes

        }

        $scope.saveFavouriteIfCheckboxMarked = function() { //Chama API que salva endereço que está no campo address do template

        }

        $scope.loadAddressIntoField = function() { //Carrega o favorito ou endereço do histórico selecionado no campo do address do template e vai para aba Meus Endereços

        }

    });
})();

function controllerAqui(){
  alert('Controller "template1Ctrl.js" injetad0 com sucesso!');
}