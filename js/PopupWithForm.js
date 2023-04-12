import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor( popupSelector, {formSubmit, formValidation}) {
        super(popupSelector);
        
        this._formSubmit = formSubmit;

        this._formValidation = formValidation;

        this._form = this._popup.querySelector('.form');

        this._inputList = this._popup.querySelectorAll('.form__input');
    }

    _getInputValues() {
        this._formValues = {};

        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }

    setEventListener() {
        this._formSubmitButton = this._popup.querySelector('.form__submit');

        this._formValidation.enableValidation();

        this._popup.addEventListener('submit', (event) => {
            event.preventDefault();

            this._getInputValues();

            this._formSubmit(this._formValues);

            this._formValidation.toggleSubmitButtonState();

            this.close();
        })

        super.setEventListener();
    }
    
    close() {
        super.close();
        this._form.reset();
    }
}