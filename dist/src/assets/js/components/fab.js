import tippy from 'tippy.js';

export default function fastFab () {
    const fabTooltip = document.querySelector('.fab--menu');
    tippy(fabTooltip, {
        placement: 'left',
        theme: 'light',
    });

    //----------------------------------------------------------------------------------
    // FAB toggle on mobile
    //----------------------------------------------------------------------------------
    if(document.querySelector('.fab--menu')) {
        var fab = document.querySelector('.fab');

        fab.addEventListener('touchstart', function(e){
            if(document.activeElement != this) {
                e.preventDefault();
            }

            this.focus();
        });
    }
}