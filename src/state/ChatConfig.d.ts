import { LogLevelDesc } from "loglevel";
/**
 * Frame configuration options
 * @typedef {Object} Frame#FrameConfig
 * @property {String} [language] language code
 * @ignore
 */
export interface FrameConfig {
    readonly language?: string;
    readonly logLevel?: LogLevelDesc;
}
export declare function setConfig(config: any): void;
export declare function current(): FrameConfig;
