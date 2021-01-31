---
name: Grid
category: Layout
---

Can be used to override the default sizes of molecules.

Available breakpoints: **xs, sm, md, lg**

### Grid columns
Creates a grid column of requested size.
```grid.html
<div class="grid grid--visual">
    <div class="row">
        <div class="col__lg--12">col__lg--12</div>
        <div class="col__lg--6">col__lg--6</div>
        <div class="col__lg--6">col__lg--6</div>
        <div class="col__md--4">col__md--4</div>
        <div class="col__md--4">col__md--4</div>
        <div class="col__md--4">col__md--4</div>
        <div class="col__md--3">col__md--3</div>
        <div class="col__md--3">col__md--3</div>
        <div class="col__md--3">col__md--3</div>
        <div class="col__md--3">col__md--3</div>
        <div class="col__sm--2">col__sm--2</div>
        <div class="col__sm--2">col__sm--2</div>
        <div class="col__sm--2">col__sm--2</div>
        <div class="col__sm--2">col__sm--2</div>
        <div class="col__sm--2">col__sm--2</div>
        <div class="col__sm--2">col__sm--2</div>
        <div class="col__xs--1">col__xs--1</div>
        <div class="col__xs--1">col__xs--1</div>
        <div class="col__xs--1">col__xs--1</div>
        <div class="col__xs--1">col__xs--1</div>
        <div class="col__xs--1">col__xs--1</div>
        <div class="col__xs--1">col__xs--1</div>
        <div class="col__xs--1">col__xs--1</div>
        <div class="col__xs--1">col__xs--1</div>
        <div class="col__xs--1">col__xs--1</div>
        <div class="col__xs--1">col__xs--1</div>
        <div class="col__xs--1">col__xs--1</div>
        <div class="col__xs--1">col__xs--1</div>
    </div>
</div>
```

### Grid push
Push or pull a grid column by manipulating its left margin.
```grid-push.html
<div class="grid grid--visual">
    <div class="row">
        <div class="push__lg--6 col__lg--6">push__lg--6 col__lg--6</div>
        <div class="push__md--4 col__md--8">push__md--4 col__md--8</div>
        <div class="push__sm--2 col__sm--2">push__sm--2 col__sm--2</div>
        <div class="col__sm--2">col__sm--2</div>
        <div class="push__sm--2 col__sm--2">push__sm--2 col__sm--2</div>
        <div class="col__xs--1">col__xs--1</div>
        <div class="col__xs--1">col__xs--1</div>
        <div class="push__xs--1 col__xs--1">push__xs--1 col__xs--1</div>
        <div class="col__xs--1">col__xs--1</div>
        <div class="col__xs--1">col__xs--1</div>
        <div class="push__xs--1 col__xs--1">push__xs--1 col__xs--1</div>
        <div class="col__xs--1">col__xs--1</div>
        <div class="col__xs--1">col__xs--1</div>
        <div class="push__xs--1 col__xs--1">push__xs--1 col__xs--1</div>
    </div>
</div>
```

### Grid shift
Shift columns and reorder them within their container using relative positioning.
```grid-shift.html
<div class="grid grid--visual">
    <div class="row">
        <div class="shift__lg--8 col__lg--4">shift__lg--8 col__lg--4</div>
        <div class="shift__md--6 col__md--6">shift__md--6 col__md--6</div>
        <div class="shift__sm--4 col__sm--8">shift__sm--4 col__sm--8</div>
        <div class="shift__xs--2 col__xs--10">shift__xs--2 col__xs--10</div>
    </div>
</div>
```