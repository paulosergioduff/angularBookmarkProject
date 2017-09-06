(function () {
    angular.module('projeto.projeto')

    .service('Template1Service', function ($http, $state, $q) {
       var APIaddresses = "lib/APIaddresses.json";
      this.addressesResult = $http.get(APIaddresses);
      this.ConteudoRetorno = 'meu retoron22';
                this.objetoFuncao = function () {
                    return this.ConteudoRetorno;
                   }
        /*var resultado;
    	// Configura os servidores do service $http
              this.APIaddresses = "lib/APIaddresses.json"; // Arquivo JSON para ambiente de testes
            this.addressesResult = $http.get(this.APIaddresses)
             .then(function(res){
                resultado.push(res.data);                        
                                              
              });*/

             this.resultadoService = this.ConteudoRetorno;
             
    });
})();

