/// <reference types="react" />
/// <reference types="node" />
import { EventEmitter } from "events";
import { BrowserNotificationOptions } from "./NotificationHandler/BrowserNotificationHandler.definitions";
import * as NotificationIds from "./NotificationIds";
export { NotificationIds };
/**
 * Properties of the Notification
 * @typedef NotificationContentProps
 * @property {Object} [notificationContext] - A optional context for the Notification
 * @memberof NotificationManager
 */
export interface NotificationContentProps {
    notificationContext?: object;
}
/**
 * Notification options for handlers
 *
 * @typedef NotificationOptions
 * @property {NotificationManager.BrowserNotificationOptions} browser - Browser notification options
 * @memberof NotificationManager
 */
export interface NotificationOptions {
    browser?: BrowserNotificationOptions;
}
/**
 * @callback NotificationClickFunction
 * @param {any} event click event
 * @returns {void}
 * @memberof NotificationManager
 */
export declare type NotificationClickFunction = (event: any) => void;
/**
 * @callback NotificationIsApplicableFunction
 * @param {Notification} notificationInstance instance of notification to be shown
 * @returns {boolean} determines whether particular instance should be shown
 * @memberof NotificationManager
 */
export declare type NotificationIsApplicableFunction = (notificationInstance: Notification) => boolean;
/**
 * @typedef Notification
 * @property {string} id - The id for the notification
 * @property {React.ReactText | React.ReactElement<NotificationManager.NotificationContentProps>} [content] - A content for the in-app notification. In-app notification is not shown if value is falsy.
 * @property {NotificationManager.NotificationType} [type] - The type of the notification
 * @property {string} [backgroundColor] - Define the notification background color
 * @property {string} [icon] - An optional icon to be rendered inside the notification message
 * @property {number} [timeout] - If set, it will dismiss the notification after a certain time
 * @property {boolean} [closeButton] - Show a close button
 * @property {Object} [context] - Optional context for the notification
 * @property {NotificationIsApplicableFunction} [isApplicable] - callback determining whether particular notification instance should be shown
 * @property {NotificationManager.NotificationOptions} [options] - Options for the notification handlers
 * @memberof NotificationManager
 */
export interface Notification {
    id: string;
    content?: React.ReactText | React.ReactElement<NotificationContentProps>;
    type?: NotificationType;
    backgroundColor?: string;
    icon?: string;
    timeout?: number;
    closeButton?: boolean;
    onClick?: NotificationClickFunction;
    context?: {
        [key: string]: any;
    };
    options?: NotificationOptions;
    actions?: Array<React.ReactElement>;
    isApplicable?: NotificationIsApplicableFunction;
}
/**
 * Callback to cancel showing the notification.
 *
 * @callback NotificationCancelFunction
 * @returns {void}
 * @memberof NotificationManager
 */
export declare type NotificationCancelFunction = () => void;
/**
 * @callback NotificationFilterFunction
 * @param {Notification} notification Notification to filter
 * @returns {boolean} whether notification should be handled
 * @memberof NotificationHandler
 */
export declare type NotificationFilterFunction = (notification: Notification) => boolean;
/**
 * @callback NotificationEventListener
 * @param {Notification} notification - The subject of the notification event. Mutate it to modify the notification properties.
 * @param {NotificationCancelFunction} cancel - Cancel the event
 * @category Notifications
 */
export declare type NotificationEventListener = (notification: Notification, cancel: NotificationCancelFunction) => void;
/**
 * DefaultNotificationHandlerType Default types of notification handlers
 *
 * @enum { Browser | InApp } NotificationHandlerType
 * @static
 * @property {string} Browser - Browser notification handler type
 * @property {string} InApp - InApp notification handler type
 */
export declare enum DefaultNotificationHandlerType {
    Browser = "browser",
    InApp = "inapp"
}
/**
 * Notification handler type
 * @typedef { NotificationManager.DefaultNotificationHandlerType | string } NotificationHandlerType
 */
export declare type NotificationHandlerType = DefaultNotificationHandlerType | string;
/**
 * Notification Handler interface
 *
 * @interface NotificationHandler
 * @category Notifications
 */
export interface NotificationHandler {
    /**
     * Id of the handler
     * @name id
     * @type {NotificationHandlerType}
     * @readonly
     * @memberof NotificationHandler
     */
    readonly id: NotificationHandlerType;
    /**
     * Whether the handler is enabled
     * @name enabled
     * @type {boolean}
     * @memberof NotificationHandler
     */
    enabled: boolean;
    /**
     * Clear current filters
     * @name clearFilters
     * @function
     * @memberof NotificationHandler
     */
    clearFilters(): void;
    /**
     * Get all current filters
     * @name getFilters
     * @function
     * @returns {Array<NotificationFilterFunction>} array of current filters
     * @memberof NotificationHandler
     */
    getFilters(): Array<NotificationFilterFunction>;
    /**
     * Adds a new filter
     * @name addFilter
     * @function
     * @param {NotificationFilterFunction} filter Filter function to be added
     * @returns {Function} callback to remove the filter
     * @memberof NotificationHandler
     */
    addFilter(filter: NotificationFilterFunction): Function;
}
/**
 * Default notification handlers
 * @typedef DefaultNotificationHandlers
 * @property {NotificationHandler} browser Browser notification handler
 * @property {NotificationHandler} inapp In-app notification handler
 * @memberof NotificationManager
 */
