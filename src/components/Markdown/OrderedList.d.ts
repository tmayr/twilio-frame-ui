import * as React from "react";
/**
 * Properties of the OrderedList component
 *
 * @private
 * @typedef OrderedList.OrderedListProps
 * @property {string} text - Text to be included in the component
 */
export interface OrderedListProps {
    text: string;
}
/**
 * This component renders a unordered list
 *
 * @private
 * @category Components / Basic
 * @hideconstructor
 * @param {OrderedList.OrderedListProps} props
 * @extends {React.PureComponent}
 */
export declare class OrderedList extends React.PureComponent<OrderedListProps> {
    render(): JSX.Element;
}
