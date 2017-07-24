import * as React from "react";

export interface Map {
    [key: string]: any
}
/**
 * Base component which wraps render function in a try catch structure
 * Any child components who extends from this component will get protection when
 * Exception thrown, so protect component life cycle.
 */

abstract class Component<P extends Readonly<P>> extends React.Component<P, {}> {
    /**
     *
     */
    public refs: {
        [string: string]: any
    };

    /**
     *  Creates an instance of BaseComponent.
     * @param props
     * @param context
     * @param defaults
     */
    public constructor(props: any) {
        super(props);
    }
}

export default Component;