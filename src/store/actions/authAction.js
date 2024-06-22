import toast from "react-hot-toast";
import { RepositoryFactory } from "../../repository/RepositoryFactory";
var auth = RepositoryFactory.get("auth");

// // This action is for Signup
export const signup = (payload, onSuccess) => async (dispatch) => {
    await dispatch(loginLoading(true));

    try {
        const data = await auth.signup(payload);

        if (data.status === 200 ) {
            dispatch(loginLoading(false));
            onSuccess();
            // toast.success(data.status?.details?.details)
            toast.success("We have sent you an email for OTP")
            // console.log("Data details is here:", data.details)
            // dispatch({ type: "LOGIN", payload: data.detail });
        } else {
            // toast.error(data.data?.detail);
            dispatch(loginLoading(false));
            console.log("ARe you in else block")
            // onError();
            toast.error(data.status?.message?.message)
            // console.log("Error while signup: ", data.status?.message?.message)
            // toast.error("Something went wrong")
        }
    } catch (error) {
        console.error("Sorry you missing or mismatch some fileds");
        dispatch(loginLoading(false));
        toast.error("Something went wrong")
    }
};


// THis actiin is for VerifyOTP
export const verifyotp = (payload, onSuccess) => async (dispatch) => {
    await dispatch(loginLoading(true));
    try {
        const { data } = await auth.verifyotp(payload);
        if (data.status === 200) {
            dispatch(loginLoading(false));
            toast.success("OTP verified Successfully.");
            onSuccess();


            // toast(data.detail);
        } else {
            // toast(data.detail);
            dispatch(loginLoading(false));
            toast.error("OTP cannot verified.");

        }
    } catch (error) {
        console.error("Sorry!");
        dispatch(loginLoading(false));
    }
};
// THis actioin is for VerifyOTP
export const verifyforgetotp = (payload, onSuccess) => async (dispatch) => {
    await dispatch(loginLoading(true));
    try {
        const {data} = await auth.verifyforgetotp(payload);
        console.log("Data of Forget",data)
        if (data.status === 200) {
            dispatch(loginLoading(false));
            // toast.status()
            onSuccess();
            
            toast.success(data?.details);
        } else {
            toast.error(data?.details);
            dispatch(loginLoading(false));
        }
    } catch (error) {
        console.error("Sorry!");
        dispatch(loginLoading(false));
    }
};
// THis actioin is for VerifyOTP
export const forgetPassword = (payload, onSuccess) => async (dispatch) => {
    await dispatch(loginLoading(true));
    try {
        const {data} = await auth.forgetPassword(payload);
        if (data?.status === 200) {
            dispatch(loginLoading(false));
            toast.success("OTP sent to your registered email");
            onSuccess();
        } else {
            // toast(data.detail);
            dispatch(loginLoading(false));
        }
    } catch (error) {
        console.error("Sorry!");
        dispatch(loginLoading(false));
    }
};

// This action is for Login

export const login = (payload, onSuccess) => async (dispatch) => {
    await dispatch(loginLoading(true));
    try {
        const { data } = await auth.login(payload);
        if (data?.status === 200 ) {
            dispatch({ type: "LOGIN", payload: data.details });
            dispatch(loginLoading(false));
            onSuccess();
            toast.success("User Login Successfully.");            
        } else {
            toast.error(data.details);
            dispatch(loginLoading(false));
        }
    } catch (error) {
        console.error("Sorry you missing or mismatch some fileds");
        dispatch(loginLoading(false));
        toast.error("Invalid Credentials")
    }
};


// THis actioin is for ForgetEmail
export const forgetemail = (payload, onSuccess) => async (dispatch) => {
    await dispatch(loginLoading(true));
    try {
        const {data} = await auth.forgetemail(payload);
        if (data?.status === 200) {
            toast.success(data?.details);
            onSuccess();
            dispatch(loginLoading(false));

        } else {
            toast.error(data.details);
            dispatch(loginLoading(false));
        }
    } catch (error) {
        console.error("Sorry!");
        dispatch(loginLoading(false));
    }
}
export const logout = (onSuccess) => async (dispatch) => {
    try {
        localStorage.clear();
        dispatch({ type: "LOGOUT" });
        // onSuccess();
        toast.success("Logout Successfully.");
    } catch (error) {
        toast(error.message);
    }
};

export const loginLoading = (val) => async (dispatch) => {
    dispatch({ type: "loading", payload: val });
};