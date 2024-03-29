/// <reference types="node" />
import { EventEmitter } from "events";
export declare enum ChatEvent {
    chatInputFocus = 0,
    chatInputRowsChanged = 1,
    chatMessagePosted = 2
}
export declare class ChatEventEmitter extends EventEmitter {
    emitInputFocus(channelSid: string): void;
    emitInputRowsChanged(channelSid: string): void;
    emitMessagePosted(channelSid: string, messageBody: string): void;
}
