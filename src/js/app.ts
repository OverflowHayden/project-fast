import Iconify from '@iconify/iconify';
import fastLegacySupport from './components/legacy-support.js';
import AppBar from "./components/appbar";
import Drawer from './components/drawer';
import DataTable from './components/data-table';
import Fab from './components/fab';
import Form from './components/form';
import Menu from './components/menu';
import Upload from './components/upload-field';
import fastSnackbar from './components/snackbar.js';
import DarkMode from './components/dark-mode';

fastLegacySupport();
fastSnackbar();
new DarkMode('#darkToggle');

export default {
    LegacySupport: fastLegacySupport,
    Appbar: new AppBar(),
    Drawer: new Drawer(),
    DataTable: new DataTable(),
    Fab: new Fab(),
    Form: new Form(),
    Menu: new Menu(),
    Upload: new Upload(),
    Snackbar: fastSnackbar,
    Iconify,
    DarkMode: new DarkMode('#darkToggle'),
};
