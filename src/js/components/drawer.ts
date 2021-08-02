export default class Drawer {
    drawer: any;
    drawerElem: HTMLElement;
    iconElem: HTMLElement;
    toggle: HTMLElement;

    constructor(drawerName: string = '.drawer', toggleName: string = '.drawer__nav-toggle') {
        this.drawerElem = document.querySelector(drawerName);
        this.iconElem = document.querySelector(toggleName);
        this.toggle = document.querySelector(toggleName);

        if ((document.querySelector('.drawer--persistent') || document.querySelector('.drawer--permanent')) && window.innerWidth < 767) {
            this.drawerElem.classList.remove('drawer--persistent');
            this.drawerElem.classList.remove('drawer--permanent');
            this.drawerElem.classList.add('drawer--temporary');
        }

        if (this.toggle && document.querySelector('.drawer--temporary')) {
            this.drawer = new (DrawerMenu as any)(this.drawerElem);
            this.drawer.setDrawerIcon(new (DrawerIcon as any)(this.iconElem));

            //Use methods
            this.drawer.onOpenListener(function () {
                document.body.classList.add('drawer-scroll-lock');

                if (document.querySelector('.drawer--persistent')) {
                    document.body.classList.add('persistent--open');
                }
            });
            this.drawer.onCloseListener(function () {
                document.body.classList.remove('drawer-scroll-lock');

                if (document.querySelector('.drawer--persistent')) {
                    document.body.classList.remove('persistent--open');
                }
            });

            document.querySelectorAll('.drawer a:not([href="#"])').forEach((item) => {
                item.addEventListener('click', () => {
                    this.drawer.closeDrawer();
                });
            });

            /*drawer.onMoveListener(function (x, percent, animation, duration) {
                console.log(x + " " + percent + " " + animation + " " + duration);
            });
            drawer.openDrawer();
            drawer.closeDrawer();
            drawer.toggleDrawer();
            drawer.isOpen();
            drawer.resetIconOnClick();*/
        }

        /* Drawer persistent */
        if (this.toggle && document.querySelector('.drawer--persistent')) {
            this.drawer = document.querySelector('.drawer--persistent');

            this.toggle.addEventListener('click', (e) => {
                e.preventDefault();

                if (this.drawer.classList.contains('drawer--open')) {
                    this.drawer.classList.remove('drawer--open');
                    document.body.classList.remove('persistent--open');
                } else {
                    this.drawer.classList.add('drawer--open');
                    document.body.classList.add('persistent--open');
                }
            });
        }

        /* Drawer permanent */
        if (this.toggle && document.querySelector('.drawer--permanent')) {
            this.drawer = document.querySelector('.drawer--permanent');

            this.toggle.addEventListener('click', (e) => {
                e.preventDefault();

                if (this.drawer.classList.contains('drawer--compact')) {
                    this.drawer.classList.remove('drawer--compact');
                    document.body.classList.remove('permanent--open');
                } else {
                    this.drawer.classList.add('drawer--compact');
                    document.body.classList.add('permanent--open');
                }
            });

            document.body.classList.add('permanent--open');
        }

        /* Drawer submenu */
        if (document.querySelector('.drawer__content > .list')) {
            document.querySelectorAll('.drawer__content .list__item').forEach((item) => {
                if (item.querySelector('.list') !== null && !item.querySelector('.list__item-text > .list__item-meta')) {
                    const listToggle: HTMLElement = document.createElement('i');

                    listToggle.setAttribute('class', 'iconify list__item-meta');
                    listToggle.setAttribute('data-icon', 'mdi:chevron-down');
                    item.querySelector('.list__item-text').appendChild(listToggle);

                    item.querySelector('.list__item-text').addEventListener('click', (e) => {
                        e.preventDefault();

                        const listItem = item as HTMLElement;

                        if (listItem.classList.contains('list--open')) {
                            listItem.classList.remove('list--open');
                        } else {
                            listItem.classList.add('list--open');
                        }
                    });
                }
            });
        }
    }

}

