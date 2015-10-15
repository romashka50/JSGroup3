define([
	'models/user',
	'collections/users',
	'views/user/user',
	'views/user/edit'
], function(User, UserCollection, UserView, EditView){
	var Router = Backbone.Router.extend({

		routes: {
			"users(/:userId)": "users",
			"posts": "posts",
			"*any": "any"
		},

		initialize: function(){

		},

		users: function(userId){
			var self = this;
			var collection;
			var renderView;
			var user;

			if(!userId) {
				collection = new UserCollection();

				collection.unbind();
				renderView = function () {
					if (self.userView) {
						self.userView.undelegateEvents();
					}

					self.userView = new UserView({
						collection: collection
					});
					return self;
				};

				collection.fetch({reset: true});
				collection.bind('reset', renderView, this);
			} else {
				user = new User({_id: userId});
				user.fetch({
					success: function(model, response){
						self.userView = new EditView(model.toJSON());
					},
					error: function(model, response){
						alert(response.text);
					}
				});
			}
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