/* eslint-disable */
angular.module('todoService', [])
	.factory('Todos', ['$http', function ($http) {
		return {
			get: function () {
				return $http.get('/api/todos');
			},
			create: function (user) {
				return $http.post('/api/todos', user);
			}
		}
	}]);
