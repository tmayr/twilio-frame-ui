import * as React from "react";
import { ItemProps } from "../DynamicForm";
import { ThumbDirections } from "./ThumbButton";
/**
 * ThumbsUpOrDownItem properties
 * @typedef ThumbsUpOrDownItem.ThumbsUpOrDownItemProps
 * @property {ThumbsUpOrDownItem.ThumbsUpOrDownField} field - The ThumbsUpOrDown component
 * @extends {ItemProps}
 */
export interface ThumbsUpOrDownItemProps extends ItemProps {
    field: ThumbsUpOrDownField;
}
/**
 * Attributes for the ThumbsUpOrDown component
 *
 * @typedef ThumbsUpOrDownItem.ThumbsUpOrDownFieldAttributes
 * @property {string} name - The name of the ThumbsUpOrDown field
 * @property {string} type - The type of the ThumbsUpOrDown field
 * @property {string} [value] - The value of the ThumbsUpOrDown field
 * @property {boolean} [required] - Whether or not the field must be required
 * @property {} [upValue] - The value for the Up state
 * @property {} [downValue] - The value for the Down state
 */
export interface ThumbsUpOrDownFieldAttributes {
    name: string;
    type: string;
    value?: string;
    required?: boolean;
    upValue: any;
    downValue: any;
}
/**
 * @typedef ThumbsUpOrDownItem.ThumbsUpOrDownField
 * @property {string} type - The type of the field
 * @property {string} label - A custom label for the field
 * @property {ThumbsUpOrDownFieldAttributes} [attributes] - Custom attributes for the form field
 */
export interface ThumbsUpOrDownField {
    type: string;
    label: string;
    attributes?: ThumbsUpOrDownFieldAttributes;
}
interface ThumbsUpOrDownItemState {
    selected?: ThumbDirections;
}
/**
 * @class ThumbsUpOrDownItem
 * @classdesc ThumbsUpOrDown form item
 * @category Components / Basic
 * @hideconstructor
 * @param {ThumbsUpOrDownItem.ThumbsUpOrDownItemProps} props
 * @extends {React.Component}
 */
export declare class ThumbsUpOrDownItem extends React.Component<ThumbsUpOrDownItemProps, ThumbsUpOrDownItemState> {
    state: ThumbsUpOrDownItemState;
    handleClick: (direction: ThumbDirections) => void;
    render(): JSX.Element;
}
export {};
