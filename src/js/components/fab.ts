import tippy from 'tippy.js';
import 'tippy.js/themes/light.css';

export default class Fab {
    fab: HTMLElement;
    fabTooltip: HTMLElement;

    constructor(fab: string = '.fab', menu: string = '.fab--menu') {
        this.fabTooltip = document.querySelector(menu);
        if (this.fabTooltip) {
            tippy(this.fabTooltip, {
                arrow: false,
                placement: 'left',
                theme: 'light',
            });
        }

        //----------------------------------------------------------------------------------
        // FAB toggle on mobile
        //----------------------------------------------------------------------------------
        if (this.fabTooltip) {
            this.fab = document.querySelector(fab);

            this.fab.addEventListener('touchstart', function (e) {
                if (document.activeElement != this) {
                    e.preventDefault();
                }

                this.focus();
            });
        }
    }
}