/* Drawer Library */
function DrawerMenu(drawerElem: HTMLElement): any {
    "use strict";

    function checkMobile(a: any) {
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
    }

    let drawerIcon = {
            set: function (a: any) {},
            setState: function (a: any, b: any) {},
            setOnClick: function(a: any) {}
        },
        drawerBg: HTMLElement,
        drawerStarted: boolean = false,
        width: number = drawerElem.offsetWidth,
        correct: number = 0,
        percent: number = 0,
        trx: number = 0,
        opened: boolean = false,
        startMoveTime: any = 0,
        startX: number = 0,
        speedSwipe: any = 0,
        isMobile = checkMobile(navigator.userAgent || navigator.vendor),
        isIE = window.navigator.msPointerEnabled,
        isIE11 = window.navigator.pointerEnabled,
        typeStart = "touchstart",
        typeMove = "touchmove",
        typeEnd = "touchend",
        trZ = "translateZ(0)",
        stateMoved = false,
        transformProp = "transform",
        transitionProp = "transition",
        propPrefixCss = "",
        antiSelect: HTMLElement,
        onOpened = function () {
        },
        onClosed = function () {
        },
        onMove = function (x: number, percent: number, animation: boolean, duration: number) {
        };

    function setProperty(elem: HTMLElement, property: any, value: any) {
        elem.style[property] = value;
    }

    function transfrom(x: string) {
        setProperty(drawerElem, transformProp, x + " " + trZ);
    }

    function move(x: number, e: any) {
        if (x < 0) {
            x = 0;
        }
        if (x > width) {
            x = width;
        }
        if (!stateMoved) {
            if (!isMobile) {
                antiSelect.style.visibility = "visible";
                if (!document.body.classList.contains("drawer__noselect"))
                    document.body.classList.add("drawer__noselect");
            }
            if (trx == x) {
                stateMoved = false;
                return;
            } else {
                e.preventDefault();
                stateMoved = true;
            }

        }
        trx = x;
        transfrom("translateX(-" + x + "px)");
        percent = (1 - (x / width));
        if (percent >= 1) {
            percent = 1;
        } else if (percent <= 0) {
            percent = 0;
        }
        drawerIcon.set(percent * 100);
        drawerBg.style.opacity = String(percent);
        onMove(320 - x, percent, false, 0);
    }

    function setTransition(s: string) {
        setProperty(drawerElem, transitionProp, propPrefixCss + "transform " + s + "s cubic-bezier(0.0, 0.0, 0.2, 1)");
        setProperty(drawerBg, transitionProp, "opacity " + s + "s cubic-bezier(0.0, 0.0, 0.2, 1)");
    }

    function clearTransition() {
        setProperty(drawerElem, transitionProp, "none");
        setProperty(drawerBg, transitionProp, "none");
    }

    function openDrawer(s: any = 0.225) {
        opened = true;
        setTransition(s);
        document.body.classList.add('drawer--open');
        drawerElem.style.opacity = String(1);
        drawerBg.style.opacity = String(1);
        drawerBg.style.visibility = "visible";
        transfrom("translateX(0)");
        drawerIcon.setState(1, s);
        onMove(width, 1, true, s);
        setTimeout(function () {
            clearTransition();
            if (drawerStarted) {
                return;
            }
            onOpened();
        }, s * 1000);
    }

    function closeDrawer(s: any = 0.225) {
        opened = false;
        setTransition(s);
        document.body.classList.remove('drawer--open');
        drawerBg.style.opacity = String(1);
        transfrom("translateX(-" + width + "px)");
        drawerIcon.setState(0, s);
        onMove(0, 0, true, s);
        setTimeout(function () {
            clearTransition();
            if (drawerStarted) {
                return;
            }
            drawerElem.style.opacity = String(1);
            drawerBg.style.visibility = "hidden";
            onClosed();
        }, s * 1000);
    }

    function toggleDrawer() {
        if (opened) {
            closeDrawer(0.225);
        } else {
            openDrawer(0.225);
        }
    }

    function onMovedNoOpen(e: any) {
        move(correct - e.touches[0].clientX, e);
    }

    function onMovedOpen(e: any) {
        move(startX - e.touches[0].clientX, e);
    }

    function onMovedNoOpenDesktop(e: any) {
        move(correct - e.clientX, e);
    }

    function onMovedOpenDesktop(e: any) {
        move(startX - e.clientX, e);
    }

    window.addEventListener("resize", function (e) {
        width = drawerElem.offsetWidth;
        if (!opened) {
            transfrom("translateX(-" + width + "px)");
        }
    });

    drawerElem.addEventListener(typeStart, function (e: any) {
        drawerElem.style.opacity = String(1);
        drawerBg.style.visibility = "visible";
        startX = isMobile ? e.touches[0].clientX : e.clientX;
        startMoveTime = new Date();
        correct = width + startX;
        drawerStarted = true;
    });
    document.addEventListener(typeStart, function (e) {
        if (!drawerStarted) {
            return;
        }
        if (opened) {
            document.addEventListener(typeMove, isMobile ? onMovedOpen : onMovedOpenDesktop);
        } else {
            document.addEventListener(typeMove, isMobile ? onMovedNoOpen : onMovedNoOpenDesktop);
        }
    });

    document.addEventListener(typeEnd, function (e: any) {
        drawerStarted = false;
        stateMoved = false;
        if (!isMobile) {
            antiSelect.style.visibility = "hidden";
            document.body.classList.remove("drawer__noselect");
        }
        document.removeEventListener(typeMove, isMobile ? onMovedOpen : onMovedOpenDesktop);
        document.removeEventListener(typeMove, isMobile ? onMovedNoOpen : onMovedNoOpenDesktop);

        speedSwipe = (((width / 2) / ((Math.abs((isMobile ? e.changedTouches[0].clientX : e.clientX) - startX)) / (new Date().getTime() - startMoveTime))) / 1000).toFixed(3);
        if (speedSwipe == Infinity) {
            if (!opened) {
                closeDrawer(0);
            } else {
                openDrawer(0);
            }
            return;
        }
        if (trx == 0) {
            return;
        }
        if (speedSwipe <= 0.150) {
            speedSwipe = 0.150;
        } else if (speedSwipe >= 0.5) {
            speedSwipe = 0.5;
        }
        let intent = (startX - (isMobile ? e.changedTouches[0].clientX : e.clientX)) > 0;
        if ((width / 2.25) > trx) {
            if (intent && speedSwipe < 0.4) {
                closeDrawer(speedSwipe);
            } else {
                openDrawer(speedSwipe);
            }
        } else {
            if (!intent && speedSwipe < 0.4) {
                openDrawer(speedSwipe);
            } else {
                closeDrawer(speedSwipe);
            }
        }
        trx = 0;
    });
    this.setDrawerIcon = function (icon: any) {
        drawerIcon = icon;
        drawerIcon.setOnClick(function (e: any) {
            toggleDrawer();
        });
    };
    this.getDrawerIcon = function () {
        return drawerIcon;
    };
    this.resetIconOnClick = function () {
    };
    this.onOpenListener = function (listener: any) {
        onOpened = listener;
    };
    this.onCloseListener = function (listener: any) {
        onClosed = listener;
    };
    this.onMoveListener = function (listener: any) {
        onMove = listener;
    };
    this.openDrawer = function () {
        openDrawer();
    };
    this.closeDrawer = function () {
        closeDrawer();
    };
    this.toggleDrawer = function () {
        toggleDrawer();
    };
    this.isOpen = function () {
        return opened;
    };

    (function () {
        if (document.querySelector('.drawer__bg')) {
            drawerBg = document.querySelector('.drawer__bg');
        } else {
            drawerBg = document.createElement("DIV");
            drawerBg.className = "drawer__bg";
            drawerBg.id = "drawer__bg";
            drawerElem.parentElement.insertBefore(drawerBg, drawerElem);
        }
        drawerBg.onclick = function () {
            if (opened) {
                closeDrawer(0.225);
            }
        };
        antiSelect = document.createElement("DIV");
        antiSelect.className = "drawer__antiSelect";
        drawerElem.appendChild(antiSelect);
        const label = document.createElement("DIV");
        label.className = "drawer__label";
        drawerElem.appendChild(label);
    })();
}

