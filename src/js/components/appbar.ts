export default class AppBar {
    appBar: HTMLElement | null;
    scrollPosition: number;
    scrollDirection: number;
    ticking: boolean;

    constructor() {
        this.appBar = document.querySelector('.app-bar');
        this.scrollPosition = 0;
        this.scrollDirection = 0;
        this.ticking = false;

        if (this.appBar) {
            document.body.classList.remove('with-app-bar--prominent');
            document.body.classList.remove('with-app-bar--dense');
            document.body.classList.remove('with-app-bar--fixed');
            document.body.classList.add('with-app-bar');

            if (this.appBar.classList.contains('app-bar--prominent')) {
                document.body.classList.add('with-app-bar--prominent');
            }
            if (this.appBar.classList.contains('app-bar--dense')) {
                document.body.classList.add('with-app-bar--dense');
            }
            if (this.appBar.classList.contains('app-bar--fixed')) {
                document.body.classList.add('with-app-bar--fixed');
            }

            if (!document.body.classList.contains('with-app-bar--fixed')) {
                window.addEventListener('scroll', (e) => {
                    this.scrollDirection = window.scrollY - this.scrollPosition;

                    this.scrollPosition = window.scrollY;

                    if (!this.ticking) {

                        window.requestAnimationFrame(() => {
                            this.appBarScroll(this.scrollDirection);
                            this.ticking = false;
                        });

                        this.ticking = true;

                    }
                });
            }
        }
    }

    appBarScroll(scrollDirection: number) {
        const appBarHeight:number = parseInt(window.getComputedStyle(this.appBar).height, 10);
        let position:number = parseInt(window.getComputedStyle(this.appBar).top, 10);

        if ((position - scrollDirection < -appBarHeight || (window.innerHeight + window.scrollY) >= document.body.offsetHeight) && window.scrollY >= appBarHeight) {
            this.appBar.style.top = '-' + appBarHeight + 'px';
        } else if (position - scrollDirection > 0 || window.pageYOffset <= 0 || window.scrollY == 0) {
            this.appBar.style.top = '0px';
        } else {
            this.appBar.style.top = position - scrollDirection + 'px';
        }
    }
}