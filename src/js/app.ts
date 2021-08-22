import Iconify from '@iconify/iconify';
import fastLegacySupport from './components/legacy-support.js';
import fastMenu from './components/menu.js';
import AppBar from "./components/appbar";
import Drawer from './components/drawer';
import DataTable from './components/data-table';
import Fab from './components/fab';
import fastUpload from './components/upload-field.js';
import fastSnackbar from './components/snackbar.js';
import fastForm from './components/form.js';

fastLegacySupport();
fastMenu();
fastUpload();
fastSnackbar();
fastForm();

export default {
    LegacySupport: fastLegacySupport,
    Appbar: new AppBar(),
    Menu: fastMenu,
    Drawer: new Drawer(),
    Fab: new Fab(),
    Upload: fastUpload,
    DataTable: new DataTable(),
    Snackbar: fastSnackbar,
    Form: fastForm,
    Iconify,
};
