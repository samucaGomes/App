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
