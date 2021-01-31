---
name: Upload field
category: Forms
---

### Required
```upload-field.js
import Fast from 'project-fast';
Fast.Upload();
```

The `upload-field__value` element will be automatically updated.
```upload-field.html
<div class="upload-field">
    <input id="upload" type="file" name="upload" class="upload-field__input" />
    <label for="upload" class="upload-field__label">Upload a file</label>
    <span class="upload-field__value">No file selected</span>
    <span class="field__helper">Only images</span>
</div>

<div class="upload-field">
    <input id="upload2" type="file" name="upload2" class="upload-field__input" multiple />
    <label for="upload2" class="upload-field__label">Upload multiple files</label>
    <span class="upload-field__value">No files selected</span>
    <span class="field__helper">Only images</span>
</div>
```