(function () {
    angular.module('projeto.projeto')
    .controller('Template1Ctrl', function ($scope, $state, $ionicPopup, $http) {

        $scope.choice = {};
        $scope.data = {};
        $scope.data.address = "";
        $scope.selecao = [];
                
        // Configura os servidores do service $http
        $scope.APIfavConfig = "lib/APIfav.json"; // Arquivo JSON para ambiente de testes
        $scope.APIhistConfig = "lib/APIhist.json";

        // função init que aplica entrega de dados da API
        var init = function () {
             var favResult = $http.get($scope.APIfavConfig)
             .then(function(res){
                $scope.favoritos = res.data;
                
                // adciona opções oriunda do JSON a $scope.selecao
                  for (var i = 0; i < 3; i++) {
                    $string = 'escolha:'+$scope.favorito;
                    $scope.selecao.push($string);
                  }
                // adciona opções oriunda do JSON a $scope.choice
                
                                              
              });

             var histResult = $http.get($scope.APIhistConfig)
             .then(function(res){
                $scope.historico = res.data;
                              
              });
          }
    init();         


        loadSavedAddress();

        function loadSavedAddress() { //Chama API que carrega favoritos e historico nas abas correspondentes

        }

        $scope.saveFavouriteIfCheckboxMarked = function() { //Chama API que salva endereço que está no campo address do template
           var resultado = window.document.getElementById('resultado').value; // Pega resultado do campo de endereço
           console.log('Endereço capturado: '+resultado+$scope.choice.choice);
        }

        $scope.loadAddressIntoField = function($escolha, $origem) { //Carrega o favorito ou endereço do histórico selecionado no campo do address do template e vai para aba Meus Endereços
          console.log('funcao loadSavedAddress acionada. Usuário escolheu opção: '+$escolha+' de(o) '+$origem);
        }

        $scope.pegaResultado = function() { //Carrega o favorito ou endereço do histórico selecionado no campo do address do template e vai para aba Meus Endereços
          var resultado = window.document.getElementById('resultado').value;
          console.log(resultado);
        }
    });


       
})();