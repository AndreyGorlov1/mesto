function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach(function(formElement) {
    setEventLiestener(formElement);
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
      enableValidation(); //Думаю, так хорошо работает.
    });
  });
};

function setEventLiestener(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));

  const buttonElement = formElement.querySelector('.form__submit');
  toggleSubmitButtonState(buttonElement, inputList);

  inputList.forEach(function(inputElement) {
    // console.log(inputElement.validity.valid);
    // Я непонимаю почему, но поля ввода во всех формах изначально false, хотя в редактировании профиля поля валидны...
    

    const errorSpan = inputElement.closest('.form__field').querySelector('.form__error-span');
    
    inputElement.addEventListener('input', function() {
      checkInputValidity(inputElement,errorSpan);
      toggleSubmitButtonState(buttonElement, inputList);
    });
    console.log(inputElement.validity.valid);
  });
};

function toggleSubmitButtonState(button, inputList) {
  if (hasInvalidInput(inputList)) {
    button.setAttribute('disabled', '');
  } else {
    button.removeAttribute('disabled');
  };
};

function checkInputValidity (formInput, errorSpan) {
  if (!formInput.validity.valid) {
    showErrorMessage(errorSpan, formInput.validationMessage);
  } else if (formInput.validity.valid) {
    hideErrorMessage(errorSpan);
  };
};

function showErrorMessage (element, errorMessage) {
  element.classList.add('form__error-span_enabled');

  element.textContent = errorMessage;
};

function hideErrorMessage (element) {
  element.classList.remove('form__error-span_enabled');

  element.textContent = '';
};

enableValidation();

function hasInvalidInput(inputArray) {
  return inputArray.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};