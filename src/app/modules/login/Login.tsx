import * as React from "react";
import Component from "../../lib/component/Component";
import { Panel } from "react-bootstrap";
import {observer} from "mobx-react";
import "./style.css";
import store from "../../data/store/Store";

export interface LoginProps {
    navigate: (key: string, props: any) => any
}

@observer
export default class Login extends Component<LoginProps> {
    public render(): JSX.Element {
        return (
            <Panel header="Login">
                <div style={{width: 300}}>
                    <div className="form-group">
                        <input id="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div className="form-group switch-holder">
                        <input id="password" type="password" className="form-control " placeholder="Password"/>
                    </div>
                    <button onClick={this.onLoginButton} className="btn login-submit-btn">GİRİŞ</button>
                </div>
            </Panel>
        )
    }

    public onLoginButton = () => {
        this.props.navigate("home", {
            store: store
        });
    }
}