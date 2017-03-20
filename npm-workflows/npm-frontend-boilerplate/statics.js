const copy = require('copy');

copy(
	'./src/statics/*.*',
	'./dist',
	(err, file) => (err) 
		? console.log(err)
		: console.log('Archivos Estáticos Copiados con Éxito')
);