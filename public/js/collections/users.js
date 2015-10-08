define(['models/user'], function(Model){
	var Collection = Backbone.Collection.extend({
		model: Model,

		url: '/users/'
	});

	return Collection;
});
