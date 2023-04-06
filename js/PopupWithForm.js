import Popup from "./Popup.js";
import FormValidator from "./FormValidator.js";
import {
    mainName,
    extra
} from "../utils/constants.js"

export default class PopupWithForm extends Popup {
    constructor( popupSelector, formSubmit) {
        super(popupSelector);
        
        this._formSubmit = formSubmit;
        this._nameEdit = this._popup.querySelector('.nameInput');
        this._extraEdit = this._popup.querySelector('.extraInput');
    }

    _getInputValues() {
        this._name = this._nameEdit.value;
        this._extra = this._extraEdit.value;
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

        this._popup.addEventListener('submit', (event) => {
            event.preventDefault();

            this._formSubmit(this._nameEdit.value, this._extraEdit.value);

            this.close();
            event.target.reset();
        })

        super.setEventListener();
    }

    open() {
        super.open();

        if (this._popupSelector === '.profileEditPopup') {
            this._nameEdit.value = mainName.textContent;
            this._extraEdit.value = extra.textContent;
        }
    }
}