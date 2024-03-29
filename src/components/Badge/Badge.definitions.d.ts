import { CSSProps } from "../CSSProps";
export declare enum BadgeVariants {
    standard = "standard",
    dot = "dot"
}
/**
 * @typedef {} Badge.BadgeChildrenProps
 * @property {boolean} [invisible=false] - Set to true to prevent the badge from being rendered
 * @property {number} [max=9] - Maximum badge value. If the content is greater than this property, a "+" will be displayed.
 * @property {boolean} [showZero=false] - Set to true to hide the badge when its content is 0
 * @property {Badge.variants} [variant=BadgeVariants.standard] - Variants of the component.
 * @property {number} children - The numeric value to be displayed in the notification
 */
export interface BadgeChildrenProps {
    invisible: boolean;
    max: number;
    showZero: boolean;
    variant: BadgeVariants;
    children: number;
}
/**
 * @typedef {} Badge.BadgePosition
 * @property {strring} [top] - Represents the top position
 * @property {string} [right] - Represents the right position
 */
export interface BadgePosition {
    top?: string;
    right?: string;
}
/**
 * @typedef {Badge.BadgeChildrenProps} Badge.BadgeProps
 * @property {boolean} [programmable=true] - Set to false to ignore `Badge.Content` customisations
 * @property {Badge.BadgePosition} [position] - Position of the badge
 * @extends {BadgeChildrenProps}
 */
export interface BadgeProps extends BadgeChildrenProps {
    programmable: boolean;
    themeOverride: Partial<BadgeThemeProps>;
    position?: BadgePosition;
}
/**
 * @typedef Badge.BadgeThemeProps
 * @property {CSSProps} OuterCircle - external part of the circle that takes care of position and spacing around main inner circle
 * @property {CSSProps} InnerCircle - main part of the circle - takes care of badge size, font and colors
 */
export interface BadgeThemeProps {
    OuterCircle: CSSProps;
    InnerCircle: CSSProps;
}
