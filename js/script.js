import { Card } from './card.js';
import { FormValidator } from './formValidator.js';


const mainName = document.querySelector('.profile__main-name');
const extra = document.querySelector('.profile__activity');
const editProfileForm = document.querySelector('#editProfile');
const nameInput = document.querySelector('#input__name');
const extraInput = document.querySelector('#input__extra');
const editProfilePopup = document.querySelector('#editProfilePopup');
const editProfile = document.querySelector('.profile__edit-button');

const addCard = document.querySelector('.profile__add-button');
const cardSection = document.querySelector('.elements');
const addMestoForm = document.querySelector('#addMesto');
const addMestoPopup = document.querySelector('#addMestoPopup');
const addCardName = document.querySelector('#addCardName');
const addCardExtra = document.querySelector('#addCardExtra');
const closeButtons = document.querySelectorAll('.popup__close');

const popupsList = Array.from(document.querySelectorAll('.popup'));

const profileNameField = document.querySelector('.form__field_profile-name');
const profileExtraField = document.querySelector('.form__field_profile-extra');
const cardAddNameField = document.querySelector('.form__field_add-name');
const cardAddExtraField = document.querySelector('.form__field_add-extra');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(function(item) {
  createCard(item.name, item.link);
});

function createCard(name, link) {
  const card = new Card(name, link);

  const cardElement = card.generateCard();

  cardSection.prepend(cardElement);
}

popupsList.forEach(function(item) {
  item.addEventListener('click', function(evt) {
    closePopup(evt.target);
  });
});

closeButtons.forEach(function(button) {
  const popup = button.closest('.popup');

  button.addEventListener('click', function() {
    closePopup(popup);
  });
});

const closeOnKey = function(evt) {
  if (evt.key === 'Escape') {
  const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
}

function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closeOnKey);
};
function closePopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeOnKey);
};

function handleEditFormSubmit(evt) {
  evt.preventDefault();

  mainName.textContent = nameInput.value;
  extra.textContent = extraInput.value;

  closePopup(editProfilePopup);
};

function handleAddFormSubmit(evt) {
  evt.preventDefault();

  createCard(addCardName.value, addCardExtra.value);

  evt.target.reset();

  closePopup(addMestoPopup);
};

editProfileForm.addEventListener('submit', handleEditFormSubmit);
addMestoForm.addEventListener('submit', handleAddFormSubmit);

editProfile.addEventListener('click', function() {
  openPopup(editProfilePopup);

  nameInput.value = mainName.textContent;
  extraInput.value = extra.textContent;
  
  const nameInputValidation = new FormValidator({
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inputErrorClass: '.form__input_invalid',
    spanClass: '.form__error-span',
    spanErrorClass: '.form__error-span_enabled',
  }, profileNameField);

  nameInputValidation.enableValidation();

  const extraInputValidation = new FormValidator({
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inputErrorClass: '.form__input_invalid',
    spanClass: '.form__error-span',
    spanErrorClass: '.form__error-span_enabled',
  }, profileExtraField);

  extraInputValidation.enableValidation();
});

addCard.addEventListener('click', function() {
  openPopup(addMestoPopup);

  const nameInputValidation = new FormValidator({
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inputErrorClass: '.form__input_invalid',
    spanClass: '.form__error-span',
    spanErrorClass: '.form__error-span_enabled',
  }, cardAddNameField);

  nameInputValidation.enableValidation();

  const extraInputValidation = new FormValidator({
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inputErrorClass: '.form__input_invalid',
    spanClass: '.form__error-span',
    spanErrorClass: '.form__error-span_enabled',
  }, cardAddExtraField);

  extraInputValidation.enableValidation();
});