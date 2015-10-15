define([
	'models/user',
	'text!templates/user/user.html',
	'views/user/create'
], function(User, userTemplate, CreateView, EditView){
	var View = Backbone.View.extend({
		el: '#content',
		template: _.template(userTemplate),

		events: {
			'click #createBtn': 'createItem',
			'click .removeBtn': 'remove',
			'click tr': 'editUser'
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

		editUser: function(e){
			var targetEl = $(e.target);
			var tr = targetEl.closest('tr');
			var id = tr.attr('id');
			var user = new User({_id: id});

			user.fetch({
				success: function(model){
					var url = model.urlRoot() + '/' + model.id;
					model = model.toJSON();
					/*return new EditView(model);*/
					Backbone.history.navigate(url, {trigger: true});
				},
				error: function(){
					alert('error');
				}
			});
		},

		render: function(optins){
			var collection = optins.collection.toJSON();

			this.$el.html(this.template({users: collection}));

			return this;
		}
	});

	return View;
});