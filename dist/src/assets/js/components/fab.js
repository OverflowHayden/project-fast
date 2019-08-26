export default function fastFab () {
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