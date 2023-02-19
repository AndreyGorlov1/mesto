const formList = Array.from(document.querySelectorAll('.form'));

formList.forEach(function(element) {
  const inputList = Array.from(element.querySelectorAll('.form__input'));

  const submitButton = element.querySelector('.form__submit');

  inputList.forEach(function(item) {
    const formErrorSpan = item.closest('.form__field').querySelector('.form__error-span');
    item.addEventListener('input', function() {
      checkInputValidity(item, formErrorSpan, submitButton);
    });
  });
});

function checkInputValidity (formInput, errorSpan, buttonStats) {
  if (!formInput.validity.valid) {
    showErrorMessage(errorSpan, formInput.validationMessage);
    buttonStats.setAttribute('disabled', 'disabled');
  } else if (formInput.validity.valid) {
    hideErrorMessage(errorSpan);
    buttonStats.removeAttribute('disablied');
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