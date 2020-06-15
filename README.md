# Project FAST
## Project "Full Application Stack Toolkit" is a modern frontend framework inspired by Google's Material Design.


[![npm](https://img.shields.io/npm/dt/project-fast.svg?style=flat-square)](https://github.com/OverflowHayden/project-fast) 
[![GitHub issues](https://img.shields.io/github/issues-raw/OverflowHayden/project-fast.svg?style=flat-square)](https://github.com/OverflowHayden/project-fast/issues)
[![npm](https://img.shields.io/npm/v/project-fast.svg?style=flat-square&colorB=blue)](https://www.npmjs.com/package/project-fast)
 [![npm](https://img.shields.io/badge/Webpack-v4.x-lightgrey.svg?style=flat-square)](https://www.npmjs.com/package/project-fast) 
[![Github file size](https://img.shields.io/github/size/OverflowHayden/project-fast/dist/src/assets/css/style.css.gz.svg?style=flat-square&label=CSS%20gzip%20size)](https://github.com/OverflowHayden/project-fast/blob/master/dist/src/assets/css/style.css)
 [![Github file size](https://img.shields.io/github/size/OverflowHayden/project-fast/dist/src/assets/js/app.min.js.gz.svg?style=flat-square&label=JS%20gzip%20size)](https://github.com/OverflowHayden/project-fast/blob/master/dist/src/assets/js/app.min.js)
 [![](https://img.shields.io/badge/Chrome-Latest-green.svg?style=flat-square)](https://www.google.com/chrome/) 
 [![](https://img.shields.io/badge/Firefox-60%20or%20later-orange.svg?style=flat-square)](https://www.mozilla.org/firefox/new/) 
 [![](https://img.shields.io/badge/Safari-11.1%20or%20later-yellowgreen.svg?style=flat-square)](https://www.mozilla.org/firefox/new/) 
 [![](https://img.shields.io/badge/Edge-17%20or%20later-blue.svg?style=flat-square)](https://www.microsoft.com/windows/microsoft-edge) 
 [![](https://img.shields.io/badge/IE-Not%20supported-blue.svg?style=flat-square)](https://www.microsoft.com/download/internet-explorer.aspx) 
[![GitHub](https://img.shields.io/github/license/OverflowHayden/project-fast.svg?style=flat-square)](https://github.com/OverflowHayden/project-fast/blob/master/LICENSE)





### [Click here for documentation](https://overflowhayden.github.io/project-fast/dist/)

### Quick start
Add the following stylesheet `<link>` to your `<head>` before all other stylesheets.
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/project-fast@1.0.2/dist/src/assets/css/style.css">
```

Add the following `script` before the the closing `</body>` tag. No jQuery required!
```
<script src="https://cdn.jsdelivr.net/npm/project-fast@1.0.2/dist/src/assets/js/bundle.js"></script>
<script src="https://cdn.jsdelivr.net/npm/project-fast@1.0.2/dist/src/assets/js/app.min.js"></script>
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
    .sass('resources/assets/sass/app.scss', 'public/css');
```

Change the code in `resources/assets/sass/app.scss` to:
```
// Variables
@import "variables";

// Project FAST
@import '~project-fast/src/assets/scss/includes.scss';
```

And the following code to `resources/assets/js/app.js`:
```
import Fast from 'project-fast';
```

### Laravel 5.7+
Starting from Laravel 5.7, the scripts and styles has been flattened in the `resource` folder.
The code should now look like this in `webpack.mix.js`:
```
mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
```

And `resources/sass/app.scss`:
```
// Variables
@import "variables";

// Project FAST
@import '~project-fast/src/assets/scss/includes.scss';
```

And the following code to `resources/js/app.js`:
```
import Fast from 'project-fast';
```