import * as React from "react";
/**
 * @enum {0 | 1} ThumbDirections
 * @property {0} up
 * @property {1} down
 * @memberOf ThumbButton
 */
export declare enum ThumbDirections {
    "up" = 0,
    "down" = 1
}
/**
 * @typedef ThumbButton.ThumbButtonProps
 * @property {ThumbButton.ThumbDirections} direction
 * @property {boolean} selected
 * @property {string} icon
 * @property {Function} handleClick
 * @property {} [value]
 */
export interface ThumbButtonProps {
    direction: ThumbDirections;
    selected: boolean;
    icon: string;
    handleClick: (direction: ThumbDirections) => void;
    value?: any;
}
/**
 * @class ThumbButton
 * @classdesc Thumb button
 * @category Components / Basic
 * @hideconstructor
 * @param {ThumbButton.ThumbButtonProps} props - props
 * @extends {React.PureComponent}
 */
export declare class ThumbButton extends React.PureComponent<ThumbButtonProps> {
    handleClick: () => void;
    render(): JSX.Element;
}
