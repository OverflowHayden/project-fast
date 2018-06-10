# Project FAST
## "Full Application Stack Toolkit"

### Usage (with Yarn): 
Go to the project-fast folder (node_modules/project-fast)

Generate the toolkit with:
```
yarn run toolkit
```

Compile the assets with:
```
yarn run build
```

## For the Laravel nerds
Add the following code to webpack.mix.js:
```
mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .options({
        postCss: [
            require('pixrem')()
        ]
    })
    .js([
        'node_modules/tingle.js/src/tingle.js',
        'node_modules/tiny-slider/src/tiny-slider.js',
        'node_modules/webfontloader/webfontloader.js',
        'node_modules/project-fast/src/assets/js/app.js',
    ], 'public/js/bundle.js');
```

Change the code in ```resources/assets/sass/app.scss``` to:
```
// Variables
@import "variables";

// Project FAST
@import 'node_modules/project-fast/src/assets/scss/includes.scss';
```