export default class UserInfo {
    constructor ({nameSelector, extraSelector}) {
        this._nameSelector = document.querySelector(`${nameSelector}`).textContent;
        this._extraSelector = document.querySelector(`${extraSelector}`).textContent;
    }
    
    getUserInfo() {
        const userInfo = {
            userName: this._nameSelector,
            userExtra: this._extraSelector,
        }

        return userInfo;
    }

    setUserInfo() {
        console.log(this._nameSelector, this._extraSelector)

        this._nameSelector = this.getUserInfo().name;
        this._extraSelector = this.getUserInfo().extra;
    }
}