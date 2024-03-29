/// <reference types="react" />
/**
 * @callback ContentFragmentConditionFunction
 * @param {object} props props T of the Component that includes the static prop named Content of type {@link DynamicContentStore}<T>
 * @returns {boolean} whether the content fragment should be either added/replaced/removed or not
 * @memberof DynamicContentStore
 */
export declare type ContentFragmentConditionFunction = (props: any) => boolean;
/**
 * Options for removing a component
 *
 * @typedef {DynamicContentStore.RemoveComponentCallOptions} RemoveComponentCallOptions
 * @property {DynamicContentStore.ContentFragmentConditionFunction} [if] - function that returns whether the component should be removed or not.
 * @memberof DynamicContentStore
 */
export interface RemoveComponentCallOptions {
    if?: ContentFragmentConditionFunction;
}
/**
 * Remove component call request
 * @typedef {DynamicContentStore.RemoveComponentCall} RemoveComponentCall
 * @property {React.Key} - key that identifies the fragment to remove
 * @property {DynamicContentStore.RemoveComponentCallOptions} - options of the fragment to remove
 * @memberof DynamicContentStore
 */
export interface RemoveComponentCall {
    key: React.Key;
    options: RemoveComponentCallOptions;
}
/**
 * Alignment of the fragment
 * @typedef {"start" | "end"} ContentFragmentAlignment
 * @memberof DynamicContentStore
 */
export declare type ContentFragmentAlignment = "start" | "end";
/**
 * Props of content fragment
 * @typedef {DynamicContentStore.ContentFragmentProps} ContentFragmentProps
 * @property {DynamicContentStore.ContentFragmentAlignment} [align] - fragment alignment
 * @property {boolean} [replace] - whether the fragment should replace an existing one or not. Always set to true when calling `replace` method from {@link DynamicContentStore}
 * @property {number} [sortOrder] - index in which to position the fragment within the component.
 * @property {DynamicContentStore.ContentFragmentConditionFunction} [if] - function that returns whether the content fragment should be added or replaced.
 * @memberof DynamicContentStore
 */
export interface ContentFragmentProps {
    align?: ContentFragmentAlignment;
    replace?: boolean;
    sortOrder?: number;
    if?: ContentFragmentConditionFunction;
}
/**
 * @callback CleanupFunction
 * @returns {void}
 * @memberof DynamicContentStore
 */
export declare type CleanupFunction = () => void;
