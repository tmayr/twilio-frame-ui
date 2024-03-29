import * as React from "react";
import { MenuThemeProps } from "./Menu";
export interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    selected?: boolean;
    styleOverride?: MenuThemeProps;
}
export declare const MenuItem: React.SFC<MenuItemProps>;
