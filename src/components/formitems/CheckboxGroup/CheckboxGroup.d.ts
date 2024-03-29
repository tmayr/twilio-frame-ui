import * as React from "react";
import { ItemProps } from "../DynamicForm";
/**
 * CheckboxGroup properties
 * @typedef CheckboxGroup.CheckboxGroupProps
 * @property {CheckboxGroup} field - The checkboxGroup field component
 * @property {function} handleBlur - Optional callback to be invoked on input blur
 * @extends {ItemProps}
 */
export interface CheckboxGroupProps extends Omit<ItemProps, "handleBlur"> {
    field: CheckboxGroupField;
    handleBlur?: (event: any) => void;
}
/**
 * @typedef CheckboxGroup.CheckboxGroup
 * @property {string} [label] - A custom label for the input field
 * @property {CheckboxGroup.CheckboxGroupAttributes} [attributes] - Custom attributes for the form field
 * @property {CheckboxGroup.CheckboxGroupOption[]} [options] - List of options
 */
export interface CheckboxGroupField {
    label?: string;
    attributes?: CheckboxGroupAttributes;
    options?: Array<CheckboxGroupOption>;
}
/**
 * Attributes for the CheckboxGroup component
 *
 * @typedef CheckboxGroup.CheckboxGroupAttributes
 * @property {string} name - The name of all child checkboxes
 * @property {boolean} [readOnly] - Whether the user can interact with checkboxes
 * @property {boolean} [required] - Whether or not the field one of the fields should be selected
 */
export interface CheckboxGroupAttributes {
    name: string;
    required?: boolean;
    readOnly?: boolean;
}
/**
 * @typedef CheckboxGroup.CheckboxGroupOption
 * @property {string} [value] - Value of the checkbox field
 * @property {string} [id] - A custom id for the input field
 * @property {string} [label] - A human-readable label for the field
 */
export interface CheckboxGroupOption {
    value?: string;
    id?: string;
    label?: string;
}
/**
 * CheckboxGroup form item
 *
 * @category Components / Basic
 * @hideconstructor
 * @param {CheckboxGroup.CheckboxGroupProps} props - props
 * @extends {React.PureComponent}
 */
export declare class CheckboxGroup extends React.PureComponent<CheckboxGroupProps> {
    value: Array<any>;
    render(): JSX.Element;
    handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    private renderInputs;
}
