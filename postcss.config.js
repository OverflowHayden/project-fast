const autoprefixer		= require('autoprefixer');
const pixrem			= require('pixrem');
const csso				= require('postcss-csso');

module.exports = {
	plugins: [
		autoprefixer({
			browsers: ('last 2 versions', 'ie > 9'),
			cascade: false
		}),
		pixrem,
		csso
	]
}