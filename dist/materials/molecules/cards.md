---
name: Cards
category: Molecules
---

Add a [grid](#grid) class like `.col__sm--6` to the card to change size. Image is optional.
```card.html
<div class="grid">
    <div class="row">
        <div class="card">
            <figure class="card__image"><img src="https://placebeard.it/460/320" alt="Placebeard" /></figure>
            <div class="card__content">
                <h2 class="card__title">Card title</h2>
                <p>Aenean pellentesque vel odio sed tincidunt. Curabitur rutrum commodo hendrerit. Vestibulum iaculis turpis at odio sagittis fringilla.</p>
                <div class="card__actions">
                    <a href="#" class="button button--compact">Save</a>
                    <a href="#" class="button button--compact button--text">Cancel</a>
                </div>
            </div>
        </div>
    </div>
</div>
```
