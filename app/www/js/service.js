angular.module("starter").factory("desabafosAPI", function ($http, config) {
	var _getDesabafos = function () {
		return $http.get(config.baseUrl + "/desabafos");
	};

	var _saveDesabafo = function (desabafo) {
		return $http.post(config.baseUrl + "/desabafos", contato);
	}
	return {
		getDesabafos: _getDesabafos,
		saveDesabafo: _saveDesabafo
	};

})

.factory('userService', function ($http) {
	var users = [];

	return {
		faca: function(users){
			return users;
		}
	}
})

/*
* Criado um novo serviço para manter o desabafo atual(Pode juntar com outro serviço fiz assim para separar),
* O serviço no angular basicamente é um singleton(Instância unica na aplicação)
* Então basta passar como dependencia nos controllers que utilizam o mesmo.
*/
.factory('desabafoAtual', function () {
	var desabafoAtual = [];

	var _getDesabafoAtual = function () {
		return desabafoAtual;
	};

	var _setDesabafoAtual = function (desabafo) {
		desabafoAtual = desabafo;
	};

	return {
		getDesabafo: _getDesabafoAtual,
		saveDesabafo: _setDesabafoAtual
	};
})