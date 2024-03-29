import * as React from "react";
import { Strings, CompiledTemplate } from "../../..";
import { CSSProps } from "../../CSSProps";
import { MessageList } from "../MessageList";
import { MessageInput } from "../MessageInput";
import * as ChatChannelState from "../../../state/ChannelState";
/**
 * @typedef {"Rounded" | "Squared" | "Minimal"} MessageStyle - Represents the style of a message.
 * @memberof MessagingCanvas
 */
export declare type MessageStyle = "Rounded" | "Squared" | "Minimal";
/**
 * @typedef MessagingCanvas.MessagingCanvasThemeProps
 * @property {CSSProps} Container container
 */
export interface MessagingCanvasThemeProps {
    Container: CSSProps;
}
/**
 * Chat member display configuration
 * @typedef {Object} MemberDisplayOptions
 * @property {String} [yourDefaultName] Default string shown for local user's name
 * @property {String} [theirDefaultName] Default string shown for remote user's name
 * @property {Boolean} [yourFriendlyNameOverride] Should the user's friendly name be displayed as name for this user's messages?
 * @property {Boolean} [theirFriendlyNameOverride] Should the user's friendly name be displayed as name for this other user's messages?
 * @memberof MessagingCanvas
 */
export interface MemberDisplayOptions {
    yourDefaultName?: string;
    theirDefaultName?: string;
    yourFriendlyNameOverride?: boolean;
    theirFriendlyNameOverride?: boolean;
}
/**
 * Callback to return URL to the avatar image for message sender/user.
 * @callback AvatarCallback
 * @return {String} URL to the avatar image
 * @param {String} identity Identity of a user
 * @memberof MessagingCanvas
 */
export declare type AvatarCallback = (identity: string) => string;
/**
 * An object properties representing the PredefinedMessage
 * @typedef {Object} MessagingCanvas.PredefinedMessage
 * @property {string} body - content of the message
 * @property {string} authorName - name of the author
 * @property {boolean} isFromMe - whether it appears as message from the current user or not.
 */
export interface PredefinedMessage {
    body: string | keyof Strings;
    authorName: string | keyof Strings;
    isFromMe: boolean;
}
/**
 * An object properties representing the MessagingCanvas
 * @typedef {Object} MessagingCanvas.MessagingCanvasProps
 * @property {string} sid - A unique identifier of the message.
 * @property {string} [inputDisabledReason] - A reason on why the input element is disabled.
 * @property {MessagingCanvas.AvatarCallback} [avatarCallback] - A handler to request for avatar.
 * @property {MessagingCanvas.MemberDisplayOptions} [memberDisplayOptions] - Chat member display configuration.
 * @property {MessagingCanvas.MessageStyle} [messageStyle] - Identifies how the message should be displayed.
 * @property {boolean} [showTypingIndicator] - Should the typing indicator be shown.
 * @property {boolean} [showReadStatus] - Should the read status be shown.
 * @property {boolean} [showTrayOnInactive] - Should MessageTray to be shown when channel is inactive.
 * @property {boolean} [showWelcomeMessage] - Should a welcome message to be shown.
 * @property {Template.CompiledTemplate} [welcomeMessageText] - string representing the welcome message.
 * @property {number} [charLimit] - Identifies character limit for a single message.
 * @property {MessagingCanvas.PredefinedMessage} [predefinedMessage] - Defines the predefined, introductory message to be shown to a customer.
 * @property {MessagingCanvas.autoInitChannel} [autoInitChannel] - Should the component automatically initialize chat channel if not initialized already.
 * @property {boolean} [hasMarkdownSupport] - If set to true, messages bodies will be parsed as markdown
 */
export interface MessagingCanvasProps {
    sid: string;
    inputDisabledReason?: string;
    avatarCallback?: AvatarCallback;
    memberDisplayOptions?: MemberDisplayOptions;
    messageStyle?: MessageStyle;
    showTypingIndicator?: boolean;
    showReadStatus?: boolean;
    showTrayOnInactive?: boolean;
    showWelcomeMessage?: boolean;
    charLimit?: number;
    welcomeMessageText?: CompiledTemplate;
    predefinedMessage?: PredefinedMessage;
    autoInitChannel?: boolean;
    hasMarkdownSupport?: boolean;
}
/**
 * @typedef {Object} MessagingCanvas.MessagingCanvasChildrenProps
 * @extends MessagingCanvas.MessagingCanvasProps
 * @property {ChatChannelState.ChannelState} [channel]
 * @property {number} [charLimit]
 */
export interface MessagingCanvasChildrenProps extends MessagingCanvasProps {
    channel?: ChatChannelState.ChannelState;
    charLimit?: number;
}
/**
 * A container which holds MessageInput and MessageList
 * Can be themed with [theme.Chat.MessagingCanvas]{@link MessagingCanvas.MessagingCanvasThemeProps}
 * @category Components / Programmable
 * @hideconstructor
 * @param {MessagingCanvas.MessagingCanvasProps} props
 * @extends {React.PureComponent}
 */
export declare class MessagingCanvas extends React.PureComponent<MessagingCanvasProps> {
    static readonly displayName = "MessagingCanvas";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<MessagingCanvas.MessagingCanvasChildrenProps>}
     * @readonly
     */
    static readonly Content: import("../../..").DynamicContentStore;
    /**
     * Shortcut for MessageInput component
     * @static
     * @type {MessageInput}
     * @readonly
     */
    static readonly Input: typeof MessageInput;
    /**
     * Shortcut for MessageList component
     * @static
     * @type {MessageList}
     * @readonly
     */
    static readonly MessageList: typeof MessageList;
    /**
     * Default properties
     *
     * @static
     * @type {MessagingCanvas.MessagingCanvasProps}
     * @readonly
     */
    static readonly defaultProps: Partial<MessagingCanvasProps>;
    static updateAll(): void;
    render(): JSX.Element;
}
