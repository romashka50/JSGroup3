define(['router'], function(Router){
	function init(){
		var router = new Router();
		var fragment = Backbone.history.fragment;
		var url = window.location.hash;

		Backbone.history.start({silent: true});

		if (fragment){
			Backbone.history.fragment = '';
		} else {
			Backbone.history.fragment = '';
			Backbone.history.navigate(url, {trigger: true});
		}
	}

	return {
		init: init
	}
});