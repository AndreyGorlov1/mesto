import Popup from "./Popup.js";
import FormValidator from "./FormValidator.js";
import {
    mainName,
    extra
} from "../utils/constants.js"

export default class PopupWithForm extends Popup {
    constructor( popupSelector, formSubmit ) {
        super(popupSelector);
        this._formSubmit = formSubmit;
    }

    _getInputValues() {
        this._name = this._nameEdit.value;
        this._extra = this._jobEdit.value;
    }

    setEventListener() {
        this._formSubmitButton = this._popup.querySelector('.form__submit');

        const inputValidation = new FormValidator({
            inputSelector: '.form__input',
            submitButtonSelector: '.form__submit',
            spanClass: '.form__span',
            inputErrorClass: 'form__input_invalid',
            spanErrorClass: 'form__span-error_enabled',
          }, this._popup);

        inputValidation.enableValidation();

        this._formSubmitButton.addEventListener('submit', () => {
            this._formSubmit();
            this.close();
        })
    }

    open() {
        const open = super.open();
        
        this._nameEdit = this._popup.querySelector('.nameInput');
        this._jobEdit = this._popup.querySelector('.extraInput');

        if(this._popupSelector = '.profileEditPopup') {
        this._nameEdit.value = mainName.textContent;
        this._jobEdit.value = extra.textContent;
        }
    }
}