import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, imageSrc, imageName) {
        super(popupSelector)
        this._imageSrc = imageSrc;
        this._imageName = imageName;
    }
    open() {
console.log('1');

        const image = this._popup.querySelector('.element__image');
        image.src = this._imageSrc;
        image.alt = '' + this._imageName;
        this._popup.querySelector('.element__name').textContent = this._imageName;

    }
}