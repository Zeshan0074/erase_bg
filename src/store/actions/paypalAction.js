import toast from "react-hot-toast";
import { RepositoryFactory } from "../../repository/RepositoryFactory";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
var paypal = RepositoryFactory.get("paypal");
const history = useHistory
// // This action is for Signup
export const paypalprocessing = (payload,onSuccess) => async (dispatch) => {
    await dispatch(loginLoading(true));

    try {
        const {data} = await paypal.paypalprocessing(payload);
        
        if (data?.status == "APPROVAL_PENDING" ) {
            dispatch(loginLoading(false));
            // onSuccess();
            const redirectLink = data?.links[0]?.href;
            console.log("here",redirectLink);
            if (redirectLink) {
                console.log("What is the this Paypal ",redirectLink)
                window.location.href = redirectLink;  // Redirect to PayPal link
            }
        }
    } catch (error) {
        console.error("Sorry you missing or mismatch some fileds");
        dispatch(loginLoading(false));
        toast.error("Something went wrong")
    }
};

export const loginLoading = (val) => async (dispatch) => {
    dispatch({ type: "loading", payload: val });
};