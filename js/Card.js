import PopupWithImage from "./PopupWithImage.js";

export default class Card {
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
    this._cardImage = this._card.querySelector('.element__image');

    this._card.querySelector('.element__name').textContent = this._title;
    this._cardImage.src = this._src;
    this._cardImage.alt += ' ' + this._title;

    this._setEventListeners();

    return this._card;
  }

  _setEventListeners() {
    this._buttonLike = this._card.querySelector('.element__like');

    this._buttonLike.addEventListener('click', () => {
      this._isLiked();
    });

    this._card.querySelector('.element__delete').addEventListener('click', () => {
      this._deleteCard();
    });

    this._cardImage.addEventListener('click', () => {
      const cardBigPicture = new PopupWithImage ('.popup', this._title, this._src);

      cardBigPicture.open();
    })
  }

  _isLiked() {
    this._buttonLike.classList.toggle('element__like_active');
  }

  _deleteCard() {
    this._card.remove();
  };
}