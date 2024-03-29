/// <reference types="node" />
import { EventEmitter } from "events";
/**
 * @callback ActionFunction
 * @param {ActionsManager.ActionPayload} payload action payload
 * @returns {Promise<any>} promise to be invoked for action
 * @memberof ActionsManager
 */
export declare type ActionFunction = (payload: any) => Promise<any>;
/**
 * @callback ActionCancelFunction
 * @returns {void}
 * @memberof ActionsManager
 */
export declare type ActionCancelFunction = () => void;
/**
 * @callback ReplacedActionFunction
 * @param {ActionsManager.ActionPayload} payload action payload
 * @param {ActionsManager.ActionFunction} original original action invocation
 * @returns {Promise<any>} promise to be invoked for action
 * @memberof ActionsManager
 */
export declare type ReplacedActionFunction = (payload: ActionPayload, original: ActionFunction) => Promise<any>;
/**
 * @callback PayloadUpdateFunction
 * @param {ActionsManager.ActionPayload} payload action payload
 * @returns {ActionsManager.ActionPayload} updated action payload
 * @memberof ActionsManager
 */
export declare type PayloadUpdateFunction = (payload: ActionPayload) => ActionPayload;
/**
 * Action with payload
 *
 * @typedef {Object} ActionWithPayload
 * @property {ActionsManager.ActionName} action action code
 * @property {ActionsManager.ActionPayload} [payload] action payload
 * @memberof ActionsManager
 */
export interface ActionWithPayload {
    action: ActionName;
    payload?: ActionPayload;
}
/**
 * Actions with payload
 *
 * @typedef {Object} ActionsWithPayload
 * @property {ActionsManager.ActionWithPayload} [first] first action with payload
 * @property {ActionsManager.ActionPayload} [ACTION_CODE] action payload by action code in key
 * @memberof ActionsManager
 */
export interface ActionsWithPayload {
    [k: string]: ActionPayload;
    first?: ActionWithPayload;
}
/**
 * Action payload
 *
 * @typedef {Object} ActionPayload
 * @memberof ActionsManager
 */
export declare type ActionPayload = any;
/**
 * Action name
 *
 * @typedef {string} ActionName
 * @memberof ActionsManager
 */
export declare type ActionName = string;
/**
 * Predicate to match action by payload
 *
 * @callback MatchActionPayloadPredicate
 * @param {ActionsManager.ActionPayload} payload action payload
 * @param {string} action action code
 * @returns {boolean} true if payload is matched
 * @memberof ActionsManager
 */
export declare type MatchActionPayloadPredicate = (payload: ActionPayload, action: string) => boolean;
/**
 * Action payload or predicate to match
 *
 * @typedef {(ActionsManager.MatchActionPayloadPredicate | ActionsManager.ActionPayload)} MatchActionPayload
 * @memberof ActionsManager
 */
export declare type MatchActionPayload = MatchActionPayloadPredicate | ActionPayload;
/**
 * Event fired before action is invoked
 *
 * @event ActionsManager#before[Action]
 * @param {ActionsManager.ActionPayload} payload action payload
 * @param {ActionsManager.ActionCancelFunction} cancelFunction function to call to cancel action invocation
 */
/**
 * Event fired after action is invoked
 *
 * @event ActionsManager#after[Action]
 * @param {ActionsManager.ActionPayload} payload action payload
 */
/**
 * Event fired when action blocked status was changed
 *
 * @event ActionsManager#actionBlockedChanged
 * @param {boolean} blocked whether action was blocked or not
 * @param {string} action action name
 * @param {ActionsManager.ActionPayload} payload action payload
 */
/**
 * Event fired before any action invocation
 *
 * @event ActionsManager#invocationBegin
 */
/**
 * Event fired after any action invocation
 *
 * @event ActionsManager#invocationEnd
 */
