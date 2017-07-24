import {Referrer, Referrers} from "./lib/component/navigation/Navigation";

let referrers: Referrers = {
    login: {
        reference: "login/Login"
    },
    home: {
        reference: "home/Home"
    }
};

let loader = (referrer: Referrer) => {
    return System.import("./modules/" + referrer.reference);
};

export {loader};

export default referrers;
