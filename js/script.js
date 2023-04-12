import '../pages/index.css';
import Section from './Section.js';
import Card from './Card.js';
import {
  initialCards,
  cardAddButton,
  profileEdit,
  nameInput,
  jobInput,
  profileForm,
  mestoAddForm
} from '../utils/constants.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';

function createCard(item) {
  const card = new Card({
    title: item.name,
    src: item.link,
    openBigPicture: (title, src) => {
      openBigPicture(title, src);
    }
  },
  '.templateCard');

  const cardElemnt = card.generateCard();

  return cardElemnt;
};

const bigPicture = new PopupWithImage('.popupBigPicture');
  bigPicture.setEventListener();

function openBigPicture(title, src) {
  bigPicture.open(title, src);
};

const userInfo = new UserInfo({
  nameSelector: '.profile__main-name',
  extraSelector: '.profile__activity'
});

const imageSection = new Section ({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    imageSection.addItem(card);
  }
}, '.elements');

imageSection.renderItems();

const cardAddForm = new PopupWithForm (
  '.mestoAddPopup',
  {
    formSubmit: (obj) => {
      imageSection.addItem(createCard(obj));
    },
  formValidation: new FormValidator({
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    spanClass: '.form__span',
    inputErrorClass: 'form__input_invalid',
    spanErrorClass: 'form__span-error_enabled',
  }, mestoAddForm)}
);
cardAddForm.setEventListener();

const profileEditForm = new PopupWithForm (
  '.profileEditPopup', 
  {
    formSubmit: (obj) => {
    userInfo.setUserInfo(obj.name, obj.extra);
  },
  formValidation: new FormValidator({
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    spanClass: '.form__span',
    inputErrorClass: 'form__input_invalid',
    spanErrorClass: 'form__span-error_enabled',
  }, profileForm)
}
);
profileEditForm.setEventListener();

cardAddButton.addEventListener('click', () => {
  cardAddForm.open();
});

profileEdit.addEventListener('click', () => {
  const infoObject = userInfo.getUserInfo();

  nameInput.value = infoObject.userName;
  jobInput.value = infoObject.userExtra;

  profileEditForm.open();
});