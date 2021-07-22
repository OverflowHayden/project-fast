export default function fastUpload() {
    //----------------------------------------------------------------------------------
    // Upload field value
    //----------------------------------------------------------------------------------
    if (document.querySelectorAll('.upload-field').length > 0) {
        var uploadFields = document.querySelectorAll('.upload-field');

        uploadFields.forEach(function (field) {
            if (field !== null) {

                field.querySelector('.upload-field__input').addEventListener('change', function () {
                    var values = [];

                    for (let i = 0, files = this.files.length; i < files; i++) {
                        const file = this.files[i];
                        values.push(file.name);
                    }

                    field.querySelector('.upload-field__value').innerHTML = values.join();
                });
            }
        });
    }
}