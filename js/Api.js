export class Api {
    constructor(options) {
        this._options = options;
    }

    _getUserInfo() {
        fetch('https://nomoreparties.co/v1/cohortId/users/me', {
            headers: {
                authorization: 'feb60e9f-2790-45de-a47f-ebe88d7a3e96'
            }
        })
            .then((res) => {
                if(res.ok) {
                    res.json()
                }
            })
            .then(data => console.log(data))
            .catch(console.log('Что-то пошло не так! Уже разбираемся...'))
    }
}