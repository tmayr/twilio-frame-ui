import { Notification as InnerNotification, DefaultNotificationHandlerType } from "../NotificationManager";
import { BaseNotificationHandler } from "./BaseNotificationHandler";
/**
 * @private
 * @class BrowserNotificationHandler
 * @extends {BaseNotificationHandler}
 */
export declare class BrowserNotificationHandler extends BaseNotificationHandler {
    readonly id = DefaultNotificationHandlerType.Browser;
    private currentNotifications;
    private handleClose;
    private handleShow;
    private handleError;
    private handleClick;
    canHandleNotification(n: InnerNotification): boolean;
    handleNotification(n: InnerNotification): void;
    dismissNotification(n: InnerNotification): void;
}
