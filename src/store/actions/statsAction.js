import { RepositoryFactory } from "../../repository/RepositoryFactory";
import { loginLoading } from "./authAction";
var stats = RepositoryFactory.get("stats"); 

// This action is for User Stats
export const user_stats = (payload, headers) => async (dispatch) => {
    await dispatch(loginLoading(true));

    try {
        const { data } = await stats.user_stats(payload, headers);
        console.log(">>>>Stats Data", data)
        dispatch({ type: "USER_STATS", payload: data });
        if (data?.status === 200) {
            dispatch(loginLoading(false));

        } else {
            dispatch(loginLoading(false));
        }
    } catch (error) {
        dispatch(loginLoading(false));
    }
};