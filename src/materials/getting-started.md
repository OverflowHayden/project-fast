---
name: Getting Started
category: Getting Started
---

### Quick start
Add the following stylesheet `<link>` to your `<head>` before all other stylesheets.
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/project-fast@2.0.0/dist/src/assets/css/style.css">
```

Add the following `script` before the the closing `</body>` tag. No jQuery required!
```
<script src="https://cdn.jsdelivr.net/npm/project-fast@2.0.0/dist/src/assets/js/bundle.js"></script>
<script src="https://cdn.jsdelivr.net/npm/project-fast@2.0.0/dist/src/assets/js/app.min.js"></script>
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

Add the following code to `resources/js/app.js`:
```
import Fast from 'project-fast';
```