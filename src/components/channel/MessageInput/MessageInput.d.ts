import * as React from "react";
import { MessageInputProps } from "./MessageInput.definition";
/**
 * This is a container for MessageInputArea and SendButton.
 * Can be themed with [theme.Chat.MessageInput]{@link MessageInput.MessageInputThemeProps}
 * @category Components / Programmable
 * @hideconstructor
 * @param {MessageInput.MessageInputProps} props - Properties to be passed to configure this component.
 * @extends {React.PureComponent}
 */
export declare class MessageInput extends React.PureComponent<MessageInputProps> {
    static readonly displayName = "MessageInput";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<MessageInput.MessageInputChildrenProps>}
     * @readonly
     */
    static readonly Content: import("../../..").DynamicContentStore;
    /**
     * Default properties
     *
     * @static
     * @type {MessageInput.MessageInputProps}
     * @readonly
     */
    static readonly defaultProps: Partial<MessageInputProps>;
    static updateAll(): void;
    render(): JSX.Element;
}
