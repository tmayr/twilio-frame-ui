import * as React from "react";
import { OptionalThemeProps } from "emotion-theming";
import { DynamicContentStore } from "./DynamicContentStore";
import { ContentFragmentProps } from "./DynamicContentStore.definitions";
export * from "./DynamicContentStore";
/**
 * Dynamically populated children which will receive props of type T.
 * @typedef {(React.ReactElement<T>)} DynamicComponentChildren
 */
/**
 * @class ContentFragment
 * @classdesc Represents a content fragment
 *
 * @private
 * @param {DynamicContentStore.ContentFragmentProps}
 * @extends {React.Component}
 * @memberof DynamicComponent
 */
export declare class ContentFragment extends React.Component<ContentFragmentProps> {
    render(): React.ReactNode;
}
/**
 * @class DefaultContentFragment
 * @classdesc Represents a default content fragment
 *
 * @private
 * @param {DynamicContentStore.ContentFragmentProps}
 * @extends {React.Component}
 * @memberof DynamicComponent
 */
export declare class DefaultContentFragment extends React.Component<any> {
    render(): React.ReactNode;
}
export interface DynamicComponentProps {
    childProps?: any;
    contentStore: DynamicContentStore;
    className?: string;
    customChildren?: React.ReactNode;
    vertical?: boolean;
    name: string;
    noContainers?: boolean;
    subContainer?: React.ReactElement<any>;
    renderChildren?: (children: Array<React.ReactNode>, align: string) => Array<React.ReactNode>;
    rootContainerStyles?: string;
}
/**
 * @class DynamicComponent
 * @category Framework
 * @private
 */
export declare class DynamicComponent<Theme> extends React.PureComponent<OptionalThemeProps<DynamicComponentProps, Theme>> {
    static readonly displayName = "DynamicComponent";
    private theme;
    context: {
        [key: string]: any;
    };
    private themeUnsubscribeId;
    static defaultProps: {
        rootContainerStyles: string;
    };
    constructor(props: DynamicComponentProps);
    componentWillMount(): void;
    componentWillUnmount(): void;
    private parseFragment;
    render(): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
    static cloneElementWithProps(child: React.ReactChild, addedProps: any): React.ReactChild;
    static contextTypes: any;
}
