export class FormValidator {
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
    this._errorSpan = this._formElement.querySelectorAll(`${this._errorSpan}`);
    
    this._inputArray.forEach((input, index) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input, index);
      });
    })
  };

  _checkInputValidity(input, index) {
    if (!input.validity.valid) {
      this._showErrorMessage(input, index, input.validationMessage);
      this._toggleSubmitButtonState();
    } else if (input.validity.valid) {
      this._hideErrorMessage(input, index);
      this._toggleSubmitButtonState();
    };
  };

  _toggleSubmitButtonState() {
    if(this._hasInvalidInput(this._inputArray)) {
      this._submitButton.setAttribute('disabled', '');
    } else if(!this._hasInvalidInput(this._inputArray)) {
      this._submitButton.removeAttribute('disabled');
    }
  };

  _showErrorMessage(input, index, errorMessage) {
    input.classList.add(`${this._inputErrorClass}`);

    this._errorSpan[index].classList.add(`${this._spanErrorClass}`);

    this._errorSpan[index].textContent = errorMessage;
  };

  _hideErrorMessage(input, index) {
    input.classList.remove(`${this._inputErrorClass}`);

    this._errorSpan[index].classList.remove(`${this._spanErrorClass}`);

    this._errorSpan[index].textContent = '';
  };
  
  _hasInvalidInput(inputArray) {
    return inputArray.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  enableValidation() {
    this._setEventListener();
  };
};