if(document.querySelector('.app-bar')) {
    var appBar = document.querySelector('.app-bar');
    var scrollPosition = 0;
    var scrollDirection = 0;
    var ticking = false;

    if(appBar.classList.contains('app-bar--prominent')) {
        document.body.classList.add('with-app-bar--prominent');
    }
    else if(appBar.classList.contains('app-bar--dense')) {
        document.body.classList.add('with-app-bar--dense');
    }
    else if(appBar.classList.contains('app-bar--fixed')) {
        document.body.classList.add('with-app-bar--fixed');
    }
    else {
        document.body.classList.add('with-app-bar');
    }

    if(!document.body.classList.contains('with-app-bar--fixed')) {
        window.addEventListener('scroll', function (e) {
            scrollDirection = window.scrollY - scrollPosition;

            scrollPosition = window.scrollY;

            if (!ticking) {

                window.requestAnimationFrame(function () {
                    appBarScroll(scrollDirection);
                    ticking = false;
                });

                ticking = true;

            }
        });
    }
}

function appBarScroll(scrollDirection) {
    var appBar = document.querySelector('.app-bar');
    var appBarHeight = parseInt(window.getComputedStyle(appBar).height, 10);
    var position = parseInt(window.getComputedStyle(appBar).top, 10);

    if((position - scrollDirection < -appBarHeight || (window.innerHeight + window.scrollY) >= document.body.offsetHeight) && window.scrollY >= appBarHeight) {
        appBar.style.top = '-' + appBarHeight + 'px';
    }
    else if(position - scrollDirection > 0 || window.pageYOffset <= 0 || window.scrollY == 0) {
        appBar.style.top = '0px';
    }
    else {
        appBar.style.top = position - scrollDirection + 'px';
    }
}

function hasClass(element, className) {
    do {
        if (element.classList && element.classList.contains(className)) {
            return true;
        }
        element = element.parentNode;
    } while (element);
    return false;
}