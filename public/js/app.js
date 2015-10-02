define(['views/user'], function(user){
	function init(){
		new user().render();
	}

	return {
		init: init
	}
});