(function () {

      angular.module('projeto.projeto' )
    .controller('Template1Ctrl', function ($scope, Template1Service, Template2Service, $state, $ionicPopup, $http) {

        $scope.choice = {};
        $scope.data = {};
        $scope.data.address = "";
        
        $scope.recebeDado = Template1Service.objetoFuncao();
        

                    
        // função init que aplica entrega de dados da API
        var init = function () {
         $scope.recebeString = Template2Service.objeto();
          // Configura os servidores do service $http
              $scope.APIaddresses = "lib/APIaddresses.json"; // Arquivo JSON para ambiente de testes
             var addressesResult = $http.get($scope.APIaddresses)
             .then(function(res){
                $scope.favoritos = res.data;                        
                                              
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