import * as React from "react";
import {render} from "react-dom";
import AxiosAPI from "./lib/util/API";

export interface ApplicationProps {
    container: any,
    renderer: Promise<React.ComponentClass<any>>,
    api: string
}

export default class Application {
    private props: ApplicationProps;

    private constructor(props: ApplicationProps) {
        this.props = props;
        AxiosAPI.setup({baseUrl: props.api});
        this.render();
    }

    public static build(props: ApplicationProps): Application {
        return new Application(props);
    }

    public render() {
        this.props.renderer.then((Renderer: React.ComponentClass) => {
            render(
                <Renderer/>,
                this.props.container
            )
        })
    }
}
