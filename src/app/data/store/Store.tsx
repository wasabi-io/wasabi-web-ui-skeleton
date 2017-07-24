import {action, computed, observable} from "mobx";
import {User} from "../model/User";

const userArray: User[] = [
    {
        name: "Kamil"
    },
    {
        name: "Hasan"
    }
];
export class Store {
    // Observable array
    public users = observable(userArray);
}

const store = new Store();
export default store;
