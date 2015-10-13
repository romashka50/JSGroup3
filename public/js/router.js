define([
	'collections/users',
	'views/user/user'
], function(UserCollection, UserView){
	var Router = Backbone.Router.extend({

		routes: {
			"users": "users",
			"posts": "posts",
			"*any": "any"
		},

		users: function(){
			var self = this;
			var collection = new UserCollection();
			var renderView = function(){
				if(self.userView){
					self.userView.undelegateEvents();
				}

				self.userView = new UserView({
					collection: collection
				});
				return self;
			};

			collection.fetch({reset: true});
			collection.bind('reset', renderView);
		},

		posts: function(){
			alert('Posts');
		},

		any: function(){
			alert('404');
		}
	});

	return Router;
});