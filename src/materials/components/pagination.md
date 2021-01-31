---
name: Pagination
category: Components
---

```pagination.html
<a href="#" class="pagination-list__nav pagination-list__nav--disabled">Previous</a>
<ul class="pagination-list">
    <li class="pagination-list__item pagination-list__item--active"><a href="#">1</a></li>
    <li class="pagination-list__item"><a href="#">2</a></li>
    <li class="pagination-list__item"><a href="#">3</a></li>
    <li class="pagination-list__item"><a href="#">4</a></li>
    <li class="pagination-list__item"><a href="#">5</a></li>
</ul>
<a href="#" class="pagination-list__nav">Next</a>
```

#### Variables
```
@use "setup/variables" with (
    $pagination: (
        "background": $color-primary,
        "border-radius": .225em,
        "color": $color-base-white,
        "color-nav": $color-base-black,
        "font-size": 1.4rem,
        "width": 3.571em,
        "height": 2.575em,
    )
);
```