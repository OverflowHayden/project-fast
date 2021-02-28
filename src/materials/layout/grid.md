---
name: Grid
category: Layout
---

Can be used to override the default sizes of molecules.

Available breakpoints: **mob, tab, desk**

### Grid columns
Creates a grid column of requested size.
```grid.html
<div class="grid grid--visual">
    <div class="col-desk-12 col-tab-4 col-mob-2">col-desk-12 col-tab-4 col-mob-2</div>
    <div class="col-desk-4 col-tab-5 col-mob-2">col-desk-4 col-tab-5 col-mob-2</div>
    <div class="col-desk-3 col-tab-3 col-mob-4">col-desk-3 col-tab-3 col-mob-4</div>
    <div class="col-desk-2 col-mob-2">col-desk-2 col-mob-2</div>
    <div class="col-desk-3 col-mob-2">col-desk-3 col-mob-2</div>
    <div class="col-desk-1 col-mob-2">col-desk-1 col-mob-2</div>
    <div class="col-desk-4 col-desk-shift-1 col-tab-shift-0 col-tab-6 col-mob-2">col-desk-4 col-desk-shift-1 col-tab-shift-0 col-tab-6 col-mob-2</div>
    <div class="col-desk-4 col-mob-3">col-desk-4 col-mob-3</div>
    <div class="col-desk-2 col-mob-1">col-desk-2 col-mob-1</div>
    <div class="col-desk-1 col-mob-1">col-desk-1 col-mob-1</div>
    <div class="col-desk-1 col-mob-3">col-desk-1 col-mob-3</div>
    <div class="col-desk-1 col-mob-1">col-desk-1 col-mob-1</div>
    <div class="col-desk-2 col-mob-1">col-desk-2 col-mob-1</div>
    <div class="col-desk-2 col-desk-shift-1 col-tab-shift-0 col-tab-1 col-mob-1">col-desk-2 col-desk-shift-1 col-tab-shift-0 col-tab-1 col-mob-1</div>
    <div class="col-desk-1 col-tab-7 col-mob-1">col-desk-1 col-tab-7 col-mob-1</div>
    <div class="col-desk-3 col-tab-5 col-mob-4">col-desk-3 col-tab-5 col-mob-4</div>
</div>
```

### Grid shift
Shift columns and reorder them within their container using relative positioning.
```grid-shift.html
<div class="grid grid--visual">
    <div class="col-desk-shift-8 col-desk-4">col-desk-shift-8 col-desk-4</div>
    <div class="col-tab-shift-6 col-tab-6">col-tab-shift-6 col-tab-6</div>
    <div class="col-mob-shift-4 col-mob-8">col-mob-shift-4 col-mob-8</div>
</div>
```

#### Variables
```
@use "setup/variables" with (
    // desktop grid
    $grid-desktop-columns: 12;
    $grid-desktop-sideMargin: 40px;
    $grid-desktop-gutter: 20px;
    $grid-desktop-breakpoint: $screen-xl;
    
    // tablet grid
    $grid-tablet-columns: 12;
    $grid-tablet-sideMargin: 40px;
    $grid-tablet-gutter: 20px;
    $grid-tablet-breakpoint: $screen-lg-max;
    
    // mobile grid
    $grid-mobile-columns: 4;
    $grid-mobile-sideMargin: 32px;
    $grid-mobile-gutter: 20px;
    $grid-mobile-breakpoint: $screen-sm-max;
);
```