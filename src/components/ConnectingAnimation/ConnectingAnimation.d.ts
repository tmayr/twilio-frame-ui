import * as React from "react";
/**
 * @typedef {Object} ConnectingAnimation.ConnectingAnimationProps
 * @property {string} [className] - Custom classes for the components
 * @property {string} [color="#FFFFFF"] - Background color for the element
 */
export interface ConnectingAnimationProps {
    className?: string;
    color?: string;
    sizeMultiplier?: number;
}
/**
 * A component used to display an animation for a connecting state
 * @category Components / Basic
 * @hideconstructor
 * @param {ConnectingAnimation.ConnectingAnimationProps} props
 * @extends {React.PureComponent}
 */
export declare class ConnectingAnimation extends React.PureComponent<ConnectingAnimationProps> {
    static readonly defaultProps: {
        color: string;
        sizeMultiplier: number;
    };
    render(): JSX.Element;
}
