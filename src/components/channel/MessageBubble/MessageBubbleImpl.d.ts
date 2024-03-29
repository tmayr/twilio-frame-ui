import * as React from "react";
import { DynamicContentStore } from "../../../DynamicContentStore";
import { MemberState, MessageState } from "../../../state/ChannelState";
import { MessageStyle } from "../MessagingCanvas/MessagingCanvas";
/**
 * Properties of the Message bubble
 * @typedef MessageBubble.MessageBubbleProps
 * @property {MessageState} message - An object which represents a single message.
 * @property {MemberState} [member] - An object defining the properties of a remote client.
 * @property {MessagingCanvas.MessageStyle} [messageStyle] - Identifies how the message should be displayed.
 * @property {boolean} [useFriendlyName=true] - An override to use the friendly name passed in member.
 * @property {string} [authorName] - A custom author name to be used.
 * @property {boolean} [hasMarkdownSupport] - If set to true, the body will be parsed as markdown
 */
export interface MessageBubbleProps {
    message: MessageState;
    member?: MemberState | {
        friendlyName: string;
    };
    messageStyle?: MessageStyle;
    useFriendlyName?: boolean;
    authorName?: string;
    hasMarkdownSupport?: boolean;
}
export declare const displayName = "MessageBubble";
export declare const contentStore: DynamicContentStore;
export declare class MessageBubbleImpl extends React.PureComponent<MessageBubbleProps> {
    render(): JSX.Element;
    static defaultProps: Partial<MessageBubbleProps>;
}
