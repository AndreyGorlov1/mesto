import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector,imageName, imageSrc) {
        super(popupSelector)
        this._imageSrc = imageSrc;
        this._imageName = imageName;
    }

    open() {
        const open = super.open();
        const image = this._popup.querySelector('.popup__image');

        image.src = this._imageSrc;
        image.alt += ' ' + this._imageName;
        this._popup.querySelector('.popup__image-name').textContent = this._imageName;

    }
}