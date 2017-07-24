import axios from 'axios';
const urlJoin = require("url-join");

export interface SetupProps {
    baseUrl: string
}

export default class AxiosAPI {
    private static request;


    public static setup(props: SetupProps) {
        AxiosAPI.request = axios.create({
            baseURL: props.baseUrl,
        });
    }

    public static get(path: string,id?:number) {
        return AxiosAPI.request.get(urlJoin(path,id));
    }
}