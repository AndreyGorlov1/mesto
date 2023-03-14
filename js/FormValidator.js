export class FormValidator {
  constructor(data, formElement) {
    this._formElement = formElement;

    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inputErrorClass = data.inputErrorClass;
    this._errorSpan = data.spanClass;
    this._spanErrorClass = data.spanErrorClass;
  }

  _setEventListener() {
    this._input = this._formElement.querySelectorAll(`${this._inputSelector}`);
    this._submitButton = this._formElement.querySelector(`${this._submitButtonSelector}`);
    this._errorSpan = this._formElement.querySelectorAll(`${this._errorSpan}`);

    this._input.forEach(function(item) {
      item.addEventListener('input', () => {
        console.log(item);
        this._checkInputValidity(item);
      });
    });
  };

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showErrorMessage(item.validationMessage);
      this._input.classList.add(`${this._inputErrorClass}`);
    } else if (input.validity.valid) {
      this._hideErrorMessage();
      this._input.classList.remove(`${this._inputErrorClass}`);
      };
  };

  _toggleSubmitButtonState() {
    if(!this._hasInvalidInput()) {
      this._submitButton.setAttribute('disabled', '');
    } else if(this._hasInvalidInput) {
      this._submitButton.removeAttribute('disabled');
    }
  };

  _showErrorMessage(errorMessage) {
    this._errorSpan.classList.add(`${this._spanErrorClass}`);

    this._errorSpan.textContent = errorMessage;
  };

  _hideErrorMessage() {
    this._errorSpan.classList.remove(`${this._spanErrorClass}`);

    this._errorSpan.textContent = '';
  };
  
  _hasInvalidInput() {
    return this._input.validity.valid;
  };

  enableValidation() {
    this._setEventListener();
  };
}