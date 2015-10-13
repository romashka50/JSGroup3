define([
	'models/user',
	'text!templates/user/user.html',
	'views/user/create'
], function(User, userTemplate, CreateView){
	var View = Backbone.View.extend({
		el: '#content',
		template: _.template(userTemplate),

		events: {
			'click #createBtn': 'createItem',
			'click tr': 'remove'
		},

		initialize: function(optins){
			this.render(optins);
		},

		createItem: function(e){
			//Show createView
			return new CreateView();
		},

		remove: function(e){
			var targetEl = $(e.target);
			var tr = targetEl.closest('tr');
			var id = tr.attr('id');
			var user = new User({_id: id});

			user.destroy({
				success: function(){
					tr.remove();
				},
				error: function(){
					alert('error');
				}
			});

			return;
		},

		render: function(optins){
			var collection = optins.collection.toJSON();

			this.$el.html(this.template({users: collection}));

			return this;
		}
	});

	return View;
});