define([
	'models/user',
	'text!templates/user/create.html'
], function(User, userTemplate){
	var View = Backbone.View.extend({
		el: '#content',
		template: _.template(userTemplate),

		events: {
			'click #saveBtn': 'createItem'
		},

		initialize: function(){
			this.render();
		},

		createItem: function(e){
			var thisEl = this.$el;
			var data;
			var firstName = thisEl.find('#firstName').val();
			var lastName = thisEl.find('#lastName').val();
			var dateOfBirth = thisEl.find('#dateOfBirth').val();

			var data = {
				firstName: firstName,
				lastName: lastName,
				dateOfBirth: dateOfBirth
			};

			var user = new User(data);

			user.save({}, {
				success: function(model){
					Backbone.history.fragment = '';
					Backbone.history.navigate('#users', {trigger: true});
				},
				error: function(response, xhr){
					alert(response.status);
				}
			});
		},

		render: function(){
			this.$el.html(this.template());

			return this;
		}
	});

	return View;
});