import * as React from "react";
import { NotificationBarActionProps } from "./NotificationBarAction.definitions";
/**
 * @classdesc This component is used to render action is notification bar
 * @class NotificationBarAction
 * @category Components / Basic
 * @param {NotificationBarAction.NotificationBarActionProps} props - Properties to be passed to configure this component.
 * @hideconstructor
 * @extends {React.PureComponent}
 */
export declare class NotificationBarAction extends React.PureComponent<NotificationBarActionProps> {
    static defaultProps: {
        notification: {};
    };
    private handleOnClick;
    render(): JSX.Element;
    renderIcon(): JSX.Element;
    renderLabel(): string | number | JSX.Element;
}
export declare const ActionItem: import("create-emotion-styled/types/react").StyledOtherComponent<object, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../theme").Theme>;
