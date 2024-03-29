import * as React from "react";
import { CSSProps } from "../CSSProps";
import { DynamicContentStore } from "../../DynamicComponent";
/**
 * @typedef SidePanel.SidePanelThemeProps
 * @property {CSSProps} Container - Main container
 * @property {CSSProps} Header - Header element
 * @property {CSSProps} HeaderButton - Close button in header element
 */
export interface SidePanelThemeProps {
    Header: CSSProps;
    Container: CSSProps;
    HeaderButton: CSSProps;
}
interface ChildrenProps {
    [key: string]: any;
}
/**
 * @typedef SidePanel.SidePanelProps
 * @property {string} displayName - String used for className generation and in contentStore definition
 * @property {DynamicContentStore} contentStore - The store for the instance's DynamicComponent
 * @property {boolean} [isHidden=false] - If set to false, the main container will be set in display none
 * @property {React.ReactChild} [title] - A textual component used as panel title in default header
 * @property {function} [handleCloseClick] - Callback function trigger on `close` button click in default header
 * @property {React.ReactElement} [HeaderComponent] - Component to replace the default SidePanel header
 * @property {SidePanel.SidePanelThemeProps} [themeOverride={}] - Object to override defaults styles for the instance
 * @property {{}} [childrenProps] - Props to be pass to DynamicComponent children
 * @extends SidePanel.SidePanelThemeOverrideProp
 */
export interface SidePanelProps {
    className?: string;
    displayName: string;
    contentStore: DynamicContentStore;
    isHidden?: boolean;
    title?: React.ReactChild;
    handleCloseClick?: () => void;
    HeaderComponent?: React.ReactElement;
    themeOverride?: Partial<SidePanelThemeProps>;
    childrenProps?: ChildrenProps;
}
/**
 * A component rendering a list of dynamic filters.
 * Can be themed with [theme.SidePanel]{@link SidePanel.SidePanelThemeProps}
 * @category Components / Programmable
 * @hideconstructor
 * @param {SidePanel.SidePanelProps} props
 * @extends {React.PureComponent}
 */
export declare class SidePanel extends React.PureComponent<SidePanelProps> {
    static defaultProps: Partial<SidePanelProps>;
    render(): JSX.Element;
    renderHeader(): JSX.Element;
}
export {};
