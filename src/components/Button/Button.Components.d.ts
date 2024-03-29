/// <reference types="react" />
/// <reference types="create-emotion" />
import { Theme } from "../theme";
import { ButtonThemeProps } from "./Button";
export interface StyledButtonProps {
    theme?: Theme;
    override?: ButtonThemeProps;
    roundCorners?: boolean;
    disabled?: boolean;
    isLink?: boolean;
}
export declare function getDisabledBackground(props: StyledButtonProps): string;
export declare function getColor(props: StyledButtonProps): string | Array<string>;
export declare function getHoverBackground(props: StyledButtonProps): string;
export declare const StyledButton: import("create-emotion-styled/types/react").StyledOtherComponent<StyledButtonProps, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, Theme>;
