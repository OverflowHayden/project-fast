export default class Form {
    forms: NodeList;

    constructor() {
        this.forms = document.querySelectorAll('.form--submit-limit form');

        if (this.forms.length > 0) {
            this.forms.forEach(function (form) {
                form.addEventListener('submit', function (e) {
                    if (this.classList.contains('form--submitted')) {
                        e.preventDefault();
                    } else {
                        this.classList.add('form--submitted');
                    }
                });
            });
        }
    }
}