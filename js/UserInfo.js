export default class UserInfo {
    constructor ({nameSelector, extraSelector}) {
        this._nameSelector = document.querySelector(`${nameSelector}`);
        this._extraSelector = document.querySelector(`${extraSelector}`);
    }
    
    getUserInfo() {
        const userInfo = {
            userName: this._nameSelector,
            userExtra: this._extraSelector,
        }

        return userInfo;
    }

    setUserInfo() {
        this._nameSelector = this.getUserInfo().name;
        this._extraSelector = this.getUserInfo().extra;
    }
}