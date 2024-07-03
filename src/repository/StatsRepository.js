import Repository from "./Repository";

const USER_STATS = "/RemoveBG/User_stats/";

export default {
    user_stats(payload, headers) {
        return Repository.post(`${USER_STATS}`, payload, {headers});
    },
}