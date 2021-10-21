import {methods, requestInit, urlBackend} from "./serviceUtils";
import {swalErr, toast} from "../utility";

class AuthService {
    _isAuthenticated = false;

    isAuthenticated() {
        return this._isAuthenticated;
    }

    async createAttempt(user) {

        const response = await fetch(`${urlBackend}user/createUser`, requestInit(methods.POST, user));
        return await response.json().then(value => {
            if (value.message) {
                swalErr(value.message).fire({}).then()
            } else {
                toast.fire({title:"Guess cree"}).then()
            }
        })
    }

    async getAllAttempts() {
        const response = await fetch(`${urlBackend}/user/allTries`, requestInit(methods.GET));
        return await response.json();
    }
}

const AuthService = new AuthService();
export default AuthService;