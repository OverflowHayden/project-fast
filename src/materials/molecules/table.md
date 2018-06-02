---
name: Tables
category: Molecules
---

### Simple
```tables.html
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="fa fa-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="fa fa-trash"></i></a></td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jon Stott</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="fa fa-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="fa fa-trash"></i></a></td>
        </tr>
        <tr>
            <td>3</td>
            <td>Virginia Robbins</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="fa fa-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="fa fa-trash"></i></a></td>
        </tr>
        <tr>
            <td>4</td>
            <td>Elise Heath</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="fa fa-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="fa fa-trash"></i></a></td>
        </tr>
        <tr>
            <td>5</td>
            <td>Tahmina Marriott</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="fa fa-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="fa fa-trash"></i></a></td>
        </tr>
        <tr>
            <td>6</td>
            <td>Sommer Gibbons</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="fa fa-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="fa fa-trash"></i></a></td>
        </tr>
    </tbody>
</table>
```

### Data table
```data-tables.html
<table class="data-table">
    <thead>
        <tr class="data-table__head">
            <th colspan="5">
                <a href="#" class="data-table__action">Add</a>
                <div class="data-table__selection">
                    <span class="data-table__selected"><span class="data-table__selected-count"></span> selected</span>
                    <a href="#" class="button button--icon button--text"><i class="fa fa-trash"></i></a>
                </div>
            </th>
        </tr>
        <tr>
            <th><input type="checkbox" /></th>
            <th><a href="#"><i class="fa fa-arrow-down"></i>ID</a></th>
            <th><a href="#">Name</a></th>
            <th><a href="#">Description</a></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><input type="checkbox" /></td>
            <td>1</td>
            <td>John Doe</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="fa fa-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="fa fa-trash"></i></a></td>
        </tr>
        <tr>
            <td><input type="checkbox" /></td>
            <td>2</td>
            <td>Jon Stott</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="fa fa-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="fa fa-trash"></i></a></td>
        </tr>
        <tr>
            <td><input type="checkbox" /></td>
            <td>3</td>
            <td>Virginia Robbins</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="fa fa-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="fa fa-trash"></i></a></td>
        </tr>
        <tr>
            <td><input type="checkbox" /></td>
            <td>4</td>
            <td>Elise Heath</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="fa fa-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="fa fa-trash"></i></a></td>
        </tr>
        <tr>
            <td><input type="checkbox" /></td>
            <td>5</td>
            <td>Tahmina Marriott</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="fa fa-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="fa fa-trash"></i></a></td>
        </tr>
        <tr>
            <td><input type="checkbox" /></td>
            <td>6</td>
            <td>Sommer Gibbons</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="fa fa-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="fa fa-trash"></i></a></td>
        </tr>
    </tbody>
</table>
```

```data-tables.js
var tableCheckboxes = document.querySelectorAll('.data-table input[type="checkbox"]');

for (var i = 0, element; element = tableCheckboxes[i]; i++) {
    if (element !== null) {
        element.addEventListener('click', countCheckboxes);
    }
}

function countCheckboxes() {
    var count = 0;
    var tableCheckboxes = document.querySelectorAll('.data-table input[type="checkbox"]');
    
    for (var i = 0, element; element = tableCheckboxes[i]; i++) {
        if (element !== null) {
            element.checked ? count++ : null;
        }
    }
    console.log(count);
    if(count > 0) {
        document.querySelector('.data-table').classList.add('data-table--checked');
        document.querySelector('.data-table__selected-count').innerText = count;
    }
    else {
        document.querySelector('.data-table').classList.remove('data-table--checked');
    }
}
```