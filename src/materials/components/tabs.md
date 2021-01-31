---
name: Tabs
category: Components
---

```tabs.html
<section class="tab">
    <input type="radio" name="tabs" class="tab__input" id="tab1" checked>
    <label for="tab1" class="tab__label">
        Tab 1
        <div class="chip">
            <span class="chip__text">123</span>
        </div>
    </label>
    <div class="tab__panel">Tab 1 content</div>
    <input type="radio" name="tabs" class="tab__input" id="tab2">
    <label for="tab2" class="tab__label">Tab 2</label>
    <div class="tab__panel">Tab 2 content</div>
    <input type="radio" name="tabs" class="tab__input" id="tab3">
    <label for="tab3" class="tab__label">Tab 3</label>
    <div class="tab__panel">Tab 3 content</div>
</section>
```