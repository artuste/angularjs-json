angular.module('stipterApp.service', ['LocalStorageModule'])

	.service('LocalPostStorage', function (localStorageService) {

		var self = this;

		this.init = function ($scope) {
			$scope.$watchCollection('post', function (newValues, oldValues) {
				if ($scope.postform.$dirty) {
					self.add($scope.post);
				}
			});
		}

		this.add = function (postObj) {

			if (postObj.id == undefined) {
				return;
			}

			if (localStorageService.get('posts') == null) {
				localStorageService.set('posts', {});
			}

			var posts = localStorageService.get('posts');

			postObj.dirty = true;
			posts[postObj.id] = postObj;

			localStorageService.set('posts', posts);
		}

		this.getAll = function () {
			return localStorageService.get('posts');
		}

		this.isCached = function (id) {
			if (self.get(id) == undefined) {
				return false
			}
			return true;
		}

		this.get = function (id) {
			var posts = localStorageService.get('posts');
			if (posts == undefined) {
				return;
			}
			return posts[id];
		}

		this.remove = function (id, callback) {
			var posts = localStorageService.get('posts');
			if (posts == undefined) {
				return;
			}
			delete posts[id];
			localStorageService.set('posts', posts);
			if (callback) callback();
		}

		this.tagCached = function (posts) {

			posts.forEach(function (post) {
				if (self.isCached(post.id)) {
					post.dirty = true;
				}
			});
		}
	})

;