declare type DefaultNotificationHandlers = {
    [k in NotificationHandlerType]: NotificationHandler;
};
/**
 * Notification Dismissed Event
 *
 * @event NotificationManager#notificationDismissed
 * @param {NotificationManager.Notification} notification Dismissed notification
 */
/**
 * Notification Added Event
 *
 * @event NotificationManager#notificationAdded
 * @param {NotificationManager.Notification} notification Added notification
 */
/**
 * Event fired before notification is added
 *
 * @event NotificationManager#beforeAddNotification
 * @param {NotificationManager.Notification} notification Notification to be added
 * @param {NotificationManager.NotificationCancelFunction} cancelFunction Function to invoke to cancel the notification
 */
/**
 * List of Notification events
 *
 * @enum {"notificationAdded"|"notificationDismissed"|"beforeAddNotification"} NotificationEvent
 * @property {"notificationAdded"} notificationAdded - Notification added
 * @property {"notificationDismissed"} notificationDismissed - Notification dismissed
 * @property {"beforeAddNotification"} beforeAddNotification - Before notification is added
 * @memberof NotificationManager
 */
export declare enum NotificationEvent {
    notificationAdded = "notificationAdded",
    notificationDismissed = "notificationDismissed",
    beforeAddNotification = "beforeAddNotification"
}
/**
 * @readonly
 * @enum {"information"|"success"|"warning"|"error"} NotificationType
 * @property {"information"} information - Information notification
 * @property {"success"} success - Success notification
 * @property {"warning"} warning - Warning notification
 * @property {"error"} error - Error notification
 * @memberof NotificationManager
 */
export declare enum NotificationType {
    information = "information",
    success = "success",
    warning = "warning",
    error = "error"
}
/**
 * @category Core / Manager
 * @class NotificationManager
 * @classdesc Notification manager. Access the instance using {@link Notifications}.
 * @hideconstructor
 * @extends {EventEmitter}
 */
export declare class NotificationManager extends EventEmitter {
    /**
     * Map of registered notifications
     * @type {Map<string, NotificationManager.Notification>}
     * @readonly
     */
    readonly registeredNotifications: Map<string, Notification>;
    /**
     * Array of active notifications
     * @type {Array<NotificationManager.Notification>}
     * @readonly
     */
    readonly activeNotifications: Array<Notification>;
    /**
     * Registered notification handlers
     * @type {NotificationManager.DefaultNotificationHandlers}
     * @readonly
     */
    readonly handlers: Partial<DefaultNotificationHandlers>;
    /**
     * Default timeout in milliseconds for the notifications
     * @static
     * @default 8000
     * @type {number}
     */
    static defaultTimeout: number;
    /**
     * Register notification
     * @param {NotificationManager.Notification} notification - The notification to be registered
     * @example
     * Notification.registerNotification({
     *    id: "newNotification",
     *    closeButton: true,
     *    content: "New Notification handler",
     *    timeout: 0,
     *    type: NotificationType.warning,
     *    actions: [
     *      <NotificationBar.Action label="Hello" onClick={(event, notification) => {}} icon="Bell" />, // using the action component.
     *      <button type="button" onClick={(event, notification) => {}}>Hello world</button> // using custom action button
     *    ]
     * });
     */
    registerNotification(notification: Notification): void;
    /**
     * Show an instance of registered notification
     * @param {string} id - The id of the notification to be shown
     * @param {Object} [context] - A context to be rendered in the notification
     * @fires NotificationManager#notificationAdded
     * @fires NotificationManager#beforeAddNotification
     * @returns {NotificationManager.Notification | undefined} notification instance, can be used to dismiss later. Undefined is returned if action was not shown.
     */
    showNotification(id: string, context?: object): Notification;
    /**
     * Dismiss notifications
     * @param {NotificationManager.Notification} notification - The notification to be dismissed
     * @fires NotificationManager#notificationDismissed
     * @returns {void}
     */
    dismissNotification(notification: Notification): void;
    /**
     * Dismiss notifications with the id
     * @param {string} id - The id of the notification(s) to be dismissed
     */
    dismissNotificationById(id: string): void;
    /**
     * Dismiss all the active notifications
     */
    dismissAll(): void;
    /**
     * Register notification handler. Use to expose your notification handler.
     *
     * @param {NotificationHandler} handler Notification handler
     */
    registerHandler(handler: NotificationHandler): void;
    /**
     * Enable or disable notification handler
     * @param {NotificationHandlerType} id of the notification handler
     * @param {boolean} enabled whether or not to enable or disable the handler
     * @returns {void}
     */
    toggleNotificationHandler(id: NotificationHandlerType, enabled: boolean): void;
    /**
     * Returns whether the notification handler for the given id is enabled or not
     * @returns {boolean} whether the notification handler is enabled or not
     */
    isNotificationHandlerEnabled(id: NotificationHandlerType): boolean;
}
/**
 * An instance of the Notifications Manager
 *
 * @name Notifications
 * @type {NotificationManager}
 * @category Notifications
 */
export declare const Notifications: NotificationManager;
