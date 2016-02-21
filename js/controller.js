

APP.controller('MainCtrl', function ($scope, $state){

	
	$scope.logar = function (){
		$state.go('index')
	}
})

angular.module("starter").controller('IndexCtrl', function ($scope, $state, $http, desabafosAPI, $stateParams, userService){
	$scope.desabafar = function (){
		$state.go('xingamento')
	}

$scope.showMe = false;
	$scope.selecionar = function(){
		$scope.showMe = !$scope.showMe;
			//$state.go('selecionado');						
	}


		$scope.desabafos = [];

	var carregarDesabafos = function() {
		desabafosAPI.getDesabafos().success(function(data) {
			$scope.desabafos = data;
		});
	};
	carregarDesabafos();

})

APP.controller('SelectCtrl', function ($scope, $state) {
		
			console.log($scope.teste);
})

APP.controller('XingCtrl', function ($scope, $state){
	$scope.paginaInicial = function(){
		$state.go('index')
	}
})

