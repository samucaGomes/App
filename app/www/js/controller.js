
//Aqui criamos cada controller definido no app.js

APP.controller('MainCtrl', function ($scope, $state){

	//dentro de cada controller criamos nossas variaveis e funções,
	//veja que aqui temos um funcao que ao ser invocada ele executa o metodo go da directiva $state, que nada mas faz que 
	//trocar a rota atual para o state 'blabla'
	//entendeu? Sim, mas eu nao sabia q no app.js tinha q criar uma variavel como vc fez lá no começo no module
	//não precisa mesmo, eu faço assim pra ficar mais fácil de declarar! mas poderia dexar direto seguido pelos pontos
	//que nada mais é que executrar funcoes em cascara
	//func1().func2().func3().func4()
	//com quebra de linha fica assim
	/*
	func1()

	.func2()

	.func3()

	entendeu?
	SIM
	*/
	$scope.logar = function (){
		$state.go('index')
	}
})

angular.module("starter").controller('IndexCtrl', function ($scope, $state, $http, desabafosAPI, $stateParams, userService, desabafoAtual){
	$scope.desabafar = function (){
		$state.go('xingamento')
	}

	$scope.idSelecionado = [];
	$scope.selecionar = function(nome, id, titulo, desabafo){
			//Salvo o desabafo atual no serviço desabafoAtual criado no service.js
			desabafoAtual.saveDesabafo(desabafo);
			$state.go('selecionado');
			$scope.idSelecionado = id;
			$scope.nomeSelecionado = nome;
			$scope.tituloSelecionado = titulo;
			$scope.desabafoSelecionado = desabafo;
			console.log($scope.idSelecionado, $scope.nomeSelecionado, $scope.tituloSelecionado, $scope.desabafoSelecionado);
			// $scope.idSelecionado.push($scope.nomeSelecionado);
	};

		$scope.desabafos = [];

	var carregarDesabafos = function() {
		desabafosAPI.getDesabafos().success(function(data) {
			$scope.desabafos = data;
		});
	};
	carregarDesabafos();

})

APP.controller('SelectCtrl', function ($scope, $state, desabafosAPI, $stateParams, userService, desabafoAtual) {
	//Obtenho o desabafoAtual salvo anteriormente e adiciono no escopo deste controller
	$scope.desabafo = desabafoAtual.getDesabafo();
})

APP.controller('XingCtrl', function ($scope, $state){
	$scope.paginaInicial = function(){
		$state.go('index')
	}
})

