
const initialState = {
    paypal: null,
};

const paypalReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "GET_PAYPAL":
            return {
                ...state,
                paypal: payload,
                
            }
        // case UPDATE_USER_STATUS:
        //     return  {...state,...state.user,SubscriptionStatus:}
        default:
            return state;
    }
};

export default paypalReducer;
