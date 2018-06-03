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

### Compact
```tables-compact.html
<table class="table--compact">
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
                    <div class="data-table__buttons">
                        <a href="#" class="button button--icon button--text"><i class="fa fa-trash"></i></a>
                    </div>
                </div>
            </th>
        </tr>
        <tr>
            <th>
                <div class="checkbox">
                    <input id="cb_0" type="checkbox" />
                    <label for="cb_0" class="checkbox__input"></label>
                </div>
            </th>
            <th><a href="#"><i class="fa fa-arrow-down"></i>ID</a></th>
            <th><a href="#">Name</a></th>
            <th><a href="#">Description</a></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div class="checkbox">
                    <input id="cb_1" type="checkbox" />
                    <label for="cb_1" class="checkbox__input"></label>
                </div>
            </td>
            <td>1</td>
            <td>John Doe</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="fa fa-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="fa fa-trash"></i></a></td>
        </tr>
        <tr>
            <td>
                <div class="checkbox">
                    <input id="cb_2" type="checkbox" />
                    <label for="cb_2" class="checkbox__input"></label>
                </div>
            </td>
            <td>2</td>
            <td>Jon Stott</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="fa fa-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="fa fa-trash"></i></a></td>
        </tr>
        <tr>
            <td>
                <div class="checkbox">
                    <input id="cb_3" type="checkbox" />
                    <label for="cb_3" class="checkbox__input"></label>
                </div>
            </td>
            <td>3</td>
            <td>Virginia Robbins</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="fa fa-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="fa fa-trash"></i></a></td>
        </tr>
        <tr>
            <td>
                <div class="checkbox">
                    <input id="cb_4" type="checkbox" />
                    <label for="cb_4" class="checkbox__input"></label>
                </div>
            </td>
            <td>4</td>
            <td>Elise Heath</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="fa fa-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="fa fa-trash"></i></a></td>
        </tr>
        <tr>
            <td>
                <div class="checkbox">
                    <input id="cb_5" type="checkbox" />
                    <label for="cb_5" class="checkbox__input"></label>
                </div>
            </td>
            <td>5</td>
            <td>Tahmina Marriott</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="fa fa-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="fa fa-trash"></i></a></td>
        </tr>
        <tr>
            <td>
                <div class="checkbox">
                    <input id="cb_6" type="checkbox" />
                    <label for="cb_6" class="checkbox__input"></label>
                </div>
            </td>
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