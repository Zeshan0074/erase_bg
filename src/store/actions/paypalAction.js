import toast from "react-hot-toast";
import { RepositoryFactory } from "../../repository/RepositoryFactory";
var paypal = RepositoryFactory.get("paypal");

// // This action is for Signup
export const paypalprocessing = (payload, onSuccess) => async (dispatch) => {
    await dispatch(loginLoading(true));

    try {
        const data = await paypal.paypalprocessing(payload);
        console.log("What is the this Paypal ",data)
        // if (data.status === 200 ) {
        //     dispatch(loginLoading(false));
        //     onSuccess();
        //     // toast.success(data.status?.details?.details)
        //     toast.success("We have sent you an email for OTP")
        //     // console.log("Data details is here:", data.details)
        //     // dispatch({ type: "LOGIN", payload: data.detail });
        // } else {
        //     // toast.error(data.data?.detail);
        //     dispatch(loginLoading(false));
        //     console.log("ARe you in else block")
        //     // onError();
        //     toast.error(data.status?.message?.message)
        //     // console.log("Error while signup: ", data.status?.message?.message)
        //     // toast.error("Something went wrong")
        // }
    } catch (error) {
        console.error("Sorry you missing or mismatch some fileds");
        dispatch(loginLoading(false));
        toast.error("Something went wrong")
    }
};

export const loginLoading = (val) => async (dispatch) => {
    dispatch({ type: "loading", payload: val });
};