import Iconify from '@iconify/iconify';
import fastLegacySupport from './components/legacy-support.js';
import fastMenu from './components/menu.js';
import AppBar from "./components/appbar";
import Drawer from './components/drawer';
import DataTable from './components/data-table';
import Fab from './components/fab';
import Form from './components/form';
import fastUpload from './components/upload-field.js';
import fastSnackbar from './components/snackbar.js';

fastLegacySupport();
fastMenu();
fastUpload();
fastSnackbar();

export default {
    LegacySupport: fastLegacySupport,
    Appbar: new AppBar(),
    Drawer: new Drawer(),
    DataTable: new DataTable(),
    Fab: new Fab(),
    Form: new Form(),
    Menu: fastMenu,
    Upload: fastUpload,
    Snackbar: fastSnackbar,
    Iconify,
};
