import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector,imageName, imageSrc) {
        super(popupSelector)
        this._imageSrc = imageSrc;
        this._imageName = imageName;

        this._image = this._popup.querySelector('.popup__image');
    }

    open() {
        super.open();

        this._image.src = this._imageSrc;
        this._image.alt += ' ' + this._imageName;
        this._popup.querySelector('.popup__image-name').textContent = this._imageName;

    }
}