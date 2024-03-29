import * as React from "react";
import { ContentFragmentProps, RemoveComponentCall, RemoveComponentCallOptions, CleanupFunction } from "./DynamicContentStore.definitions";
/**
 * @class DynamicContentStore
 * @classdesc Allows any component to have its contents altered by adding, replacing or removing child elements to/from it.
 * @category Framework
 * @hideconstructor
 */
export declare class DynamicContentStore {
    private _name;
    constructor(name: string);
    /**
     * Name of the dynamic content store
     *
     * @type {string}
     */
    readonly name: string;
    private _removeRequests;
    private registeredFragments;
    private removeRegistration;
    /**
     * Adds a new child fragment
     * @param {React.ReactElement<any>} child - child to add
     * @param {DynamicContentStore.ContentFragmentProps} options - options of the child to add
     * @returns {DynamicContentStore.CleanupFunction} callback that removes the fragment from the list of fragments to be added
     */
    add(child: React.ReactElement<any>, options?: ContentFragmentProps): CleanupFunction;
    /**
     * Removes an existing child fragment
     * @param {React.Key} key - key that identifies the fragment to remove
     * @param {DynamicContentStore.RemoveComponentCallOptions} options - options of the child to remove
     * @returns {DynamicContentStore.CleanupFunction} callback that removes the fragment from the list of remove requests
     */
    remove(key: React.Key, options?: RemoveComponentCallOptions): CleanupFunction;
    /**
     * Replaces a fragment with the given child by matching the fragment's key
     * @param {React.ReactElement} child - new child that will replace an existing fragment
     * @param {DynamicContentStore.ContentFragmentProps} options - options of the new child
     * @returns {DynamicContentStore.CleanupFunction} callback that removes the fragment from the list of fragments to be added
     */
    replace(child: React.ReactElement<any>, options?: ContentFragmentProps): CleanupFunction;
    /**
     * Array of React Elements (React.ReactElement) that represent the fragments that will be added to the component
     * @type {Array<React.ReactElement>}
     */
    readonly fragments: React.ReactElement<ContentFragmentProps & {
        children?: React.ReactNode;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>[];
    /**
     * Array of {@link DynamicContentStore.RemoveComponentCall} requests that represent requests of fragments to be removed from the component
     * @type {Array<DynamicContentStore.RemoveComponentCall>}
     */
    readonly removeRequests: Array<RemoveComponentCall>;
}
