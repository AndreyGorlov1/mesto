export default class Card {
  constructor(title, src, templateSelector) {
    this._title = title;
    this._src = src;
    this._templateSelector = templateSelector;

    this._popup = document.querySelector('.popupBigPicture');
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupImageName = this._popup.querySelector('.popup__image-name');
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(`${this._templateSelector}`)
    .content
    .querySelector('.element')
    .cloneNode('true');

    return cardElement;
  }

  generateCard() {
    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector('.element__image');

    this._card.querySelector('.element__name').textContent = this._title;
    this._cardImage.src = this._src;
    this._card.querySelector('.element__image').alt += ' ' + this._title;

    this._setEventListeners();

    return this._card;
  }

  _setEventListeners() {
    this._buttonLike = this._card.querySelector('.element__like');

    this._cardImage.addEventListener('click', () => {
      this._openBigPicture();
    });

    this._buttonLike.addEventListener('click', () => {
      this._isLiked();
    });

    this._card.querySelector('.element__delete').addEventListener('click', () => {
      this._deleteCard();
    });
  }

  _isLiked() {
    this._buttonLike.classList.toggle('element__like_active');
  }

  _openBigPicture() {
    // this._openPopup(this._popup);

    this._popupImage.src = this._src;
    this._popupImageName.textContent = this._title;
    this._popupImage.alt += ' ' + this._title;
  };

  _deleteCard() {
    this._card.remove();
  };
}