/// <reference types="react" />
import { Notification } from "../../../NotificationManager";
/**
 * @callback NotificationBarActionCallback
 * @param {any} event click event
 * @param {NotificationManager.Notification} notification - Notification instance.
 * @returns {void}
 * @memberof NotificationBarAction
 */
declare type NotificationBarActionCallback = (event: any, notification: Notification) => void;
/**
 * Properties of Notification bar action.
 * @typedef NotificationBarAction.NotificationBarActionProps
 * @property {React.ReactText} label
 * @property {NotificationBar.NotificationBarActionCallback} onClick - Callback to trigger when action is clicked.
 * @property {string | React.ReactNode} [icon] - Icon to be rendered in action.
 * @property {NotificationManager.Notification} [notification] - Notification instance.
 */
export interface NotificationBarActionProps {
    label: React.ReactText;
    onClick: NotificationBarActionCallback;
    icon?: string | React.ReactNode;
    notification?: Notification;
}
export {};
