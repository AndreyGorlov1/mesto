let mainName = document.querySelector('.profile__main-name');
let job = document.querySelector('.profile__activity');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('#input__name');
let jobInput = document.querySelector('#input__job');
let popupClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let editProfile = document.querySelector('.profile__edit-button');

function openPopup () {
  popup.classList.add('popup_opened');
  nameInput.value = mainName.textContent;
  jobInput.value = job.textContent;
}
function closePopup () {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault(); 

  mainName.textContent = nameInput.value;
  job.textContent = jobInput.value;

  closePopup();
}


// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);
editProfile.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);