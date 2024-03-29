import * as React from "react";
import { ItemProps } from "../DynamicForm";
/**
 * RadioItem properties
 * @typedef RadioItem.RadioItemProps
 * @property {RadioItem.RadioField} field - The radio field component
 * @property {boolean} [checked] - The radio item check status
 * @extends {ItemProps}
 */
export interface RadioItemProps extends ItemProps {
    field: RadioField;
    checked: boolean;
}
/**
 * @typedef RadioItem.RadioField
 * @property {string} type - The type of the radio field
 * @property {string} label - A custom label for the radio field
 * @property {RadioItem.RadioFieldAttributes} [attributes] - Custom attributes for the radio field
 */
export interface RadioField {
    type: string;
    label: string;
    attributes?: RadioFieldAttributes;
}
/**
 * Attributes for the radio field component
 *
 * @typedef RadioItem.RadioFieldAttributes
 * @property {string} name - The name of the radio field
 * @property {string} type - The type of the radio field
 * @property {string} [value] - The value of the radio field
 * @property {string} [placeholder] - A custom placeholder for the radio field
 * @property {boolean} [required] - Whether or not the field must be required
 */
export interface RadioFieldAttributes {
    name: string;
    type: string;
    value?: string;
    placeholder?: string;
    required?: boolean;
}
/**
 * Radio form item
 * @category Components / Basic
 * @hideconstructor
 * @param {RadioItem.RadioItemProps} props - props
 * @extends {React.PureComponent}
 */
export declare class RadioItem extends React.PureComponent<RadioItemProps> {
    render(): JSX.Element;
}
