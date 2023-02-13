const mainName = document.querySelector('.profile__main-name');
const extra = document.querySelector('.profile__activity');
const editProfileForm = document.querySelector('#editProfile');
const nameInput = document.querySelector('#input__name');
const extraInput = document.querySelector('#input__extra');
const editPopupClose = document.querySelector('#editPopupClose');
const editProfilePopup = document.querySelector('#editProfilePopup');
const editProfile = document.querySelector('.profile__edit-button');

const addCard = document.querySelector('.profile__add-button');
const cardSection = document.querySelector('.elements');
const cardElement = document.querySelector('#card').content;
const addMestoForm = document.querySelector('#addMesto');
const addMestoPopup = document.querySelector('#addMestoPopup');
const addPopupClose = document.querySelector('#addPopupClose');
const addCardName = document.querySelector('#addCardName');
const addCardExtra = document.querySelector('#addCardExtra');
const bigPicturePopup = document.querySelector('#bigPicturePopup');
const popupImage = document.querySelector('.popup__image');
const popupImageName= document.querySelector('.popup__image-name');
const footer = document.querySelector('.footer');
const bigPictureImage = document.querySelector('.popup__image');
const bigPictureAlt = document.querySelector('.popup__image').alt;
const bigPictureName = document.querySelector('.popup__image-name');
const bigPicturePopupClose = document.querySelector('#bigPicturePopupClose');
const closeButtons = document.querySelectorAll('.popup__close');

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

// function addMesto(name, link) {
//   addCardOnPage(name, link);
// }

initialCards.forEach(function(item) {
  addCardOnPage(item.name, item.link);
})

closeButtons.forEach(function(button) {
  const popup = button.closest('.popup');

  button.addEventListener('click', function() {
    closePopup(popup);
  })
})

function createCard(name, link) {
  const cardItem = cardElement.querySelector('.element').cloneNode('true');

  const likeButton = cardItem.querySelector('.element__like');
  const elementImage = cardItem.querySelector('.element__image');
  const elementLikeImage = cardItem.querySelector('.element__like-image');
  const elementName = cardItem.querySelector('.element__name');

  elementImage.src = link;
  elementImage.alt += ' ' + name;
  elementName.textContent = name;

  cardItem.querySelector('.element__delete').addEventListener('click',function() {
    deleteCard(cardItem);
  });

  elementImage.addEventListener('click', function() {
    openPopup(bigPicturePopup);

    bigPictureImage.src = link;
    bigPictureImage.alt += ' ' + name;
    bigPictureName.textContent = name;
    
  });
  
  likeButton.addEventListener('click', function() {
    elementLikeImage.classList.toggle('element__like_active');
  });

  return cardItem;
}

function addCardOnPage(name, link) {
  const card = createCard(name, link);

  cardSection.prepend(card);
}

function deleteCard(card) {
  card.closest('.element').remove();
}

function openPopup(button) {
  button.classList.add('popup_opened');
}
function closePopup(button) {
  button.classList.remove('popup_opened');
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();

  mainName.textContent = nameInput.value;
  extra.textContent = extraInput.value;

  closePopup(editProfilePopup);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();

  if (addCardName.value != '' && addCardExtra.value != '' && addCardName.value != ' ' && addCardExtra.value != ' ') {
    // Пустые строки не пройдут!!!
    addCardOnPage(addCardName.value, addCardExtra.value);
  }

  evt.target.reset()

  closePopup(addMestoPopup);
}


editProfileForm.addEventListener('submit', handleEditFormSubmit);
addMestoForm.addEventListener('submit', handleAddFormSubmit);
editProfile.addEventListener('click', function() {
  openPopup(editProfilePopup);
  nameInput.value = mainName.textContent;
  extraInput.value = extra.textContent;
});
addCard.addEventListener('click', function() {
  openPopup(addMestoPopup);
});