
const initialState = {
    user: null,
    uid: null,
    token: null,
};

const authUser = (state = initialState, { type, payload }) => {
    switch (type) {
        case "LOGIN":
            return {
                ...state,
                user: payload,
                token: payload.AccessToken,
                uid: payload.UserId,
            };
        case "LOGOUT":
            // localStorage.removeItem("auth");
            return {
                ...state,
                user: null,
                token: null,
                uid: null,
            };
        // case UPDATE_USER_STATUS:
        //     return  {...state,...state.user,SubscriptionStatus:}
        default:
            return state;
    }
};

export default authUser;
