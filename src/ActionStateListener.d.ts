import * as React from "react";
import { ActionsWithPayload, MatchActionPayload } from "./Actions";
/**
 * Render props callback
 *
 * @callback ActionStateListener.ChildrenCallback
 * @property {ActionStateListener.ActionState} actionState Action state for matched actions
 * @returns {React.ReactNode}
 */
export declare type ChildrenCallback = (state: ActionState) => React.ReactNode;
/**
 * Properties of ActionStateListener.
 *
 * @typedef ActionStateListener.ActionStateListenerProps
 * @property {string | Array<string>} action Action or array of actions to track
 * @property {Actions.MatchActionPayload} [payload] Action payload to search for (uses shallow compare). Can also be a callback function
 * @property {ActionStateListener.ChildrenCallback} children Children
 */
export interface ActionStateListenerProps {
    action: string | Array<string>;
    payload?: MatchActionPayload;
    children: ChildrenCallback;
}
export interface ActionStateListenerState {
    pendingActions: ActionsWithPayload;
    blockedActions: ActionsWithPayload;
}
/**
 * Action state
 * @typedef ActionStateListener.ActionState
 * @property {boolean} disabled Whether any of the tracked actions is disabled currently
 */
export interface ActionState {
    disabled: boolean;
}
/**
 * This is a component that can track Action states and provide information whether action can be invoked.
 * @category Components / Basic
 * @hideconstructor
 * @param {ActionStateListener.ActionStateListenerProps} props
 * @extends {React.Component}
 */
export declare class ActionStateListener extends React.Component<ActionStateListenerProps, ActionStateListenerState> {
    state: ActionStateListenerState;
    componentDidUpdate(oldProps: ActionStateListenerProps): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private handleInvocationsChanged;
    render(): React.ReactNode;
}
