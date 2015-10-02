define([], function(){
	var Model = Backbone.Model.extend({
		idAttributes: '_id',

		urlRoot: function(){
			return '/users';
		}
	});

	return Model;
	//return 'Hello';
});
