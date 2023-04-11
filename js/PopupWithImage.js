import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)

        this._image = this._popup.querySelector('.popup__image');
    }

    open(imageName, imageSrc) {
        super.open();

        this.setEventListener();

        this._image.src = imageSrc;
        this._image.alt += ' ' + imageName;
        this._popup.querySelector('.popup__image-name').textContent = imageName;

    }
}