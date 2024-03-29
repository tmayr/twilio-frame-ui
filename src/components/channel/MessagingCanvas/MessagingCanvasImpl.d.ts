import * as React from "react";
import { DynamicContentStore } from "../../../DynamicComponent";
import { MessagingCanvasChildrenProps } from "./MessagingCanvas";
export declare const displayName = "MessagingCanvas";
export declare const contentStore: DynamicContentStore;
export declare class MessagingCanvasImpl extends React.PureComponent<MessagingCanvasChildrenProps> {
    componentDidMount(): void;
    componentDidUpdate(oldProps: MessagingCanvasChildrenProps): void;
    componentWillUnmount(): void;
    private loadChannel;
    private unloadChannel;
    render(): JSX.Element;
    renderFooter(): JSX.Element;
}
