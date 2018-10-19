# Project FAST
## Project "Full Application Stack Toolkit" is a modern frontend framework inspired by Google's Material Design.


[![npm](https://img.shields.io/npm/dt/project-fast.svg?style=flat-square)](https://github.com/OverflowHayden/project-fast) 
[![GitHub issues](https://img.shields.io/github/issues-raw/OverflowHayden/project-fast.svg?style=flat-square)](https://github.com/OverflowHayden/project-fast/issues)
[![npm](https://img.shields.io/npm/v/project-fast.svg?style=flat-square&colorB=blue)](https://www.npmjs.com/package/project-fast)
 [![npm](https://img.shields.io/badge/Webpack-v4.x-lightgrey.svg?style=flat-square)](https://www.npmjs.com/package/project-fast) 
[![Github file size](https://img.shields.io/github/size/OverflowHayden/project-fast/dist/assets/css/style.css.gz.svg?style=flat-square&label=CSS%20gzip%20size)](https://github.com/OverflowHayden/project-fast/blob/master/dist/assets/css/style.css)
 [![Github file size](https://img.shields.io/github/size/OverflowHayden/project-fast/dist/assets/js/app.min.js.gz.svg?style=flat-square&label=JS%20gzip%20size)](https://github.com/OverflowHayden/project-fast/blob/master/dist/assets/js/app.min.js)
 [![](https://img.shields.io/badge/Chrome-Latest-green.svg?style=flat-square)](https://www.google.com/chrome/) 
 [![](https://img.shields.io/badge/Firefox-60%20or%20later-orange.svg?style=flat-square)](https://www.mozilla.org/firefox/new/) 
 [![](https://img.shields.io/badge/Safari-11.1%20or%20later-yellowgreen.svg?style=flat-square)](https://www.mozilla.org/firefox/new/) 
 [![](https://img.shields.io/badge/Edge-17%20or%20later-blue.svg?style=flat-square)](https://www.microsoft.com/windows/microsoft-edge) 
 [![](https://img.shields.io/badge/IE-Not%20supported-blue.svg?style=flat-square)](https://www.microsoft.com/download/internet-explorer.aspx) 
[![GitHub](https://img.shields.io/github/license/OverflowHayden/project-fast.svg?style=flat-square)](https://github.com/OverflowHayden/project-fast/blob/master/LICENSE)





### [Click here to open the toolkit](https://overflowhayden.github.io/project-fast/dist/)

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
Add the following code to webpack.mix.js:
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
    ], 'public/js/bundle.js');
```

Change the code in ```resources/assets/sass/app.scss``` to:
```
// Variables
@import "variables";

// Project FAST
@import '~project-fast/src/assets/scss/includes.scss';
```
