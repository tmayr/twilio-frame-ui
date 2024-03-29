import * as React from "react";
import { NotificationBarAction } from "./NotificationBarAction";
/**
 * @classdesc This component is used to render the notification bar
 * @class NotificationBar
 * @category Components / Basic
 * @hideconstructor
 * @extends {React.PureComponent}
 */
export declare class NotificationBar extends React.Component {
    /**
     * Notification bar action component
     *
     * @static
     * @type {NotificationBarAction}
     * @readonly
     */
    static readonly Action: typeof NotificationBarAction;
    private onListenerHandler;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
