export default class Upload {
    uploadFields: NodeList;

    constructor(uploadFields: string = '.upload-field') {
        if (document.querySelectorAll(uploadFields).length > 0) {
            this.uploadFields = document.querySelectorAll(uploadFields);

            this.uploadFields.forEach((field: HTMLElement) => {
                if (field !== null) {

                    field.querySelector(uploadFields + '__input').addEventListener('change', function () {
                        let values = [];

                        for (let i = 0, files = this.files.length; i < files; i++) {
                            const file = this.files[i];
                            values.push(file.name);
                        }

                        field.querySelector(uploadFields + '__value').innerHTML = values.join();
                    });
                }
            });
        }
    }
}