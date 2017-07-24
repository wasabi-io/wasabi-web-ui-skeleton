import * as React from "react";
import Functions from "../../util/Functions";
import Component from "../Component";

export interface Referrer {
    reference: any,
    props?: any,
    children?: any,
    [key: string]: any
}

export interface Referrers {
    [key: string]: Referrer
}

export interface NavigationProps {
    selected: string | Referrer,
    referrers: Referrers,
    loader: (referred: Referrer) => Promise<React.ComponentClass>
}


export default class Navigation extends React.Component<NavigationProps, any> {

    private selectedReferrer: Referrer;
    public constructor(props: NavigationProps) {
        super(props);
        this.navigate = this.navigate.bind(this);
        this.selectedReferrer = Navigation.getSelectedReferrer(this.props);
        this.state = {};
    }
    public render(): JSX.Element {
        let Component: any = this.state.component;
        if (!Component) {
            return (
                <div></div>
            )
        }
        return (
            <Component {...this.selectedReferrer.props} {...this.state.props} navigate={this.navigate}>
                { this.selectedReferrer.children }
            </Component>
        );
    }

    public navigate(key: string, props: any) {
        this.selectedReferrer = this.props.referrers[key];
        this.loadReferrer(props);
    }

    public loadReferrer(props?: any) {
        this.props.loader(this.selectedReferrer).then(
            (module: any) => {
                this.setState({
                    changed: true,
                    component: Functions.requireModuleToEs6Module(module),
                    props
                });
                this.state.changed = true;
            }
        )
    }

    public componentDidMount() {
        if (!this.state.changed) {
            this.loadReferrer();
        }
    }

    public static getSelectedReferrer(props: NavigationProps) {
        return (typeof props.selected === "string") ?
            props.referrers[props.selected] :
            props.selected;
    }
}

