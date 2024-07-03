
const initialState = {
    stats: null,
};
const statsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'USER_STATS':
            return {
                ...state,
                stats: payload,
            };
        default:
            return state;
    }
};

export default statsReducer;