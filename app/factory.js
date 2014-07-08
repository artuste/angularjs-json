angular.module('stipterApp.factory', ['ngResource'])

	.factory('PostsFactory', function ($resource) {
		return $resource(BACKEND_URL + '/posts/', {}, {
			all: { method: 'GET', isArray: true },
			create: { method: 'POST' }
		})
	})

	.factory('PostFactory', function ($resource) {
		return $resource(BACKEND_URL + '/posts/:id', {}, {
			show: { method: 'GET' },
			update: { method: 'PUT', params: {id: '@id'} },
			delete: { method: 'DELETE', params: {id: '@id'} }
		})
	})

;