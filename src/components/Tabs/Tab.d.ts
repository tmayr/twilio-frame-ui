import * as React from "react";
import { TabHeaderProps } from "./TabHeader";
/**
 * Properties for TabHeader component
 * @typedef Tab.TabProps
 * @property {React.ReactNode} children - The actual content of the tab.
 * @property {string | React.ReactNode} [label] - The textual label of the tab header. If provided, it will be rendered instead of the icons.
 * @property {string | React.ReactNode} [icon] - The icon for the inactive the tab header
 * @property {string | React.ReactNode} [iconActive] - The icon for the active the tab header
 * @property {string} [uniqueName] - Unique name of the tab, used by selectedTabName of Tabs to identify/select the Tab
 * @property {number} [index] - The index of the tab.
 * @property {boolean} [hidden] - it sets whether the tab is hidden or visible.
 */
export interface TabProps {
    icon?: string | React.ReactNode;
    iconActive?: string | React.ReactNode;
    label?: string | React.ReactNode;
    uniqueName?: string;
    index?: number;
    hidden?: boolean;
    children?: React.ReactNode;
}
/**
 * This component renders a tab with its `children` props as content and a TabHeader with its icon, iconActive and label props.
 * @category Components / Basic
 * @hideconstructor
 * @param {Tab.TabProps} props
 * @extends {React.Component}
 */
export declare class Tab extends React.Component<Partial<TabProps & TabHeaderProps>, {}> {
    render(): React.ReactNode;
}
