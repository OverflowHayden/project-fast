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

### Quick start
Add the following stylesheet `<link>` to your `<head>` before all other stylesheets.
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/project-fast@0.9.5/dist/src/assets/css/style.css">
```

Add the following `script` before the the closing `</body>` tag. No jQuery required!
```
<script src="https://cdn.jsdelivr.net/npm/project-fast@0.9.5/dist/src/assets/js/bundle.js"></script>
<script src="https://cdn.jsdelivr.net/npm/project-fast@0.9.5/dist/src/assets/js/app.min.js"></script>
```

### How to install
**NPM**
```
npm install project-fast
```
**Yarn**
```
yarn add project-fast
```

## Usage with Laravel Mix
Add the following code to `webpack.mix.js`:
```
mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .scripts([
        'node_modules/project-fast/src/assets/js/bundle.js',
        'node_modules/project-fast/src/assets/js/app.min.js'
    ], 'public/js/bundle.js');
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
    .scripts([
        'node_modules/project-fast/src/assets/js/bundle.js',
        'node_modules/project-fast/src/assets/js/app.min.js'
    ], 'public/js/bundle.js');
```

And `resources/sass/app.scss`:
```
// Variables
@import "variables";

// Project FAST
@import '~project-fast/src/assets/scss/includes.scss';
```
```