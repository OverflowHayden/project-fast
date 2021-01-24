---
name: Headings
category: Atoms
---

Available headings

```headings.html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
```

#### Variables
```
@use "setup/variables" with (
    $headings: (
        "color": #212529,
        "h1": 4.2rem,
        "h2": 3.4rem,
        "h3": 2.8rem,
        "h4": 2.2rem,
        "h5": 1.8rem,
        "h6": 1.6rem,
    )
);
```