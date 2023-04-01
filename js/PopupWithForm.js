import Popup from "./Popup.js";
import FormValidator from "./FormValidator.js";

export default class PopupWithForm extends Popup {
    constructor( popupSelector, formSubmit ) {
        super(popupSelector);
        this._formSubmit = formSubmit;
    }

    _getInputValues() {
        this._name = this._popup.querySelector('.nameInput').value;
        this._extra = this._popup.querySelector('.extraInput').value;
    }

    setEventListener() {
        const nameEdit = this._popup.querySelector('.nameInput');
        const jobEdit = this._popup.querySelector('.extraInput');

        const inputValidation = new FormValidator({
            inputSelector: '.form__input',
            submitButtonSelector: '.form__submit',
            spanClass: '.form__span',
            inputErrorClass: 'form__input_invalid',
            spanErrorClass: 'form__span-error_enabled',
          }, this._popup);

        inputValidation.enableValidation();
    }

    close() {
        this._popup.reset();
    }
}