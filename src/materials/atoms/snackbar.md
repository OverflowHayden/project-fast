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

or Vuejs
```
this.$snackbar.create("Vuejs is awsome!", {}, function(){});
```

Click [here](https://github.com/joostLawerman/SnackbarLightjs) for the full documentation

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