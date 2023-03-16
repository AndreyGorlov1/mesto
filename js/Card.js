import { closeOnKey } from '../js/script.js'

export class Card {
  constructor(title, src, templateSelector) {
    this._title = title;
    this._src = src;
    this._templateSelector = templateSelector;
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

    this._card.querySelector('.element__name').textContent = this._title;
    this._card.querySelector('.element__image').src = this._src;
    this._card.querySelector('.element__image').alt += ' ' + this._title;

    this._setEventListeners();

    return this._card;
  }

  _setEventListeners() {
    this._buttonLike = this._card.querySelector('.element__like');

    this._card.querySelector('.element__image').addEventListener('click', () => {
      this._openBigPicture();
    });

    this._buttonLike.addEventListener('click', () => {
      this._isLiked();
    });

    this._card.querySelector('.element__delete').addEventListener('click', () => {
      this._deleteCard();
    });
  }

  _closeOnKey(evt) {
    if(evt.code === 'Escape') {
      console.log(evt);
      document.querySelector('popup_opened');
      closeOnKey();
    }
  }

  _isLiked() {
    this._buttonLike.classList.toggle('element__like_active');
  }

  _openBigPicture() {
    this._bigPicture = document.querySelector('.popup');
    this._bigPicture.classList.add('popup_opened');

    this._bigPicture.querySelector('.popup__image').src = this._src;

    this._bigPicture.querySelector('.popup__image-name').textContent = this._title;

    document.addEventListener('keydown', this._closeOnKey);
  };

  _deleteCard() {
    this._card.remove();
  };
}