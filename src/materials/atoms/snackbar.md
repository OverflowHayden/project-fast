---
name: Snackbar
category: Atoms
---

Vanilla JS
```
new Snackbar("Hey! Im a snackbar");
// Snackbar(message, options, callback)
```

or HTML
```
<span data-toggle=snackbar data-content="Hey! Im a snackbar">Click me</span>
```

or Vue.js
```
Vue.use(fastSnackbar);
this.$snackbar.create("Vuejs is awesome!", {}, function(){});
```

```snackbar.html
<button 
    class="button button--text" 
	data-toggle=snackbar 
	data-content="Hey! Im a snackbar"
	data-timeout=3000
	data-link="Surprise!"
	data-url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
	data-active-class="active">
Click me</button>
```

```snackbar.js
new Snackbar("Hey! Im a snackbar", { timeout: 0 });
```