import Repository from "./Repository";
const PROCESSING = "/RemoveBG/paypalprocessing/";

export default {
    paypalprocessing(payload) {
        return Repository.post(`${PROCESSING}`, payload);
    }
   
}