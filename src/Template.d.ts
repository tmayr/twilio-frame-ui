import * as React from "react";
import { Strings } from "./localization";
/**
 * Callback to render a template.
 * @callback CompiledTemplate
 * @param {Object} [context] context for template
 * @returns {string} text
 * @memberof Template
 */
export declare type CompiledTemplate = (context?: any) => string;
declare const templates: any;
export declare function initWithStrings<S extends Strings>(strings: S): void;
export { templates };
/**
 * @typedef TemplateProps
 * @property {string} [className] A custom class name passed to template node.
 * @property {Template.CompiledTemplate} [source] A function to compile the template string.
 * @property {string} [code] A template code of which the value needs to be used. If template with code does not exists, then code will be rendered.
 * @memberof Template
 */
export interface TemplateProps {
    className?: string;
    source?: CompiledTemplate;
    code?: string;
    [contextProps: string]: any;
}
/**
 * React component to render template strings
 * @category Components / Basic
 * @hideconstructor
 * @param {Template.TemplateProps} props
 * @extends {React.Component}
 */
export declare class Template extends React.Component<TemplateProps> {
    render(): JSX.Element;
    static defaultProps: {
        className: string;
    };
    private escapeHtml;
}
