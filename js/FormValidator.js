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

    // for (let i = 0; i < this._inputArray.length; i++) {
    //   this._inputArray[i].addEventListener('input', () => {
    //     this._checkInputValidity(this._inputArray[i], i)
    //   });
    // };
    
    this._inputArray.forEach((item, index) => {
      item.addEventListener('input', () => {
        this._checkInputValidity(item, index);
      })
    })
  };

  _checkInputValidity(input, index) {
    if (!input.validity.valid) {
      this._showErrorMessage(index, input.validationMessage);
      input.classList.add(`${this._inputErrorClass}`);
      this._toggleSubmitButtonState();
    } else if (input.validity.valid) {
      this._hideErrorMessage(index);
      input.classList.remove(`${this._inputErrorClass}`);
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

  _showErrorMessage(index, errorMessage) {
    this._errorSpan[index].classList.add(`${this._spanErrorClass}`);

    this._errorSpan[index].textContent = errorMessage;
  };

  _hideErrorMessage(index) {
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
}