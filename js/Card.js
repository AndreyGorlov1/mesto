export class Card {
  constructor(title, src) {
    this._title = title;
    this._src = src;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector('#card')
    .content
    .querySelector('.element')
    .cloneNode('true');

    return cardElement;
  }

  generateCard() {
    this._card = this._getTemplate();

    this._card.querySelector('.element__name').textContent = this._title;
    this._card.querySelector('.element__image').src = this._src;

    this._setEventListeners();

    return this._card;
  }

  _setEventListeners() {
    this._card.querySelector('.element__image').addEventListener('click', () => {
      this._openBigPicture();
    });

    this._card.querySelector('.element__like').addEventListener('click', () => {
      this._isLiked();
    });

    this._card.querySelector('.element__delete').addEventListener('click', () => {
      this._deleteCard();
    });

    this._card.querySelector('.popup__close').addEventListener('click', () => {
      this._closeBigPicture();
    });

    this._card.addEventListener('keydown', (evt) => {
      if(evt.key === 'Escape') {
        this._closeBigPicture();
      }
    });

    this._card.querySelector('.popup').addEventListener('click', () => {
      if(popup_opened) {
        this._closeBigPicture();
      }
    });
  }

  _isLiked() {
    this._card.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _openBigPicture() {
    this._card.querySelector('.popup').classList.add('popup_opened');

    this._card.querySelector('.popup__image').src = this._src;
    this._card.querySelector('.popup__image-name').textContent = this._title;
  };

  _closeBigPicture() {
    this._card.querySelector('.popup').classList.remove('popup_opened');

    this._card.querySelector('.popup__image').src = '';
    this._card.querySelector('.popup__image-name').textContent = '';
  }

  _deleteCard() {
    this._card.remove();
  };
}