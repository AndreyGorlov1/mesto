export default class Card {
  constructor({title, src, openBigPicture}, templateSelector) {
    this._title = title;
    this._src = src;
    this._openBigPicture = openBigPicture;
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
      this._openBigPicture(this._title, this._src);
    })
  }

  _isLiked() {
    this._buttonLike.classList.toggle('element__like_active');
  }

  _deleteCard() {
    this._card.remove();
  };
}