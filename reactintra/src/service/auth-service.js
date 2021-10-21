import Doctor from "../model/Doctor"
import {methods, requestInit, urlBackend} from "./serviceUtils";
import {swalErr, toast} from "../utility";

class AuthService {
    _isAuthenticated = false;

    isAuthenticated() {
        return this._isAuthenticated;
    }

    async signupDoctor(doctor) {

        const response = await fetch(`${urlBackend}doctor/register`, requestInit(methods.POST, doctor));
        return await response.json().then(value => {
            if (value.message) {
                swalErr(value.message).fire({}).then()
            } else {
                toast.fire({title:"Compte cree"}).then()
            }
        })
    }
    async signIn(email, password) {
        const response = await fetch(`${urlBackend}/user/login/${email}/${password}`, requestInit(methods.GET));
        return await response.json().then(
            (value) => {
                if (value.message) {
                    swalErr(value.message).fire({}).then()
                    return
                }
                this._isAuthenticated = true
                toast.fire({title:"connection reussi!"}).then()
                console.log(value)
            },
            err => {
                swalErr(err).fire({}).then()
            }
        )
    }

    async getAllPatients() {
        const response = await fetch(`${urlBackend}/doctor/patients`, requestInit(methods.GET));
        return await response.json();
    }
}

const authService = new AuthService();
export default authService;