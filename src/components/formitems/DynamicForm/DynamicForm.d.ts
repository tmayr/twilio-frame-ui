import * as React from "react";
import { InputField } from "../InputItem";
import { SelectField } from "../SelectItem";
import { TextareaField } from "../TextareaItem";
import { RadioField } from "../RadioItem";
import { ThemeProps } from "../../theme";
/**
 * Form Attributes
 * @typedef DynamicForm.FormAttributes
 * @property {string} [type] - The type of the form
 * @property {string} [name] - An optional name for the form
 * @property {boolean} [hideMessage]
 * @property {Array.<FormField>} fields - An array containing the form fields
 * @property {string} [submitLabel] - A custom label for the submit button
 * @property {string} [description] - A short description to be rendered inside the form
 * @property {string} [message] - If present, a message will be rendered after the form description
 * @property {boolean} [disabled] - Disable the form
 */
export interface FormAttributes {
    type?: string;
    name?: string;
    hideMessage?: boolean;
    fields: Array<FormField>;
    submitLabel?: string;
    description?: string;
    message?: string;
    disabled?: boolean;
    readOnly?: boolean;
}
/**
 * @typedef DynamicForm.FormFieldAttributes
 * @deprecated Please use a specific Field type Attributes interface instead
 */
export interface FormFieldAttributes {
    name: string;
    type: string;
    required: boolean;
    placeholder?: string;
    value?: string;
    upValue?: any;
    downValue?: any;
}
declare type Errors = {
    [key: string]: React.ReactChild;
};
declare type FormData = {
    [key: string]: string;
};
/**
 * Generic FormField types
 * @typedef {TypeUnion} FormField
 * @property {InputItem.InputField} InputField Input field
 * @property {TextareaItem.TextareaField} TextareaField Textarea field
 * @property {SelectItem.SelectField} SelectField Select field
 * @property {RadioItem.RadioField} RadioField Radio field
 * @memberof DynamicForm
 */
export declare type FormField = InputField | TextareaField | SelectField | RadioField;
/**
 * Generic FormField types with 'value'
 * @typedef {TypeUnion} FormFieldWithValue
 * @property {InputItem.InputField} InputField Input field
 * @property {TextareaItem.TextareaField} TextareaField Textarea field
 * @property {RadioItem.RadioField} RadioField Radio field
 * @memberof DynamicForm
 */
export declare type FormFieldWithValue = InputField | TextareaField | RadioField;
interface FormState {
    formData: FormData;
    errors: Errors;
    touchedFields: any;
    submitDisabled: boolean;
    mounted: boolean;
}
/**
 * Properties to define DynamicForm
 * @typedef DynamicForm.FormProps
 * @property {DynamicForm.FormAttributes} formAttributes - An object representing the form attributes
 * @property {} [message] - The message to be transmitted with the form
 * @property {Function} [submitFormCallback] - A callback function triggered after the form has been submitted
 */
export interface FormProps {
    formAttributes: FormAttributes;
    message?: any;
    submitFormCallback?: Function;
}
/**
 * Properties for the DynamicForm items
 * @typedef DynamicForm.ItemProps
 * @property {Function} handleChange - Function triggered on component onChange
 * @property {Function} handleBlur - Function triggered on component blur
 * @property {boolean} error - It represent the form item validation
 * @property {} stateData - The value to be passed to the form item
 * @extends {ThemeProps}
 */
export interface ItemProps extends ThemeProps {
    handleChange: (event: any) => void;
    handleBlur: (event: any) => void;
    error: boolean;
    stateData: any;
    touched: boolean;
}
/**
 * @class DynamicForm
 * @classdesc Dynamic form component
 * @category Components / Basic
 * @hideconstructor
 * @param {DynamicForm.FormProps} props - props
 * @extends {React.Component}
 */
export declare class DynamicForm extends React.Component<FormProps, FormState> {
    state: FormState;
    static getDerivedStateFromProps(props: FormProps, state: FormState): {
        formData: FormData;
        errors: Errors;
        mounted: boolean;
        submitDisabled: boolean;
        touchedFields: any;
    };
    submitForm: (e: React.FormEvent<Element>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Returns an accumulator object with an updated prop with the correct initial field value
     *
     * @static
     * @private
     * @param acc
     * @param initialField
     */
    private static getInitialFieldValue;
    /**
     * Returns an accumulator object with an updated property with the field error
     *
     * @private
     * @static
     * @param formData
     * @param errors Accumulator object
     * @param {FormField} field  - A field form the formAttributes.fields array
     * @return {Errors} Error
     */
    private static validateField;
    /**
     * Returns a new errors object populated with the provided invalid fields' errors
     * @private
     * @static
     * @param {Array<FormField>} formFields
     * @param {{}} formData
     * @return {Errors} errors
     */
    private static getErrors;
    /**
     * Returns true if any of the error keys is truthy
     * @private
     * @static
     * @param errors
     * @return {boolean}
     */
    private static hasErrors;
    render(): JSX.Element;
}
export {};
