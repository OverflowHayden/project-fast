export default class DarkMode {
    darkModeState: boolean;
    button: HTMLElement;
    useDark: MediaQueryList;

    constructor(element: string) {
        this.darkModeState = false;
        this.button = document.querySelector(element);
        this.useDark = window.matchMedia('(prefers-color-scheme: dark)');

        this.toggleDarkMode(localStorage.getItem('dark-mode') == 'true');

        this.useDark.addListener((evt) => this.toggleDarkMode(evt.matches));

        this.button.addEventListener('click', () => {
            this.darkModeState = !this.darkModeState;

            this.toggleDarkMode(this.darkModeState);
            this.setDarkModeLocalStorage(this.darkModeState);
        });
    }

    toggleDarkMode(state: any) {
        document.documentElement.classList.toggle('dark-mode', state);
        this.darkModeState = state;
    }

    setDarkModeLocalStorage(state: any) {
        localStorage.setItem('dark-mode', state);
    }
}