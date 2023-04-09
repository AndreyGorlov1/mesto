export default class UserInfo {
    constructor ({nameSelector, extraSelector}) {
        this._nameSelector = document.querySelector(`${nameSelector}`);
        this._extraSelector = document.querySelector(`${extraSelector}`);
    }
    
    getUserInfo() {
        const userInfo = {
            userName: this._nameSelector.textContent,
            userExtra: this._extraSelector.textContent,
        }

        return userInfo;
    }

    setUserInfo(name, extra) {
        this._nameSelector.textContent = name;
        this._extraSelector.textContent = extra;
    }
}