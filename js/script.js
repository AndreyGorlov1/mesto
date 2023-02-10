let mainName = document.querySelector('.profile__main-name');
let extra = document.querySelector('.profile__activity');
let editProfileForm = document.querySelector('#editProfile');
let nameInput = document.querySelector('#input__name');
let extraInput = document.querySelector('#input__extra');
let editPopupClose = document.querySelector('#editPopupClose');
let editProfilePopup = document.querySelector('#editProfilePopup');
let editProfile = document.querySelector('.profile__edit-button');

let addCard = document.querySelector('.profile__add-button');
let cardSection = document.querySelector('.elements');
const cardElement = document.querySelector('#card').content;
let addMestoForm = document.querySelector('#addMesto');
let addMestoPopup = document.querySelector('#addMestoPopup');
let addPopupClose = document.querySelector('#addPopupClose');
let addCardName = document.querySelector('#addCardName');
let addCardExtra = document.querySelector('#addCardExtra');
const bigPicture = document.querySelector('#bigPicture').content;
const bigPicturePopup = document.querySelector('#bigPicturePopup');
let popupImage = document.querySelector('.popup__image');
let popupImageName= document.querySelector('.popup__image-name');
let footer = document.querySelector('.footer');

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

function addMesto(name, link) {
  initialCards.unshift({
    name: name,
    link: link,
  });
  addCardOnPage(name, link);
}

initialCards.forEach(function(item) {
  addCardOnPage(item.name, item.link);
})

function addCardOnPage(name, link) {
  const cardItem = cardElement.querySelector('.element').cloneNode('true');
  cardSection.prepend(cardItem);

  let likeButton = cardItem.querySelector('.element__like');
  let elementImage = cardItem.querySelector('.element__image');
  let elementLikeImage = cardItem.querySelector('.element__like-image');
  let elementName = cardItem.querySelector('.element__name');

  elementImage.src = link;
  elementImage.alt += ' ' + name;
  elementName.textContent = name;
  elementLikeImage.src = 'images/Like.svg';

  cardItem.querySelector('.element__delete').addEventListener('click',function() {
    deleteCard(cardItem);
  });

  elementImage.addEventListener('click', function() {
    const cardBigPicture = bigPicture.querySelector('.popup').cloneNode('true');
    footer.after(cardBigPicture);

    let bigPictureImage = cardBigPicture.querySelector('.popup__image');
    let bigPictureName = cardBigPicture.querySelector('.popup__image-name');
    let bigPicturePopupClose = cardBigPicture.querySelector('#bigPicturePopupClose');

    bigPictureImage.src = link;
    bigPictureImage.alt += ' ' + name;
    bigPictureName.textContent = name;

    openPopup(cardBigPicture);
    
    bigPicturePopupClose.addEventListener('click', function() {
      closePopup(cardBigPicture);
      cardBigPicture.remove();
    });
  });
  
  likeButton.addEventListener('click', function() {
    elementLikeImage.classList.toggle('element__like_active');
  });
}

function deleteCard(card) {
  card.closest('.element').remove();
}

function openPopup(button) {
  button.classList.add('popup_opened');
  if (button.id == 'editProfilePopup') {
    nameInput.value = mainName.textContent;
    extraInput.value = extra.textContent;
  }
}
function closePopup(button) {
  button.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  mainName.textContent = nameInput.value;
  extra.textContent = extraInput.value;

  closePopup(editProfilePopup);
}

function handleFormSubmit2(evt) {
  evt.preventDefault();

  if (addCardName.value != '' && addCardExtra.value != '' && addCardName.value != ' ' && addCardExtra.value != ' ') {
    // Пустые строки не пройдут!!!
    addMesto(addCardName.value, addCardExtra.value);
  }

  addCardName.value = '';
  addCardExtra.value = '';
  

  closePopup(addMestoPopup);
}


editProfileForm.addEventListener('submit', handleFormSubmit);
addMestoForm.addEventListener('submit', handleFormSubmit2);
editProfile.addEventListener('click', function() {
  openPopup(editProfilePopup);
});
editPopupClose.addEventListener('click', function() {
  closePopup(editProfilePopup);
});
addCard.addEventListener('click', function() {
  openPopup(addMestoPopup);
});
addPopupClose.addEventListener('click', function() {
  closePopup(addMestoPopup);
});