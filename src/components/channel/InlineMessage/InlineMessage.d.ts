import * as React from "react";
import { DynamicContentStore } from "../../../DynamicComponent";
import { MessageState } from "../../../state/ChannelState";
import { MessageStyle } from "../MessagingCanvas/MessagingCanvas";
/**
 * Props to define Inline messages
 * @typedef InlineMessage.InlineMessageProps
 * @property {MessageState} message - An object which represents a single message.
 * @property {MessagingCanvas.MessageStyle} [messageStyle] - Identifies how the message should be displayed.
 */
export interface InlineMessageProps {
    message: MessageState;
    messageStyle?: MessageStyle;
}
/**
 * This is a container used to inline message
 * @category Components / Programmable
 * @hideconstructor
 * @param {InlineMessage.InlineMessageProps} props - props
 * @extends {React.PureComponent}
 */
export declare class InlineMessage extends React.PureComponent<InlineMessageProps> {
    private static readonly friendlyName;
    static readonly displayName = "InlineMessage";
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<InlineMessage.InlineMessageProps>}
     * @readonly
     */
    static readonly Content: DynamicContentStore;
    render(): JSX.Element;
}
