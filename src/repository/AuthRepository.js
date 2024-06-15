import Repository from "./Repository";
const SIGNUP = "/Auth/signup/";
const VERIFYOTP = "/Auth/Verifyotp/";
const VERIFYFORGETOTP = "/Auth/VerifyForgetOtp/";
const FORGETEMAIL = "/Auth/ForgetPassword/";
const FORGETPASSWORD = "/Auth/update_Password/";
const LOGIN = "/Auth/login/";


export default {
    signup(payload) {
        return Repository.post(`${SIGNUP}`, payload);
    },

    verifyotp(payload) {
    
        return Repository.post(`${VERIFYOTP}`, payload);
    },

    login(payload) {
        return Repository.post(`${LOGIN}`, payload);
    },

    forgetemail(payload) {
        
        return Repository.post(`${FORGETEMAIL}`, payload);
    },

    verifyforgetotp(payload) {
     
        return Repository.post(`${VERIFYFORGETOTP}`, payload);
    },
    
    forgetPassword(payload) {
        
        return Repository.post(`${FORGETPASSWORD}`, payload);
    }
   
}