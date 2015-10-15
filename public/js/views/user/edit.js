define([
	'models/user',
	'text!templates/user/edit.html'
], function(User, userTemplate){
	var View = Backbone.View.extend({
		el: '#content',
		template: _.template(userTemplate),

		events: {
			'click #saveBtn': 'saveItem'
		},

		initialize: function(model){
			this.render(model);
		},

		saveItem: function(e){
			var self = this;
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
					self.undelegateEvents();
					Backbone.history.fragment = '';
					Backbone.history.navigate('#users', {trigger: true});
				},
				error: function(response, xhr){
					alert(response.status);
				}
			});
		},

		render: function(model){
			var dialogString = this.template(model);
			this.$el = $(dialogString).dialog();

			this.$el.find('#dateOfBirth').datepicker();

			return this;
		}
	});

	return View;
});