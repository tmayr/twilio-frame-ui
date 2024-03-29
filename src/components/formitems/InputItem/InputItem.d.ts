import * as React from "react";
import { ItemProps } from "../DynamicForm";
/**
 * InputField properties
 * @typedef InputItem.InputItemProps
 * @property {InputField} field - The input field component
 * @extends {ItemProps}
 */
export interface InputItemProps extends ItemProps {
    field: InputField;
}
/**
 * @typedef InputItem.InputField
 * @property {string} type - The type of the input field
 * @property {string} label - A custom label for the input field
 * @property {InputItem.InputFieldAttributes} [attributes] - Custom attributes for the form field
 */
export interface InputField {
    type: string;
    label: string;
    attributes?: InputFieldAttributes;
}
/**
 * Attributes for the input field component
 *
 * @typedef InputItem.InputFieldAttributes
 * @property {string} name - The name of the input field
 * @property {string} type - The type of the input field
 * @property {string} [value] - The value of the input field
 * @property {string} [placeholder] - A custom placeholder for the input field
 * @property {boolean} [required] - Whether or not the field must be required
 */
export interface InputFieldAttributes {
    name: string;
    type: string;
    value?: string;
    placeholder?: string;
    required?: boolean;
    readOnly?: boolean;
}
/**
 * Input form item
 * @category Components / Basic
 * @hideconstructor
 * @param {InputItem.InputItemProps} props
 * @extends {React.PureComponent}
 */
export declare class InputItem extends React.PureComponent<InputItemProps> {
    render(): JSX.Element;
}
