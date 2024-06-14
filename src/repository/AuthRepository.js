import Repository from "./Repository";
const SIGNUP = "/Auth/signup/";
const VERIFYOTP = "/Auth/Verifyotp/";
const LOGIN = "/Auth/login/";


export default {
    signup(payload) {
        return Repository.post(`${SIGNUP}`, payload);
    },

   
    verifyotp(payload) {
        // const url = `${VERIFYOTP}?${params.toString()}`;
        return Repository.post(`${VERIFYOTP}`, payload);
    },
    login(payload) {
        return Repository.post(`${LOGIN}`, payload);
    },
}