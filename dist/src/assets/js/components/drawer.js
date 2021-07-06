export default function fastDrawer() {
    //----------------------------------------------------------------------------------
// Drawer
// https://codepen.io/RadiationX/pen/YWLqBX
//----------------------------------------------------------------------------------
    /* Change persistent to temporary on small screens */
    if ((document.querySelector('.drawer--persistent') || document.querySelector('.drawer--permanent')) && window.innerWidth < 767) {
        document.querySelector('.drawer').classList.remove('drawer--persistent');
        document.querySelector('.drawer').classList.remove('drawer--permanent');
        document.querySelector('.drawer').classList.add('drawer--temporary');
    }

    if (document.querySelector('.drawer__nav-toggle') && document.querySelector('.drawer--temporary')) {
        let drawer,
            drawerElem,
            iconElem;
        drawerElem = document.querySelector('.drawer');
        iconElem = document.querySelector('.drawer__nav-toggle');
        drawer = new Drawer(drawerElem);
        drawer.setDrawerIcon(new DrawerIcon(iconElem));

        //Use methods
        drawer.onOpenListener(function () {
            document.body.classList.add('drawer-scroll-lock');

            if (document.querySelector('.drawer--persistent')) {
                document.body.classList.add('persistent--open');
            }
        });
        drawer.onCloseListener(function () {
            document.body.classList.remove('drawer-scroll-lock');

            if (document.querySelector('.drawer--persistent')) {
                document.body.classList.remove('persistent--open');
            }
        });

        document.querySelectorAll('.drawer a:not([href="#"])').forEach(function (item) {
            item.addEventListener('click', function () {
                drawer.closeDrawer();
            })
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
    if (document.querySelector('.drawer__nav-toggle') && document.querySelector('.drawer--persistent')) {
        const toggle = document.querySelector('.drawer__nav-toggle');
        const drawer = document.querySelector('.drawer--persistent');

        toggle.addEventListener('click', function (e) {
            e.preventDefault();

            if (drawer.classList.contains('drawer--open')) {
                drawer.classList.remove('drawer--open');
                document.body.classList.remove('persistent--open');
            } else {
                drawer.classList.add('drawer--open');
                document.body.classList.add('persistent--open');
            }
        });
    }

    /* Drawer permanent */
    if (document.querySelector('.drawer__nav-toggle') && document.querySelector('.drawer--permanent')) {
        const toggle = document.querySelector('.drawer__nav-toggle');
        const drawer = document.querySelector('.drawer--permanent');

        toggle.addEventListener('click', function (e) {
            e.preventDefault();

            if (drawer.classList.contains('drawer--compact')) {
                drawer.classList.remove('drawer--compact');
                document.body.classList.remove('permanent--open');
            } else {
                drawer.classList.add('drawer--compact');
                document.body.classList.add('permanent--open');
            }
        });

        document.body.classList.add('permanent--open');
    }

    /* Drawer submenu */
    if (document.querySelector('.drawer__content > .list')) {
        document.querySelectorAll('.drawer__content .list__item').forEach((item) => {
            if (item.querySelector('.list') !== null && !item.querySelector('.list__item-text > .list__item-meta')) {
                const listToggle = document.createElement('i');

                listToggle.setAttribute('class', 'iconify list__item-meta');
                listToggle.setAttribute('data-icon', 'mdi:chevron-down');
                item.querySelector('.list__item-text').appendChild(listToggle);

                item.querySelector('.list__item-text').addEventListener('click', function (e) {
                    e.preventDefault();

                    const listItem = this.parentNode;

                    if (listItem.classList.contains('list--open')) {
                        listItem.classList.remove('list--open');
                    } else {
                        listItem.classList.add('list--open');
                    }
                });
            }
        });
    }

    /* Drawer Library */
    function Drawer(drawerElem) {
        "use strict";

        function checkMobile(a) {
            return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
        }

        let drawerIcon = {
                set: function (a) {
                },
                setState: function (a, b) {
                },
                setOnClick: function (a) {
                }
            },
            drawerBg,
            drawerStarted = false,
            width = drawerElem.offsetWidth,
            correct = 0,
            percent = 0,
            trx = 0,
            opened = false,
            startMoveTime = 0,
            startX = 0,
            speedSwipe = 0,
            isMobile = checkMobile(navigator.userAgent || navigator.vendor || window.opera),
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
            antiSelect,
            onOpened = function () {
            },
            onClosed = function () {
            },
            onMove = function (x, percent, animation, duration) {
            };

        function setProperty(elem, property, value) {
            elem.style[property] = value;
        }

        function transfrom(x) {
            setProperty(drawerElem, transformProp, x + " " + trZ);
        }

        function move(x, e) {
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
            drawerBg.style.opacity = percent;
            onMove(320 - x, percent, false, 0);
        }

        function setTransition(s) {
            setProperty(drawerElem, transitionProp, propPrefixCss + "transform " + s + "s cubic-bezier(0.0, 0.0, 0.2, 1)");
            setProperty(drawerBg, transitionProp, "opacity " + s + "s cubic-bezier(0.0, 0.0, 0.2, 1)");
        }

        function clearTransition() {
            setProperty(drawerElem, transitionProp, "none");
            setProperty(drawerBg, transitionProp, "none");
        }

        function openDrawer(s) {
            s = s || 0.225;
            opened = true;
            setTransition(s);
            document.body.classList.add('drawer--open');
            drawerElem.style.opacity = 1;
            drawerBg.style.opacity = 1;
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

        function closeDrawer(s) {
            s = s || 0.225;
            opened = false;
            setTransition(s);
            document.body.classList.remove('drawer--open');
            drawerBg.style.opacity = 1;
            transfrom("translateX(-" + width + "px)");
            drawerIcon.setState(0, s);
            onMove(0, 0, true, s);
            setTimeout(function () {
                clearTransition();
                if (drawerStarted) {
                    return;
                }
                drawerElem.style.opacity = 1;
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

        function onMovedNoOpen(e) {
            move(correct - e.touches[0].clientX, e);
        }

        function onMovedOpen(e) {
            move(startX - e.touches[0].clientX, e);
        }

        function onMovedNoOpenDesktop(e) {
            move(correct - e.clientX, e);
        }

        function onMovedOpenDesktop(e) {
            move(startX - e.clientX, e);
        }

        window.addEventListener("resize", function (e) {
            width = drawerElem.offsetWidth;
            if (!opened) {
                transfrom("translateX(-" + width + "px)");
            }
        });

        drawerElem.addEventListener(typeStart, function (e) {
            drawerElem.style.opacity = 1;
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

        document.addEventListener(typeEnd, function (e) {
            drawerStarted = false;
            stateMoved = false;
            if (!isMobile) {
                antiSelect.style.visibility = "hidden";
                document.body.classList.remove("drawer__noselect");
            }
            document.removeEventListener(typeMove, isMobile ? onMovedOpen : onMovedOpenDesktop);
            document.removeEventListener(typeMove, isMobile ? onMovedNoOpen : onMovedNoOpenDesktop);

            speedSwipe = (((width / 2) / ((Math.abs((isMobile ? e.changedTouches[0].clientX : e.clientX) - startX)) / (new Date() - startMoveTime))) / 1000).toFixed(3);
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
        this.setDrawerIcon = function (icon) {
            drawerIcon = icon;
            drawerIcon.setOnClick(function (e) {
                toggleDrawer();
            });
        };
        this.getDrawerIcon = function () {
            return drawerIcon;
        };
        this.resetIconOnClick = function () {
            drawerIcon.setOnClick(function (e) {
                toggleDrawer();
            });
        };
        this.onOpenListener = function (listener) {
            onOpened = listener;
        };
        this.onCloseListener = function (listener) {
            onClosed = listener;
        };
        this.onMoveListener = function (listener) {
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
            //Find prop name
            let vendors;
            if (antiSelect.style.transform === undefined) {
                vendors = ['Webkit', 'Moz', 'ms', 'O'];
                for (const vendor in vendors) {
                    if (antiSelect.style[vendors[vendor] + 'Transform'] !== undefined) {
                        transformProp = vendors[vendor] + 'Transform';
                        propPrefixCss = "-" + vendors[vendor].toLowerCase() + "-";
                    }
                    if (antiSelect.style[vendors[vendor] + 'Transition'] !== undefined) {
                        transitionProp = vendors[vendor] + 'Transition';
                    }
                }
            }
            if (/.*opera.*presto/i.test(navigator.userAgent)) {
                trZ = "";
            }
        })();
    }

    /* Hamburger Library */
    function DrawerIcon(icon) {
        "use strict";
        let ic,
            line1,
            line2,
            line3,
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

        function setProperty(elem, property, value) {
            elem.style[property] = value;
        }

        function enableAnimation(duration) {
            let transition = propPrefixCss + "transform " + duration + "s ease";
            setProperty(line1, transitionProp, transition);
            setProperty(line2, transitionProp, transition);
            setProperty(line3, transitionProp, transition);
            setProperty(ic, transitionProp, transition);
        }

        function disableAnimation() {
            setProperty(line1, transitionProp, "none");
            setProperty(line2, transitionProp, "none");
            setProperty(line3, transitionProp, "none");
            setProperty(ic, transitionProp, "none");
        }

        this.state = function () {
            return direction;
        };

        this.setOnClick = function (listener) {
            icon.onclick = listener;
        };

        this.set = function (percent) {
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
            setProperty(line1, transformProp, "rotate(" + rotateLine + "deg) scaleX(" + scaleX + ") translateY(" + transY + "px) translateX(" + transX + "px) " + trZ);
            setProperty(line2, transformProp, "scaleX(" + scaleX2 + ") translateX(" + transX2 + "px) " + trZ);
            setProperty(line3, transformProp, "rotate(" + (-rotateLine) + "deg) scaleX(" + scaleX + ") translateY(" + (-transY) + "px) translateX(" + transX + "px) " + trZ);
            setProperty(ic, transformProp, "rotate(" + rotateIc + "deg) " + trZ);
        };

        this.setState = function (state, duration) {
            duration = duration || 0.225;
            enableAnimation(duration);
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
                disableAnimation();
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

        (function () {
            icon.innerHTML += '<span class="ic"><i class="line one"></i><i class="line two"></i><i class="line thr"></i></span>';
            ic = icon.querySelector(".ic");
            line1 = ic.querySelector(".one");
            line2 = ic.querySelector(".two");
            line3 = ic.querySelector(".thr");
            //Find prop name
            let testEl = document.createElement('div'),
                vendors;
            if (testEl.style.transform === undefined) {
                vendors = ['Webkit', 'Moz', 'ms', 'O'];
                for (const vendor in vendors) {
                    if (testEl.style[vendors[vendor] + 'Transform'] !== undefined) {
                        transformProp = vendors[vendor] + 'Transform';
                        propPrefixCss = "-" + vendors[vendor].toLowerCase() + "-";
                    }
                    if (testEl.style[vendors[vendor] + 'Transition'] !== undefined) {
                        transitionProp = vendors[vendor] + 'Transition';
                    }
                }
            }
            if (/.*opera.*presto/i.test(navigator.userAgent)) {
                trZ = "";
            }
        })();
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
}