import { NotificationHandler, Notification, NotificationFilterFunction, NotificationHandlerType } from "../NotificationManager";
/**
 * @private
 */
export declare abstract class BaseNotificationHandler implements NotificationHandler {
    abstract readonly id: NotificationHandlerType;
    private handledNotifications;
    constructor();
    /**
     * Handle / show notification.
     *
     * @abstract
     * @param {Notification} n Notification to be shown
     */
    abstract handleNotification(n: Notification): void;
    /**
     * Dismiss the notification.
     *
     * @abstract
     * @param {Notification} n Notification to be dismissed
     */
    abstract dismissNotification(n: Notification): void;
    /**
     * Whether notification should be handled by the handler.
     *
     * @abstract
     * @param {Notification} n Notification to be dismissed
     * @returns {boolean} whether handler is capable of handling the notification
     */
    abstract canHandleNotification(n: Notification): boolean;
    private _enabled;
    enabled: boolean;
    private _filters;
    getFilters(): Array<NotificationFilterFunction>;
    clearFilters(): void;
    addFilter(filter: NotificationFilterFunction): Function;
    private isFiltered;
    private shouldProcess;
    private handleNotificationAdded;
    private handleNotificationDismissed;
}
