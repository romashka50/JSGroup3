define(['models/user'], function(User){
	var View = Backbone.View.extend({

		el: '#contentHolder',

		events: {
			'click #saveBtn': 'seveModel'
		},

		initialize: function(optins){

		},

		seveModel: function(e){
			alert('saveBtn');
			return false;
		},

		render: function(){
			//please read jQuery
			var self = this;
			var user = new User();

			user.url = 'users/55f840c1d0d63fc67da3456c';

			user.fetch({
				success: function(model){
					self.$el.html(/*underscoreTemplate + model*/); // analog --> $(#contentHolder).html(...)
				},

				error: function(model, xhr, options){
					alert(xhr.status);
				}
			});

			//this.$el.html(/*underscoreTemplate + model*/); // analog --> $(#contentHolder).html(...)
		}
	});

	return View;
});