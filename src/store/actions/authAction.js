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
            console.log("DAta form the auth action: ",data)

            // dispatch({ type: "LOGIN", payload: data.detail });
            onSuccess();
        } else {
            // toast.error(data.data?.detail);
            toast.error("Tha API is not hit successfully")
            dispatch(loginLoading(false));
        }
    } catch (error) {
        console.error("Sorry you missing or mismatch some fileds");
        dispatch(loginLoading(false));
    }
};


// THis actioin is for VerifyOTP
export const verifyotp = (payload, onSuccess) => async (dispatch) => {
    await dispatch(loginLoading(true));
    try {
        const { data } = await auth.verifyotp(payload);
        if (data.status === 200) {
            onSuccess();
            dispatch(loginLoading(false));

            // toast(data.detail);
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
        if (data.status === 200 ) {
            dispatch({ type: "LOGIN", payload: data.details });
            dispatch(loginLoading(false));
            onSuccess();
            toast("Login Successfully.");
        } else {
            toast(data.details);
            dispatch(loginLoading(false));
        }
    } catch (error) {
        console.error("Sorry you missing or mismatch some fileds");
        dispatch(loginLoading(false));
    }
};


export const logout = (onSuccess) => async (dispatch) => {
    try {
        localStorage.clear();
        dispatch({ type: "LOGOUT" });
        // onSuccess();
        toast("Logout Successfully.");
    } catch (error) {
        toast(error.message);
    }
};

export const loginLoading = (val) => async (dispatch) => {
    dispatch({ type: "loading", payload: val });
};