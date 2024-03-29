import * as React from "react";
/**
 * Properties of the Italic component
 *
 * @private
 * @typedef Italic.ItalicProps
 * @property {string} text - Text to be included in the component
 */
export interface ItalicProps {
    text: string;
}
/**
 * This component renders a italic text
 *
 * @private
 * @category Components / Basic
 * @hideconstructor
 * @param {Italic.ItalicProps} props
 * @extends {React.PureComponent}
 */
export declare class Italic extends React.PureComponent<ItalicProps> {
    render(): JSX.Element;
}
