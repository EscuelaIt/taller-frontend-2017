const buildify = require('buildify'),
	filesJS = [
        './js/navigation.js',
        './js/search-icons.js'
    ],
    filesCSS = [
        './css/style.css'
    ];


buildify.task({
	name: 'js',
	task: () => {
		buildify()
			.concat( filesJS )
    		.uglify()
			.save( './script.js' );
	}
});

buildify.task({
	name: 'css',
	task: () => {
		buildify()
			.concat( filesCSS )
			.save( './style.css' );
	}
});

buildify.task({
	name: 'cssmin',
	task: () => {
		buildify()
			.load( './style.css' )
			.cssmin()
			.save( './style.css' );
	}
});

buildify.task({
	name: 'uncssmin',
	task: () => {
		buildify()
			.concat( ['./styleun.css', './style.css'] )
			.cssmin()
			.save( './style.css' );
	}
});