import * as React from "react";
import { CSSProps } from "../CSSProps";
/**
 * @typedef UserCard.UserCardThemeProps
 * @property {CSSProps} AvatarContainer container for avatar
 * @property {CSSProps} AvailabilityContainer container for availability badge
 */
export interface UserCardThemeProps {
    AvatarContainer: CSSProps;
    AvailabilityContainer: CSSProps;
}
/**
 * Properties of the user card
 * @typedef UserCard.UserCardProps
 * @property {string} [className] - An additional class name for the user card component
 * @property {boolean} [large] - If set, renders a large version of the user card
 * @property {React.ReactChild} firstLine - The copy for the first line
 * @property {React.ReactChild} secondLine - The copy for the second line
 * @property {string} [imageUrl] - An image url
 * @property {boolean} [isAvailable] - Set the availability icon style
 * @property {} innerRef - A reference to the element
 * @property {Function} [onClick] - A handler for the button click
 * @property {boolean} [lightHover] - Set a light hover style
 */
export interface UserCardProps {
    className?: string;
    large?: boolean;
    firstLine: React.ReactChild;
    secondLine: React.ReactChild;
    imageUrl?: string;
    isAvailable?: boolean;
    innerRef?: any;
    onClick?: (event: any) => void;
    lightHover?: boolean;
}
export interface UserCardState {
    verifiedImageUrl?: string;
}
/**
 * @classdesc This component renders a user card
 * Can be themed with [theme.UserCard]{@link UserCard.UserCardThemeProps}
 * @category Components / Basic
 * @hideconstructor
 * @param {UserCard.UserCardProps} UserCardProps - props
 * @extends {React.PureComponent}
 */
export declare class UserCard extends React.PureComponent<UserCardProps, UserCardState> {
    state: UserCardState;
    constructor(props: UserCardProps);
    componentWillReceiveProps(nextProps: UserCardProps): void;
    private validateImageUrl;
    render(): JSX.Element;
    private renderContent;
}
