---
name: Getting Started
category: Getting Started
---

### How to install
**NPM**
```
npm install project-fast
```
**Yarn**
```
yarn add project-fast
```

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
Add the following code to `webpack.mix.js`:
```
mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .options({
        postCss: [
            require('pixrem')()
        ]
    })
    .scripts([
        'node_modules/project-fast/src/assets/js/bundle.js',
        'node_modules/project-fast/src/assets/js/app.min.js'
    ], 'public/backend/js/bundle.js');
```

Change the code in `resources/assets/sass/app.scss` to:
```
// Variables
@import "variables";

// Project FAST
@import '~project-fast/src/assets/scss/includes.scss';
```

### Laravel 5.7+
Starting from Laravel 5.7, the scripts and styles has been flattened in the `resource` folder.
The code should now look like this in `webpack.mix.js`:
```
mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        postCss: [
            require('pixrem')()
        ]
    })
    .scripts([
        'node_modules/project-fast/src/assets/js/bundle.js',
        'node_modules/project-fast/src/assets/js/app.min.js'
    ], 'public/backend/js/bundle.js');
```

And `resources/sass/app.scss`:
```
// Variables
@import "variables";

// Project FAST
@import '~project-fast/src/assets/scss/includes.scss';
```