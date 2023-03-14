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
    this._input = this._formElement.querySelectorAll(`${this._inputSelector}`);
    this._submitButton = this._formElement.querySelector(`${this._submitButtonSelector}`);
    this._errorSpan = this._formElement.querySelectorAll(`${this._errorSpan}`);

    // this._input.forEach((item) => {
    //   item.addEventListener('input', () => {
    //     console.log(item);
    //     this._checkInputValidity(item);
    //   });
    // });

    for (let i = 0; i < this._input.length; i++) {
      this._input[i].addEventListener('input', () => {
        this._checkInputValidity(this._input[i], i)
      });
    }
  };

  _checkInputValidity(input, index) {
    if (!input.validity.valid) {
      this._showErrorMessage(index, input.validationMessage);
      input.classList.add(`${this._inputErrorClass}`);
      this._toggleSubmitButtonState(index);
    } else if (input.validity.valid) {
      this._hideErrorMessage(index);
      input.classList.remove(`${this._inputErrorClass}`);
      this._toggleSubmitButtonState(index);
    };
  };

  _toggleSubmitButtonState(index) {
    if(!this._hasInvalidInput(index)) {
      this._submitButton.setAttribute('disabled', '');
    } else if(this._hasInvalidInput(index)) {
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
  
  _hasInvalidInput(index) {
    return this._input[index].validity.valid;
  };

  enableValidation() {
    this._setEventListener();
    console.log(this._errorSpan[0]);
  };
}