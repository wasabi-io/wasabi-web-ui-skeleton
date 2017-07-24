import * as React from "react";
import Component from "./lib/component/Component";
import Navigation from "./lib/component/navigation/Navigation";
import { Grid, Row, Col } from "react-bootstrap";
import referrers, {loader} from "./referrers";

require("../../node_modules/bootstrap/dist/css/bootstrap.css");

class Renderer extends Component<any> {
    public render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <Navigation
                            loader={loader}
                            selected="login"
                            referrers={referrers}
                        />
                    </Col>
                </Row>
            </Grid>
        )
    }

    private onCloseButton = () => {

    };
}

module.exports = Renderer;

