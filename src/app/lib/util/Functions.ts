import {has} from "wasabi-common";

export default class Functions {
    public static requireModuleToEs6Module(module: any, name?: string){
        if ((module).__esModule) {
            if (has(name)) {
                return module[name];
            }
            else if (module.default) {
                return module.default;
            }
            // Checks one module is exist or not.
            let count = 0;
            let moduleKey = null;
            for (let key in module) {
                if (module.hasOwnProperty(key) && key !== "__esModule") {
                    count++;
                    moduleKey = key;
                }
            }
            if (count === 1) {
                return module[moduleKey];
            }
        }
    }
}