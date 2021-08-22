export default class DataTable {
    element: HTMLElement;
    tableCheckboxes: NodeList;
    headCheckbox: HTMLInputElement;
    selectedCount: HTMLElement;

    constructor(element: string = '.data-table') {
        this.element = document.querySelector(element);
        this.selectedCount = document.querySelector(element+ '__selected-count');

        if (this.element &&
            document.querySelectorAll(element + ' td input[type="checkbox"]').length > 0 &&
            document.querySelector(element + ' th input[type="checkbox"]')) {
            this.tableCheckboxes = document.querySelectorAll(element + ' td input[type="checkbox"]');
            this.headCheckbox = document.querySelector(element + ' th input[type="checkbox"]');

            this.tableCheckboxes.forEach((el: HTMLInputElement) => {
                el.addEventListener('click', this.countCheckboxes.bind(this));
            });

            this.headCheckbox.addEventListener('click', this.allCheckboxes.bind(this));
        }
    }

    protected countCheckboxes() {
        let count = 0;
        this.tableCheckboxes.forEach((el: HTMLInputElement) => {
            el.checked ? count++ : null;
        });

        if (count > 0) {
            this.element.classList.add('data-table--checked');
            this.selectedCount.innerText = String(count);

            if (count == this.tableCheckboxes.length) {
                this.headCheckbox.indeterminate = false;
                this.headCheckbox.checked = true;
            } else {
                this.headCheckbox.indeterminate = true;
                this.headCheckbox.checked = false;
            }
        } else {
            this.element.classList.remove('data-table--checked');
            this.headCheckbox.indeterminate = false;
            this.headCheckbox.checked = false;
        }
    }

    protected allCheckboxes() {
        this.tableCheckboxes.forEach((el: HTMLInputElement) => {
            el.checked = this.headCheckbox.checked == true;
        });

        if (this.headCheckbox.checked == true) {
            this.element.classList.add('data-table--checked');
            this.selectedCount.innerText = String(this.tableCheckboxes.length);
        } else {
            this.element.classList.remove('data-table--checked');
        }
    }
}