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
    this._formElement.querySelector(`${this._inputSelector}`).addEventListener('input', () => {
      this._checkInputValidity();
      this._toggleSubmitButtonState();
    });
  };

  _toggleSubmitButtonState() {
    if(!this._hasInvalidInput()) {
      this._formElement.closest('.form').querySelector(`${this._submitButtonSelector}`).setAttribute('disabled', '');
    } else if(this._hasInvalidInput) {
      this._formElement.closest('.form').querySelector(`${this._submitButtonSelector}`).removeAttribute('disabled');
    }
  };

  _checkInputValidity () {
    if (!this._formElement.querySelector(`${this._inputSelector}`).validity.valid) {
      this._showErrorMessage();
      this._formElement.querySelector(`${this._inputSelector}`).classList.add(`${this._inputErrorClass}`);
    } else if (this._formElement.querySelector(`${this._inputSelector}`).validity.valid) {
      this._hideErrorMessage();
      this._formElement.querySelector(`${this._inputSelector}`).remove(`${this._inputErrorClass}`);
      };
  };

  _showErrorMessage (errorMessage) {
    this._formElement.querySelector(`${this._errorSpan}`).classList.add(`${this._spanErrorClass}`);

    this._formElement.querySelector(`${this._errorSpan}`).textContent = errorMessage;
  };

  _hideErrorMessage () {
    this._formElement.querySelector(`${this._errorSpan}`).remove(`${this._spanErrorClass}`);

    this._formElement.querySelector(`${this._errorSpan}`).textContent = '';
  };
  
  _hasInvalidInput() {
    return !this._formElement.querySelector(`${this._inputSelector}`).validity.valid;
  };

  enableValidation() {
    this._setEventListener();

    console.log(this._formElement,
      this._inputSelector,
      this._submitButtonSelector,
      this._inputErrorClass,
      this._errorSpan,
      this._spanErrorClass,
    );

    console.log(this._formElement.querySelector(`${this._errorSpan}`));
  };
}