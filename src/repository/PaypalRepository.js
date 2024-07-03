import Repository from "./Repository";
const PROCESSING = "/RemoveBG/paypalprocessing/";
const CANCEL = "/RemoveBG/cancelsubscriptions/";
const GET = "/RemoveBG/getdetails/";
const UPDATE = "/RemoveBG/upgradesubscriptions/";
export default {
    paypalprocessing( payload ,headers) {
        
        return Repository.post(`${PROCESSING}`, payload , {headers});
    },
    paypalcancel( payload ,headers) {
        
        return Repository.post(`${CANCEL}`, payload , {headers});
    },
    getpaypal(payload,headers) {
        
        return Repository.post(`${GET}`,payload, {headers});
    },
    paypalupdate(payload,headers) {
        
        return Repository.post(`${UPDATE}`,payload);
    }
}