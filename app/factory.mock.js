angular.module('stipterApp.factory', [])

	.service('PostsFactory', function () {
		this.all = function () {
			return [
				{
					"id": 1403973582263,
					"name": "Lorem 1403973582263"
				},
				{
					"id": 1403973583241,
					"name": "Lorem 1403973583241"
				},
				{
					"id": 1403973583031,
					"name": "Lorem 1403973583031"
				},
				{
					"id": 1403973582647,
					"name": "Lorem 1403973582647"
				},
				{
					"id": 1403973582448,
					"name": "Lorem 1403973582448"
				},
				{
					"id": 1403973581847,
					"name": "Lorem 1403973581847"
				},
				{
					"id": 1403973582847,
					"name": "Lorem 1403973582847"
				},
				{
					"id": 1403973582073,
					"name": "Lorem 1403973582073"
				}
			];
		};

		this.create = function () {
			alert('This is mock. You cannot create new object.');
		};
	})

	.service('PostFactory', function () {
		this.show = function (obj) {
			return {"id": obj.id, "name": "Lorem " + obj.id};
		};

		this.update = function () {
			alert("This is mock. You cannot update this object");
		};

		this.delete = function () {
			alert('This is mock. You cannot delete this object');
		};
	})
;