/**
* @class ActionsManager
* @classdesc Actions Manager. Access the instance using {@link Actions}.
* @hideconstructor
* @category Core / Manager
*/
export declare class ActionsImpl {
    private actions;
    private replacedActions;
    private payloadUpdateFunctions;
    private pendingInvocations;
    private blockedActions;
    private emitter;
    /**
     * Registers an action
     * @function registerAction
     * @param {string} name Name of the action to register.
     * @param {ActionsManager.ActionFunction} action A function to execute when the action is invoked.
     * @param {ActionsManager.PayloadUpdateFunction} [payloadUpdateFunction] A function to update the payload.
     * @returns {void}
     * @memberof ActionsManager
     */
    registerAction(name: string, action: ActionFunction, payloadUpdateFunction?: PayloadUpdateFunction): void;
    /**
     * Invokes an action
     * @function invokeAction
     * @param {string} name Name of the action to invoke.
     * @param {ActionsManager.ActionPayload} [payload] Data to be passed to an action while invoking.
     * @returns {Promise<any>}
     * @memberof ActionsManager
     *
     * @fires ActionsManager#invocationBegin
     * @fires ActionsManager#before[Action]
     * @fires ActionsManager#after[Action]
     * @fires ActionsManager#invocationEnd
     */
    invokeAction(name: string, payload?: ActionPayload): Promise<any>;
    /**
     * To prevent promise.all to stop waiting for promises after the first rejection,,
     * we add a custom "catch" logic to each of the values returned from an eventListener,
     * if this is a promise.
     * @private
     */
    private catchErrorIfIsPromise;
    private customEmit;
    /**
     * Replace an existing action
     * @function replaceAction
     * @param {string} name An action name to be replaced.
     * @param {ActionsManager.ReplacedActionFunction} action A new function for an action to be replaced.
     * @returns {void}
     * @memberof ActionsManager
     */
    replaceAction(name: string, action: ReplacedActionFunction): void;
    /**
     * Add a new listener to the action
     * @function addListener
     * @param {string} event Event name
     * @param {Function} listener Event callback
     * @returns {EventEmitter} Event Emitter
     * @memberof ActionsManager
     */
    addListener(event: string | symbol, listener: Function): EventEmitter;
    /**
     * Alias for addListener
     * @function on
     * @param {string | symbol} event Event name
     * @param {Function} listener Event callback
     * @returns {EventEmitter} Event Emitter
     * @deprecated
     * @memberof ActionsManager
     */
    on(event: string | symbol, listener: Function): EventEmitter;
    /**
     * Removing a listener from the action
     * @function removeListener
     * @param {string | symbol} event Event name
     * @param {Function} listener Event callback
     * @returns {EventEmitter} Event Emitter
     * @memberof ActionsManager
     */
    removeListener(event: string | symbol, listener: Function): EventEmitter;
    /**
     * Removing all listeners from the action
     * @function removeAllListeners
     * @param {string | symbol} event Event name
     * @returns {EventEmitter} Event Emitter
     * @memberof ActionsManager
     */
    removeAllListeners(event?: string | symbol): EventEmitter;
    /**
     * @deprecated Use Action.invokeAction instead.
     * @private
     */
    emit(...args: Array<any>): boolean;
    private registerInvocation;
    private unregisterInvocation;
    /**
     * Find pending actions by action and payload
     * @function findPendingActions
     * @param {string|Array<string>} action Action or array of actions
     * @param {ActionsManager.MatchActionPayload} [payload] Payload to search for
     * @return {ActionsManager.ActionsWithPayload}
     * @memberof ActionsManager
     */
    findPendingActions(action: string | Array<string>, payload?: MatchActionPayload): ActionsWithPayload;
    /**
     * Find blocked actions by action and payload
     * @function findBlockedActions
     * @param {string|Array<string>} action Action or array of actions
     * @param {ActionsManager.MatchActionPayload} [payload] Payload to search for
     * @return {ActionsManager.ActionsWithPayload}
     * @memberof ActionsManager
     */
    findBlockedActions(action: string | Array<string>, payload?: MatchActionPayload): ActionsWithPayload;
    /**
     * Block action with given payload
     * @function blockAction
     * @param {string} action Action
     * @param {ActionsManager.ActionPayload} [payload] Action payload
     * @returns {void}
     * @memberof ActionsManager
     *
     * @fires ActionsManager#actionBlockedChanged
     */
    blockAction(action: string, payload?: ActionPayload): void;
    /**
     * Unblock previously blocked action with given payload.
     * @function unblockAction
     * @param {string} action Action name
     * @param {ActionsManager.MatchActionPayload} [payload] Action payload
     * @returns {void}
     * @memberof ActionsManager
     *
     * @fires ActionsManager#actionBlockedChanged
     */
    unblockAction(action: string, payload?: ActionPayload): void;
    private setActionBlocked;
}
/**
 * A singleton instance of Actions manager
 *
 * @name Actions
 * @type {ActionsManager}
 * @category Actions
 */
export declare const Actions: ActionsImpl;
