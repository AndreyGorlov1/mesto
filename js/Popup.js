export default class Popup {
    constructor ( popupSelector ) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(this._popupSelector);

        this._escHandler = this._handleEscClose.bind(this);
    }

    setEventListener() {
        this._popup.querySelector('.popup__close').addEventListener('click', () => {
            this.close();
        });

        this._popup.addEventListener('click', (event) => {
            if(event.target.className.includes('popup_opened')) {
                this.close();
            }
        });
    }

    _handleEscClose(evt) {
        if(evt.key === 'Escape') {
            this.close();
        }
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._escHandler);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._escHandler);
    }
}