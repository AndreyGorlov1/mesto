export default class Popup {
    constructor ( popupSelector ) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(this._popupSelector);
    }

    setEventListener() {
        this._popup.querySelector('.popup__close').addEventListener('click', () => {
            this.close();
        });
    }

    _handleEscClose(evt) {
        if(evt.key === 'Escape') {
            this.close();
        }
    }

    open() {
        console.log(this._popup.querySelector('.popup__close'));
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
}