import * as React from "react";
import Component from "../../lib/component/Component";
import ObserverGrid from "../../lib/component/grid/ObserverGrid";
import {  Button, Glyphicon, Panel } from "react-bootstrap"
import store, {Store} from "../../data/store/Store";
import "./style.css";

import {observer} from "mobx-react";

export interface HomeProps {
    store: Store,
    navigate?: (key: string) => any
}

@observer
export default class Home extends Component<HomeProps> {

    constructor(props: HomeProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Home Page
                        <Button onClick={this.logout} className="pull-right">
                            Logout <Glyphicon glyph="log-out" />
                        </Button>
                    </h3>
                </div>
                <div className="panel-body">
                    <ObserverGrid
                        header={{
                            name: "Name"
                        }}
                        items={store.users}
                        onRowClick={this.onRowClick}
                    />
                </div>
                <div className="panel-footer">
                    Footer
                </div>
            </div>
        );
    }


    private onRowClick = (item: any, index: number) => {
        console.log(item.name,'is clicked');
    }

    private logout = () => {
        this.props.navigate("login");
    }
}