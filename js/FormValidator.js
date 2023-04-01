export default class FormValidator {
  constructor(data, formElement) {
    this._formElement = formElement;

    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._errorSpan = data.spanClass;
    this._inputErrorClass = data.inputErrorClass;
    this._spanErrorClass = data.spanErrorClass;
  }

  _setEventListener() {
    this._inputArray = Array.from(this._formElement.querySelectorAll(`${this._inputSelector}`));
    this._submitButton = this._formElement.querySelector(`${this._submitButtonSelector}`);
    
    this._inputArray.forEach((input) => {

      input.addEventListener('input', () => {
        this._checkInputValidity(input);
      });
    })
  };

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showErrorMessage(input, input.validationMessage);
      this.toggleSubmitButtonState();
    } else {
      this._hideErrorMessage(input);
      this.toggleSubmitButtonState();
    };
  };

  toggleSubmitButtonState() {
    if(this._hasInvalidInput()) {
      this._submitButton.setAttribute('disabled', '');
    } else {
      this._submitButton.removeAttribute('disabled');
    }
  };

  _showErrorMessage(input, errorMessage) {
    input.classList.add(`${this._inputErrorClass}`);

    const errorElement = this._formElement.querySelector(`.${input.id}-error`);

    errorElement.classList.add(`${this._spanErrorClass}`);

    errorElement.textContent = errorMessage;
  };

  _hideErrorMessage(input) {
    input.classList.remove(`${this._inputErrorClass}`);

    const errorElement = this._formElement.querySelector(`.${input.id}-error`);

    errorElement.classList.remove(`${this._spanErrorClass}`);

    errorElement.textContent = '';
  };
  
  _hasInvalidInput() {
    return this._inputArray.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  enableValidation() {
    this._setEventListener();
  };
};