var App = App || {};

require.config({
	paths: {
		Backbone: 'libs/backbone/backbone',
		Underscore: 'libs/underscore/underscore',
		jQuery: 'libs/jquery/dist/jquery',
		jQueryUi: 'libs/jquery-ui/jquery-ui.min',
		templates: '../templates',
		text: 'libs/text/text'
	},
	shim: {
		jQueryUi: ['jQuery'],
		Backbone: ['Underscore', 'jQueryUi'],
		app: ['Backbone']
	}
});

require(['app'], function (app) {
	app.init();
});
