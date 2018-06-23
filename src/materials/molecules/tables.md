---
name: Tables
category: Molecules
---

### Simple
```tables.html
<table style="--cols:4">
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
            <td><a href="#" class="button button--icon button--text"><i class="mdi mdi-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="mdi mdi-delete"></i></a></td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jon Stott</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="mdi mdi-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="mdi mdi-delete"></i></a></td>
        </tr>
        <tr>
            <td>3</td>
            <td>Virginia Robbins</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="mdi mdi-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="mdi mdi-delete"></i></a></td>
        </tr>
        <tr>
            <td>4</td>
            <td>Elise Heath</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="mdi mdi-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="mdi mdi-delete"></i></a></td>
        </tr>
        <tr>
            <td>5</td>
            <td>Tahmina Marriott</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="mdi mdi-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="mdi mdi-delete"></i></a></td>
        </tr>
        <tr>
            <td>6</td>
            <td>Sommer Gibbons</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="mdi mdi-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="mdi mdi-delete"></i></a></td>
        </tr>
    </tbody>
</table>
```

### Compact
```tables-compact.html
<table class="table--compact" style="--cols:4">
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
            <td><a href="#" class="button button--icon button--text"><i class="mdi mdi-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="mdi mdi-delete"></i></a></td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jon Stott</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="mdi mdi-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="mdi mdi-delete"></i></a></td>
        </tr>
        <tr>
            <td>3</td>
            <td>Virginia Robbins</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="mdi mdi-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="mdi mdi-delete"></i></a></td>
        </tr>
        <tr>
            <td>4</td>
            <td>Elise Heath</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="mdi mdi-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="mdi mdi-delete"></i></a></td>
        </tr>
        <tr>
            <td>5</td>
            <td>Tahmina Marriott</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="mdi mdi-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="mdi mdi-delete"></i></a></td>
        </tr>
        <tr>
            <td>6</td>
            <td>Sommer Gibbons</td>
            <td>Maecenas pharetra porta leo, quis fermentum nibh efficitur nec</td>
            <td><a href="#" class="button button--icon button--text"><i class="mdi mdi-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="mdi mdi-delete"></i></a></td>
        </tr>
    </tbody>
</table>
```

### Data table
To use with vue.js.
Also usable with table--compact

```data-tables.html
<table class="data-table" style="--cols:5">
    <thead>
        <tr class="data-table__head">
            <th colspan="5">
                <a href="#" class="data-table__action">Add</a>
                <a href="#" class="data-table__filter"><i class="mdi mdi-filter-variant"></i></a>
                <div class="data-table__selection">
                    <span class="data-table__selected"><span class="data-table__selected-count"></span> selected</span>
                    <div class="data-table__buttons">
                        <a href="#" class="button button--icon button--text"><i class="mdi mdi-delete"></i></a>
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
            <th><a href="#"><i class="mdi mdi-arrow-down"></i>ID</a></th>
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
            <td><a href="#" class="button button--icon button--text"><i class="mdi mdi-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="mdi mdi-delete"></i></a></td>
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
            <td><a href="#" class="button button--icon button--text"><i class="mdi mdi-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="mdi mdi-delete"></i></a></td>
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
            <td><a href="#" class="button button--icon button--text"><i class="mdi mdi-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="mdi mdi-delete"></i></a></td>
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
            <td><a href="#" class="button button--icon button--text"><i class="mdi mdi-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="mdi mdi-delete"></i></a></td>
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
            <td><a href="#" class="button button--icon button--text"><i class="mdi mdi-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="mdi mdi-delete"></i></a></td>
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
            <td><a href="#" class="button button--icon button--text"><i class="mdi mdi-pencil"></i></a>
                <a href="#" class="button button--icon button--text"><i class="mdi mdi-delete"></i></a></td>
        </tr>
    </tbody>
    <tfoot>
        <tr class="data-table__footer">
            <td colspan="5">
                <span class="data-table__results">Showing 1 to 6 of 30 entries</span>
                <nav class="data-table__pagination">
                    <a href="#" class="pagination-list__nav pagination-list__nav--disabled">Previous</a>
                    <ul class="pagination-list">
                        <li class="pagination-list__item pagination-list__item--active"><a href="#">1</a></li>
                        <li class="pagination-list__item"><a href="#">2</a></li>
                        <li class="pagination-list__item"><a href="#">3</a></li>
                        <li class="pagination-list__item"><a href="#">4</a></li>
                        <li class="pagination-list__item"><a href="#">5</a></li>
                    </ul>
                    <a href="#" class="pagination-list__nav">Next</a>
                </nav>
            </td>
        </tr>
    </tfoot>
</table>
```

```data-tables.js
var tableCheckboxes = document.querySelectorAll('.data-table td input[type="checkbox"]');
var headCheckbox = document.querySelector('.data-table th input[type="checkbox"]');

for (var i = 0, element; element = tableCheckboxes[i]; i++) {
    if (element !== null) {
        element.addEventListener('click', countCheckboxes);
    }
}

function countCheckboxes() {
    var count = 0;
    
    for (var i = 0, element; element = tableCheckboxes[i]; i++) {
        if (element !== null) {
            element.checked ? count++ : null;
        }
    }
    
    if(count > 0) {
        document.querySelector('.data-table').classList.add('data-table--checked');
        document.querySelector('.data-table__selected-count').innerText = count;
        
        if(count == tableCheckboxes.length) {
        headCheckbox.indeterminate = false;
            headCheckbox.checked = true;
        }
        else {
        headCheckbox.indeterminate = true;
            headCheckbox.checked = false;
        }
    }
    else {
        document.querySelector('.data-table').classList.remove('data-table--checked');
        headCheckbox.indeterminate = false;
        headCheckbox.checked = false;
    }
}

headCheckbox.addEventListener('click', allCheckboxes);

function allCheckboxes() {
    for (var i = 0, element; element = tableCheckboxes[i]; i++) {
        if (element !== null) {
            if(headCheckbox.checked == true) {
                element.checked = true;
            }
            else {
                element.checked = false;
            }
        }
    }
    
    if(headCheckbox.checked == true) {
        document.querySelector('.data-table').classList.add('data-table--checked');
        document.querySelector('.data-table__selected-count').innerText = tableCheckboxes.length;
    }
    else {
        document.querySelector('.data-table').classList.remove('data-table--checked');
    }
}
```