import * as React from "react";
import * as PropTypes from "prop-types";
import { Table } from "react-bootstrap";
import Component, { Map } from "../Component";
import Objects from "wasabi-common/lib/types/Objects";
import Arrays from "wasabi-common/lib/types/Arrays";
import {observer} from "mobx-react";
import { IObservableArray } from "mobx/lib/types/observablearray";
import {IObservableValue} from "mobx";

export interface ObserverGridProps {
    header: any,
    items: IObservableArray<any>,
    onRowClick: (item: any, index: number) => any
}

@observer
export default class ObserverGrid extends Component<ObserverGridProps> {
    public static propTypes = {
        ...Table.propTypes,
        header: PropTypes.object,
        items: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object),PropTypes.object])
    };
    public static defaultProps = {
        striped: true,
        bordered: true,
        condensed: true,
        hover: true
    };
    public render(): JSX.Element {
        let {header, items,onRowClick, ...props} = this.props;
        return (
            <Table {...props}>
                <thead>
                    <tr>
                        { Objects.map(header, (item) => <th key={`th-${item}`}>{item}</th>) }
                    </tr>
                </thead>
                <tbody>
                    { items.map((item, index) => this.renderItem(header, item, index,this.props.onRowClick)) }
                </tbody>
            </Table>
        )
    }

    public renderItem(header: Map, item: IObservableValue<any>, index: number,onRowClick:Function): JSX.Element {
        let itemResult = Objects.map(header, (headerItem, key) => {
            return (
                <td key={`td-${index}`}>{item[key]}</td>
            )
        });
        return (
            <tr key={`tr-${index}`} onClick={onRowClick.bind(undefined, item)}>
                { itemResult}
            </tr>
        )
    }
}