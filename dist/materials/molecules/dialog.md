---
name: Dialog
category: Molecules
---

Powered by tingle.js. Click <a href="https://robinparisi.github.io/tingle/" target="_blank">here</a> for the full documentation.

```dialog.html
<button class="button">Open dialog</button>
```

```dialog.js
// instanciate new modal
var modal = new tingle.modal({
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close"
});

// set content
modal.setContent('<h1>Dialog</h1><p>Dialog content</p>');

document.querySelector('.button').addEventListener('click', function () {
     modal.open();
 });

```