const formList = Array.from(document.querySelectorAll('.form'));

formList.forEach(function(element) {
  const inputList = Array.from(element.querySelectorAll('.form__input'));

  const submitButton = element.querySelector('.form__submit');
  inputList.forEach(function(item) {
    const formErrorSpan = item.closest('.form__field').querySelector('.form__error-span');
    item.addEventListener('input', function() {
      checkInputValidity(item, formErrorSpan);
      toggleSubmitButtonState(submitButton, inputList);
    });
    toggleSubmitButtonState(submitButton, inputList);
  });
});

function toggleSubmitButtonState(button, inputList) {
  if (hasInvalidInput(inputList)) {
    button.setAttribute('disabled', '')
  } else {
    button.removeAttribute('disabled');
  }
}
// setAttribute
function hasInvalidInput(inputArray) {
  return inputArray.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

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