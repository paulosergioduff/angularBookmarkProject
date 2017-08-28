(function () {
    angular.module('projeto.projeto')
    .controller('Template1Ctrl', function ($scope, $state, $ionicPopup) {

        $scope.choice = {};
        $scope.data = {};
        $scope.data.address = "";

        // função init que simula entrega de dados da API (não implementada)
        
        var init = function () {
        $scope.endec = {url: '', keyword: ''};  
        $scope.endecsA = [ {
          url : 'www.google.com',
          keyword : 'Gloogle'
        }];
        $scope.endecsB = [ {
          url : 'www.yahoo.com',
          keyword : 'yahoo'
        }];
        $scope.endecsC = [ {
          url : 'www.globonews.com',
          keyword : 'globonews'
        }];

        $scope.fav = {url: '', keyword: ''};  
        $scope.favA = [ {
          url : 'www.ig.com.br',
          keyword : 'IG'
        }];
        $scope.favB = [ {
          url : 'www.uol.com.br',
          keyword : 'yahoo'
        }];
        $scope.favC = [ {
          url : 'www.telecine.com',
          keyword : 'telecine'
        }];
    }
    init();         


        loadSavedAddress();

        function loadSavedAddress() { //Chama API que carrega favoritos e historico nas abas correspondentes

        }

        $scope.saveFavouriteIfCheckboxMarked = function() { //Chama API que salva endereço que está no campo address do template
           var resultado = window.document.getElementById('resultado').value; // Pega resultado do campo de endereço
           alert('Endereço capturado: '+resultado+$scope.choice.choice);
        }

        $scope.loadAddressIntoField = function($escolha, $origem) { //Carrega o favorito ou endereço do histórico selecionado no campo do address do template e vai para aba Meus Endereços
          alert('funcao loadSavedAddress acionada. Usuário escolheu opção: '+$escolha+' de(o) '+$origem);
        }

        $scope.pegaResultado = function() { //Carrega o favorito ou endereço do histórico selecionado no campo do address do template e vai para aba Meus Endereços
          var resultado = window.document.getElementById('resultado').value;
          alert(resultado);
        }

    });
       
})();