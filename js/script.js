import Section from './Section.js';
import Card from './Card.js';
import {
  initialCards,
  cardAddButton,
  profileEdit,
  cardImage,
} from '../utils/constants.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';


const imageSection = new Section ({
  items: initialCards,
  renderer: (item) => {
    const card = new Card (item.name, item.link, '.templateCard');

    const cardElement = card.generateCard();

    imageSection.addItem(cardElement);
  }
}, '.elements');

imageSection.renderItems();

const cardAddForm = new PopupWithForm (
  '.mestoAddPopup',
  (evt) => {
    evt.preventDefault();
  
    evt.target.reset();
  }
);

const profileEditForm = new PopupWithForm (
  '.profileEditPopup',
  (evt) => {
    evt.preventDefault();

    

    evt.target.reset();
  }
);

cardAddButton.addEventListener('click', () => {
  cardAddForm.open();
  cardAddForm.setEventListener();
});

profileEdit.addEventListener('click', () => {
  profileEditForm.open();
  profileEditForm.setEventListener();
});

cardImage.forEach((item) => {
  item.addEventListener('click', () => {
    const image = item.querySelector('.element__image');
    const name = item.querySelector('.element__name');
    
    const imageBigPicture = new PopupWithImage ('.popupBigPicture', image.src, name.textContent);

    imageBigPicture.open();
  })
})