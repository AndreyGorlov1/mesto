import { Card } from './card.js';
import { FormValidator } from './formValidator.js';


const mainName = document.querySelector('.profile__main-name');
const extra = document.querySelector('.profile__activity');
const profileFormEdit = document.querySelector('#editProfile');
const nameInput = document.querySelector('#profileName');
const extraInput = document.querySelector('#profileExtra');
const profilePopupEdit = document.querySelector('#editProfilePopup');
const profileEdit = document.querySelector('.profile__edit-button');

const cardAddButton = document.querySelector('.profile__add-button');
const cardSection = document.querySelector('.elements');
const mestoAddForm = document.querySelector('#addMesto');
const mestoAddPopup = document.querySelector('#addMestoPopup');
const cardAddName = document.querySelector('#addCardName');
const cardAddExtra = document.querySelector('#addCardExtra');
const buttonsClose = document.querySelectorAll('.popup__close');

const popupsList = Array.from(document.querySelectorAll('.popup'));

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

function createCard(name, link) {
  const card = new Card(name, link, '.templateCard');

  return card;
}


function addCard(name, link) {
  const card = createCard(name, link).generateCard();

  cardSection.prepend(card);
}

initialCards.forEach(function(item) {
  addCard(item.name, item.link);
});

popupsList.forEach(function(item) {
  item.addEventListener('click', function(evt) {
    closePopup(evt.target);
  });
});

buttonsClose.forEach(function(button) {
  const popup = button.closest('.popup');

  button.addEventListener('click', function() {
    closePopup(popup);
  });
});

function closeOnKey(evt) { // Не работает
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closeOnKey);
};
function closePopup(item) {
  item.classList.remove('popup_opened');
};

function handleEditFormSubmit(evt) {
  evt.preventDefault();

  mainName.textContent = nameInput.value;
  extra.textContent = extraInput.value;

  closePopup(profilePopupEdit);
};

function handleAddFormSubmit(evt) {
  evt.preventDefault();

  createCard(cardAddName.value, cardAddExtra.value);

  evt.target.reset();

  closePopup(addMestoPopup);
};

profileFormEdit.addEventListener('submit', handleEditFormSubmit);
mestoAddForm.addEventListener('submit', handleAddFormSubmit);

profileEdit.addEventListener('click', function() {
  openPopup(profilePopupEdit);

  nameInput.value = mainName.textContent;
  extraInput.value = extra.textContent;
  
  const inputValidation = new FormValidator({
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    spanClass: '.form__error-span',
    inputErrorClass: 'form__input_invalid',
    spanErrorClass: 'form__error-span_enabled',
  }, profilePopupEdit);

  inputValidation.enableValidation();
});

cardAddButton.addEventListener('click', function() {
  openPopup(mestoAddPopup);

  const inputValidation = new FormValidator({
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inputErrorClass: 'form__input_invalid',
    spanClass: '.form__error-span',
    spanErrorClass: 'form__error-span_enabled',
  }, mestoAddPopup);

  inputValidation.enableValidation();
});