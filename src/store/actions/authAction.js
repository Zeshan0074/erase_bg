import toast from "react-hot-toast";
import { RepositoryFactory } from "../../repository/RepositoryFactory";
var auth = RepositoryFactory.get("auth");

// This action is for Signup
export const signup = (payload, onSuccess) => async (dispatch) => {
    await dispatch(loginLoading(true));

    try {
        const {data} = await auth.signup(payload);
        console.log("Data is Hwere",data)
        if (data?.status === 200) {
            dispatch(loginLoading(false));
            onSuccess();
            toast.success(data?.details)
            
        } else {
            // toast.error(data.data?.detail);
            console.log("first")
            toast.warning(data?.message)
            console.log("Hello Guys")
            dispatch(loginLoading(false));
        }
    } catch (error) {
        toast.error(error?.response?.data?.message);
        dispatch(loginLoading(false));
        // toast.error(error?.response?.data?.details);
    }
};

// export const signup = (payload, onSuccess) => async (dispatch) => {
//     dispatch(loginLoading(true));

//     try {
//         const { data } = await auth.signup(payload);

//         if (data.status === 200) {
//             dispatch(loginLoading(false));
//             onSuccess();
//             toast.success(data?.details);
//         } else {
//             dispatch(loginLoading(false));
//             toast.error(data?.message);
//         }
//     } catch (error) {
//         dispatch(loginLoading(false));
        
//         // Check if the error response has a message from the backend
//         if (data.message) {
//             toast.error(data.message);
//         } else {
//             // toast.error("Something went wrong. Please try again.");
//         }
//     }
// };


// THis actiin is for VerifyOTP
export const verifyotp = (payload, onSuccess) => async (dispatch) => {
    await dispatch(loginLoading(true));
    try {
        const { data} = await auth.verifyotp(payload);
        if (data.status === 200) {
            dispatch(loginLoading(false));
            toast.success(data?.details);
            onSuccess();
            toast.success(data?.details);


            // toast(data.detail);
        } 
    } catch (error) {
        console.log("Here",error?.response?.data?.details)
        toast.error(error?.response?.data?.details);
        dispatch(loginLoading(false));
        // toast.error("OTP cannot verify")
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
        }
    } catch (error) {
        toast.error(error?.response?.data?.message);
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
        } 
    } catch (error) {
        console.log("Error Here",error?.response?.data?.message)
        toast.error(error?.response?.data?.message);
        dispatch(loginLoading(false));
    }
};

// This action is for Login

export const login = (payload, onSuccess) => async (dispatch) => {
    await dispatch(loginLoading(true));
    try {
        const {data} = await auth.login(payload);
        if (data?.status === 200 ) { 
            dispatch({ type: "LOGIN", payload: data.details });
            dispatch(loginLoading(false));
            toast.success(data?.message) 
              
            onSuccess();
            toast.success(data?.details);            
        } 
    } catch (error) {
        dispatch(loginLoading(false));
        toast.error(error?.response?.data?.message);
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

        } 
    } catch (error) {
        toast.error(error?.response?.data?.message);
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
        toast.error(error?.response?.data?.message);
    }
};

export const loginLoading = (val) => async (dispatch) => {
    dispatch({ type: "loading", payload: val });
};