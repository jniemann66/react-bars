var fs = require('fs');
var path = require('path');
var generateMarkdown = require('./generateMarkdown.js');

var src = './src';
var reactDocs = require('react-docgen');

fs.readdir('./src', function (err, files) {
	if (err) {
		throw err;
	}

	/*
	// auto find all js/jsx files (no guarantee of filename order)
	var jsfiles = files.filter(function(file) {
		return path.extname(file) === '.js' || path.extname(file) === '.jsx';
	});
	*/

	// filenames in specific order:
	var jsfiles = ['bars.js', 'bar.js'];

	jsfiles.forEach(function (file, index) {

		try {
			var data = fs.readFileSync(path.join('./src/',file), 'utf8');
			var componentInfo = reactDocs.parse(data /* , resolver */);
			var componentName = path.basename(file, path.extname(file));
			var componentNameCapitalized = componentName[0].toUpperCase() + componentName.slice(1);
			console.log(generateMarkdown(componentNameCapitalized, componentInfo));
		} catch (err) {
			console.log(err);
		}

	});
});