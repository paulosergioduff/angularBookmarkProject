(function () {
    angular.module('projeto.projeto')
 
    .service('Template1Service', function ($http, $state, $q, APIconfig) {
        var service = this;
 
        service.service1 = function (uemail,upass) 
            {
                var postJson = '{"A":"'+A+'","B":"'+B+'"}';         
                return $http.post(APIconfig.getPath(),postJson).then(function (response) {
                    return response.data;
            });
        }
    });
})();   


// SERVICE TESTE

    /*
    // SERVICE DEMO
    angular.service('Template1Service', function($http, $state, $q, APIconfig) {
  this.todoList = [];
  this.addTodo = function (todo) {
    // Sua implementação
  }
  this.removeTodo = function (todo) {
    // Sua implementação
  }
});

// ORIGINAL

angular.service('Template1Service', function($http, $state, $q, APIconfig) {
        var service = this;
        service.service1 = function (uemail,upass) 
            {
                var postJson = '{"A":"'+A+'","B":"'+B+'"}';
                return $http.post(APIconfig.getPath(),postJson).then(function (response) {
                return response.data; });
            }
    }); 
    // SERVICE DEMO*/