document.querySelector('.profile__edit-image').addEventListener('click', changeStatusPopup);
document.querySelector('.popup__close').addEventListener('click', changeStatusPopup);

function changeStatusPopup () {
  document.querySelector('.popup').classList.toggle('popup__opened');
}

let mainName = document.querySelector('.profile__main-name');
let job = document.querySelector('.profile__activity');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-activity');
console.log(mainName);
console.log(job);
console.log(formElement);
console.log(nameInput.value);
console.log(jobInput.value);

function handleFormSubmit (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                              // Так мы можем определить свою логику отправки.
                                              // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  let newName = nameInput.value;
  let newJob = jobInput.value;
  // Выберите элементы, куда должны быть вставлены значения полей
  console.log(newName);
  console.log(newJob);
  // Вставьте новые значения с помощью textContent
  mainName.textContent = newName;
  job.textContent = newJob;
  changeStatusPopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 