import Section from './Section.js';
import Card from './Card.js';
import {
  initialCards,
  cardAddButton,
  profileEdit,
  cardImage,
  mainName,
  extra,
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

const cardAddForm = new PopupWithForm ('.mestoAddPopup',
  (title, src) => {
    const card = new Card (title, src, '.templateCard');
    
    const cardElement = card.generateCard();
    
    imageSection.addItem(cardElement);
  }
);
  cardAddForm.setEventListener();

const profileEditForm = new PopupWithForm ( '.profileEditPopup', 
  (name, job) => {
    console.log(name, job)
        mainName.textContent = name;
        extra.textContent = job;
  }
);
  profileEditForm.setEventListener();

cardAddButton.addEventListener('click', () => {
  cardAddForm.open();
});

profileEdit.addEventListener('click', () => {
  profileEditForm.open();
});

cardImage.forEach((item) => {
  item.addEventListener('click', () => {
    const image = item.querySelector('.element__image');
    const name = item.querySelector('.element__name');
    
    const imageBigPicture = new PopupWithImage ('.popupBigPicture', image.src, name.textContent);

    imageBigPicture.open();
  })
})