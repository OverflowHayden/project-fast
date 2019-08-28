export default function fastDataTable () {
    if(document.querySelector('.data-table') &&
        document.querySelectorAll('.data-table td input[type="checkbox"]').length > 0 &&
        document.querySelector('.data-table th input[type="checkbox"]')) {
        const tableCheckboxes = document.querySelectorAll('.data-table td input[type="checkbox"]');
        const headCheckbox = document.querySelector('.data-table th input[type="checkbox"]');

        for (var i = 0, element; element = tableCheckboxes[i]; i++) {
            if (element !== null) {
                element.addEventListener('click', countCheckboxes);
            }
        }

        function countCheckboxes() {
            let count = 0;

            for (let i = 0, element; element = tableCheckboxes[i]; i++) {
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
            for (let i = 0, element; element = tableCheckboxes[i]; i++) {
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
    }
}