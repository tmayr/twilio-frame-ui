import { Action, Dispatch } from "redux";
import { Client } from "twilio-chat";
/**
 * @category State
 * @class ChatSessionState
 * @hideconstructor
 */
/**
 * @typedef {Object} ChatSessionState.ChatSessionState
 * @property {string} connectionState="" State of the connection
 * @property {boolean} isActive=true Indicates if chat session is active
 */
export interface ChatSessionState {
    connectionState: string;
    client?: Client;
    listener?: ClientListener;
    isActive: boolean;
}
export interface SessionStateAction extends Action {
    readonly payload?: any;
}
export declare const ACTION_INIT_SESSION = "CHAT_SESSION_INIT";
export declare const ACTION_CLIENT_CONNECTION = "CHAT_SESSION_CLIENT_CONNECTION";
export declare const ACTION_APP_ACTIVE = "CHAT_SESSION_APP_ACTIVE";
export declare const ACTION_CHAT_SESSION_UNINIT = "CHAT_SESSION_UNINIT";
export declare function reduce(state: ChatSessionState, action: SessionStateAction): ChatSessionState;
export declare class Actions {
    private static _dispatcher;
    static dispatcher: Dispatch<any>;
    static init(client: Client): void;
    static dispatchConnectionState(connectionState: string): void;
    static setActive(isActive: boolean): void;
    static shutdown(): void;
}
export declare class ClientListener {
    private _client;
    private _listening;
    constructor(client: Client);
    start(): void;
    stop(): void;
    isListening(): boolean;
    private handleConnectionStateChanged;
}
export declare function current(): ChatSessionState;
