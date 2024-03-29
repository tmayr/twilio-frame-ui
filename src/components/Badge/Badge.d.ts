import * as React from "react";
import { BadgeProps, BadgeVariants } from "./Badge.definitions";
import { DynamicContentStore } from "../../DynamicComponent";
/**
 * A badge component.
 * Can be themed with [theme.Badge]{@link Badge.BadgeThemeProps}
 * @category Components / Programmable
 * @hideconstructor
 * @param {Badge.BadgeProps} props - Properties to be passed to configure this component.
 * @extends {React.PureComponent}
 */
export declare class Badge extends React.PureComponent<BadgeProps> {
    /**
     * Object containing the component variants
     *
     * @enum {"standard"|"dot"}
     * @static
     * @property {"standard"} standard - Standard version of the components: the badge will display a number passed as children with a few props modifications.
     * @property {"dot"} dot - Simplified version of the component: the badge will simply be displayed a red circle.
     */
    static readonly variants: typeof BadgeVariants;
    static readonly displayName = "Badge";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<Badge.BadgeChildrenProps>}
     * @readonly
     */
    static readonly Content: DynamicContentStore;
    static defaultProps: {
        invisible: boolean;
        showZero: boolean;
        variant: BadgeVariants;
        programmable: boolean;
        themeOverride: {};
        max: number;
    };
    render(): JSX.Element;
    renderContent(): string;
    getWrapperComponent(): {
        Component: any;
        props: object;
    };
}
