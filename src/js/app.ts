import Iconify from '@iconify/iconify';
import fastLegacySupport from './components/legacy-support.js';
import AppBar from "./components/appbar";
import Drawer from './components/drawer';
import DataTable from './components/data-table';
import Fab from './components/fab';
import Form from './components/form';
import Menu from './components/menu';
import fastUpload from './components/upload-field.js';
import fastSnackbar from './components/snackbar.js';

fastLegacySupport();
fastUpload();
fastSnackbar();

export default {
    LegacySupport: fastLegacySupport,
    Appbar: new AppBar(),
    Drawer: new Drawer(),
    DataTable: new DataTable(),
    Fab: new Fab(),
    Form: new Form(),
    Menu: new Menu(),
    Upload: fastUpload,
    Snackbar: fastSnackbar,
    Iconify,
};
