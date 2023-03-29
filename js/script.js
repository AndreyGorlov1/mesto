import Section from './Section.js';
import Card from './Card.js';
import Popup from './Popup.js';
import {
  initialCards,
  cardAddButton,
  profileEdit,
} from '../utils/constants.js';

const imageSection = new Section ({
  items: initialCards,
  renderer: (item) => {
    const card = new Card (item.name, item.link, '.templateCard');

    const cardElement = card.generateCard();

    imageSection.addItem(cardElement);
  }
}, '.elements');

imageSection.renderItems();

cardAddButton.addEventListener('click', () => {
  const cardAddForm = new Popup ('.mestoAddPopup');

  cardAddForm.open();
});

profileEdit.addEventListener('click', () => {
  const profileEditForm = new Popup ('.profileEditPopup');
  
  profileEditForm.open();
});

// const profileInputValidation = new FormValidator({
//   inputSelector: '.form__input',
//   submitButtonSelector: '.form__submit',
//   spanClass: '.form__span',
//   inputErrorClass: 'form__input_invalid',
//   spanErrorClass: 'form__span-error_enabled',
// }, profilePopupEdit);

// profileInputValidation.enableValidation();

// const cardAddInputValidation = new FormValidator({
//   inputSelector: '.form__input',
//   submitButtonSelector: '.form__submit',
//   spanClass: '.form__span',
//   inputErrorClass: 'form__input_invalid',
//   spanErrorClass: 'form__span-error_enabled',
// }, mestoAddPopup);

// cardAddInputValidation.enableValidation();

// popupsList.forEach(function(item) {
//   item.addEventListener('mousedown', function(evt) {
//     if(evt.target.classList.contains('popup')) {
//       closePopup(evt.target);
//     }
//   });
// });

// buttonsClose.forEach(function(button) {
//   const popup = button.closest('.popup');

//   button.addEventListener('click', function() {
//     closePopup(popup);
//   });
// });

// function closeOnKey(evt) {
//   if(evt.key === 'Escape') {
//     const popup = document.querySelector('.popup_opened');
//     closePopup(popup);
//   }
// }

// function openPopup(item) {
//   item.classList.add('popup_opened');
//   document.addEventListener('keydown', closeOnKey);
// };
// function closePopup(item) {
//   item.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closeOnKey);
// };

// function handleEditFormSubmit(evt) {
//   evt.preventDefault();

//   mainName.textContent = nameInput.value;
//   extra.textContent = extraInput.value;

//   closePopup(profilePopupEdit);
// };

// function handleAddFormSubmit(evt) {
//   evt.preventDefault();

//   addCard(cardAddName.value, cardAddExtra.value);

//   evt.target.reset();

//   cardAddInputValidation.toggleSubmitButtonState();

//   closePopup(addMestoPopup);
// };

// profileFormEdit.addEventListener('submit', handleEditFormSubmit);
// mestoAddForm.addEventListener('submit', handleAddFormSubmit);

// profileEdit.addEventListener('click', function() {
//   openPopup(profilePopupEdit);

//   nameInput.value = mainName.textContent;
//   extraInput.value = extra.textContent;
// });

// cardAddButton.addEventListener('click', function() {
//   openPopup(mestoAddPopup);
// });