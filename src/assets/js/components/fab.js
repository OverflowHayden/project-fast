import tippy from 'tippy.js';
import 'tippy.js/themes/light.css';

export default function fastFab() {
    const fabTooltip = document.querySelector('.fab--menu');
    if (fabTooltip) {
        tippy(fabTooltip, {
            arrow: false,
            placement: 'left',
            theme: 'light',
        });
    }

    //----------------------------------------------------------------------------------
    // FAB toggle on mobile
    //----------------------------------------------------------------------------------
    if (document.querySelector('.fab--menu')) {
        const fab = document.querySelector('.fab');

        fab.addEventListener('touchstart', function (e) {
            if (document.activeElement != this) {
                e.preventDefault();
            }

            this.focus();
        });
    }
}