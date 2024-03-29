import * as React from "react";
/**
 * Props to define the content of an AggregatedDataTile
 *
 * @typedef AggregatedDataTileProps
 * @property {React.ReactChild} title - The main title of the tile
 * @property {string} [content] - The textual content of the tile. If props.children is provided, this prop won't be rendered.
 * @property {React.ReactChild} [description] - A secondary description of the tile.
 * @property {string} [className] - - An additional class name for the tile
 * @memberof AggregatedDataTile
 */
export interface AggregatedDataTileProps {
    title: React.ReactChild;
    content?: string;
    description?: React.ReactChild;
    className?: string;
}
/**
 * This component is used to display KPIs
 *
 * @category Components / Basic
 * @hideconstructor
 * @param {AggregatedDataTile.AggregatedDataTileProps} props - props
 * @extends {React.PureComponent}
 */
export declare class AggregatedDataTile extends React.PureComponent<AggregatedDataTileProps> {
    render(): JSX.Element;
}
