import toast from "react-hot-toast";
import { RepositoryFactory } from "../../repository/RepositoryFactory";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const paypal = RepositoryFactory.get("paypal");


export const paypalprocessing = (payload) => async (dispatch) => {
    await dispatch(loginLoading(true));

    try {
         const { user } = useSelector((state) => state.authUser);
         const token = user?.Bearer; // Extract token from payload
         const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(payload)
        };
        const { data } = await paypal.paypalprocessing(requestOptions);

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
