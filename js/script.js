import Section from './Section.js';
import Card from './Card.js';
import {
  initialCards,
  cardAddButton,
  profileEdit,
} from '../utils/constants.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';


const imageSection = new Section ({
  items: initialCards,
  renderer: (item) => {
    const card = new Card ({
      title: item.name,
      src: item.link,
      openBigPicture: (title, src) => {
        const bigPicture = new PopupWithImage('.popupBigPicture', title, src);

        bigPicture.open();
      }},
      '.templateCard'
    );

    const cardElement = card.generateCard();

    imageSection.addItem(cardElement);
  }
}, '.elements');

imageSection.renderItems();

const cardAddForm = new PopupWithForm (
  '.mestoAddPopup',
  (title, src) => {
    const card = new Card ({
      title: title,
      src: src,
      openBigPicture: (title, src) => {
        const bigPicture = new PopupWithImage('.popupBigPicture', title, src);

        bigPicture.open();
      }
    },
    '.templateCard');
    
    const cardElement = card.generateCard();
    
    imageSection.addItem(cardElement);
  }
);
cardAddForm.setEventListener();

const profileEditForm = new PopupWithForm ( '.profileEditPopup', 
  () => {
    const userInfo = new UserInfo({
      nameSelector: '.profile__main-name',
      extraSelector: '.profile__activity'});

    userInfo.setUserInfo();
  }
);
profileEditForm.setEventListener();

cardAddButton.addEventListener('click', () => {
  cardAddForm.open();
});

profileEdit.addEventListener('click', () => {
  profileEditForm.open();
});