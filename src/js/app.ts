import Iconify from '@iconify/iconify';
import fastLegacySupport from './components/legacy-support.js';
import fastMenu from './components/menu.js';
import AppBar from "./components/appbar";
import Drawer from './components/drawer';
import fastFab from './components/fab.js';
import fastUpload from './components/upload-field.js';
import fastDataTable from './components/data-table.js';
import fastSnackbar from './components/snackbar.js';
import fastForm from './components/form.js';

fastLegacySupport();
fastMenu();
fastFab();
fastUpload();
fastDataTable();
fastSnackbar();
fastForm();

export default {
    LegacySupport: fastLegacySupport,
    Appbar: new AppBar(),
    Menu: fastMenu,
    Drawer: new Drawer(),
    Fab: fastFab,
    Upload: fastUpload,
    DataTable: fastDataTable,
    Snackbar: fastSnackbar,
    Form: fastForm,
    Iconify,
};
