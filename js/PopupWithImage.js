import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector,imageName, imageSrc) {
        super(popupSelector)
        this._imageSrc = imageSrc;
        this._imageName = imageName;
    }
    open() {
        console.log(this._imageSrc);
        console.log(this._imageName);
        console.log(this._popup);



        const image = this._popup.querySelector('.popup__image');
        console.log(image);

        image.src = this._imageSrc;
        image.alt += ' ' + this._imageName;
        this._popup.querySelector('.popup__image-name').textContent = this._imageName;

    }
}