export default function fastForm() {
    const forms = document.querySelectorAll('.form--submit-limit form');

    if (forms.length > 0) {
        forms.forEach(function (form) {
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