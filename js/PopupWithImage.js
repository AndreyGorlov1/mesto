import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)

        this._image = this._popup.querySelector('.popup__image');
        this._imageName =this._popup.querySelector('.popup__image-name');
    }

    open(imageName, imageSrc) {
        super.open();

        this._image.src = imageSrc;
        this._image.alt += ' ' + imageName;
        this._imageName.textContent = imageName;
    }
}