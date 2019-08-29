import tippy from 'tippy.js';
import fastLegacySupport from './components/legacy-support.js';
import fastAppbar from './components/appbar.js';
import fastMenu from './components/menu.js';
import fastDrawer from './components/drawer.js';
import fastFab from './components/fab.js';
import fastUpload from './components/upload-field.js';
import fastDataTable from './components/data-table.js';
import fastSnackbar from './components/snackbar.js';

fastLegacySupport();
fastAppbar();
fastMenu();
fastDrawer();
fastFab();
fastUpload();
fastDataTable();
fastSnackbar();

export default {
    LegacySupport: fastLegacySupport,
    Appbar: fastAppbar,
    Menu: fastMenu,
    Drawer: fastDrawer,
    Fab: fastFab,
    Upload: fastUpload,
    DataTable: fastDataTable,
    Snackbar: fastSnackbar,
};