/* Hamburger Library */
function DrawerIcon(icon: any) {
    "use strict";
    let ic: any,
        line1: any,
        line2: any,
        line3: any,
        const1 = 1 / 300,
        const2 = 1 / 500,
        const3 = 2 / 3,
        direction = true,
        locked = false,
        rotateLine,
        scaleX,
        transY,
        transX,
        scaleX2,
        transX2,
        rotateIc,
        transformProp = "transform",
        transitionProp = "transition",
        trZ = "translateZ(0)",
        propPrefixCss = "";

    this.state = function () {
        return direction;
    };

    this.setOnClick = function (listener: any) {
        icon.onclick = listener;
    };

    this.set = function (percent: any) {
        if (locked) {
            return;
        }
        if (percent > 100) {
            percent = 100;
        }
        if (percent < 0) {
            percent = 0;
        }
        if (percent >= 100) {
            direction = false;
        }
        if (percent <= 0) {
            direction = true;
        }

        rotateLine = 0.45 * percent;
        scaleX = 1 - const1 * percent;
        transY = 0.054 * percent;
        transX = 0.033 * percent;
        scaleX2 = 1 - const2 * percent;
        transX2 = -0.01 * percent;
        if (direction) {
            rotateIc = 1.80 * percent;
        } else {
            rotateIc = 360 - (1.80 * percent);
        }
    };

    this.setState = function (state: any, duration: any) {
        duration = duration || 0.225;
        let temp = this;
        switch (state) {
            case 0:
                this.set(1);
                break;
            case 1:
                this.set(100);
                break;
        }
        setTimeout(function () {
            if (state === 0) {
                temp.set(0);
            }
        }, Number(duration) * 1000);
    };

    this.lock = function () {
        locked = true;
    };
    this.unLock = function () {
        locked = false;
    };
}