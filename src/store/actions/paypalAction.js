import toast from "react-hot-toast";
import { RepositoryFactory } from "../../repository/RepositoryFactory";

const paypal = RepositoryFactory.get("paypal");

                        // CREATESUBSCRIPTION
export const paypalprocessing = ( payload,headers) => async (dispatch) => {
    await dispatch(loginLoading(true));

    try {
      
        const { data } = await paypal.paypalprocessing( payload, headers);

        if (data?.status === "APPROVAL_PENDING") {
            dispatch(loginLoading(false));
            const redirectLink = data?.links[0]?.href;
            console.log("Redirecting to PayPal:", redirectLink);
            if (redirectLink) {
                window.location.href = redirectLink;  // Redirect to PayPal link
            }
        }
    } catch (error) {
        console.error("Error occurred during PayPal processing:", error);
        dispatch(loginLoading(false));
        toast.error("Something went wrong");
    }
}


                        // CANCEL SUBSCRIPTION
export const paypalcancel = ( payload,headers) => async (dispatch) => {
    await dispatch(loginLoading(true));

    try {
      
        const { data } = await paypal.paypalcancel( payload, headers);
        // console.log("Cancel Data>>>>",data)
    } catch (error) {
        console.error("Error occurred during PayPal processing:", error);
        dispatch(loginLoading(false));
        toast.error("Something went wrong");
    }
};


                        // GET SUBSCRIPTION
export const getpaypal = (headers ,payload) => async (dispatch) => {
    await dispatch(loginLoading(true));

    try {
      
        const { data } = await paypal.getpaypal(payload,headers);
        dispatch({ type: "GET_PAYPAL", payload: data });
    } catch (error) {
        console.error("Error occurred during PayPal processing:", error);
        dispatch(loginLoading(false));
        toast.error("Something went wrong");
    }
};

                        // UPDATE SUBSCRIPTION
export const paypalupdate = (payload) => async (dispatch) => {
    await dispatch(loginLoading(true));

    try {
      
        const { data } = await paypal.paypalupdate(payload);
        
        if (data?.status === "APPROVAL_PENDING") {
            dispatch(loginLoading(false));
            const redirectLink = data?.links[0]?.href;
            console.log("Redirecting to PayPal:", redirectLink);
            if (redirectLink) {
                window.location.href = redirectLink;  // Redirect to PayPal link
            }
        }
        
    } catch (error) {
        console.error("Error occurred during PayPal processing:", error);
        dispatch(loginLoading(false));
        toast.error("Something went wrong");
    }
};
export const loginLoading = (val) => async (dispatch) => {
    dispatch({ type: "loading", payload: val });
};
