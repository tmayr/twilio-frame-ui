/// <reference types="react" />
/// <reference types="create-emotion" />
import { BadgeProps } from "./Badge.definitions";
import { CSSProps } from "../CSSProps";
interface WithThemeOverride {
    themeOverride: CSSProps;
}
export declare const OuterCircle: import("create-emotion-styled/types/react").StyledOtherComponent<Pick<BadgeProps, "position" | "variant"> & WithThemeOverride, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../theme").Theme>;
export declare const InnerCircle: import("create-emotion-styled/types/react").StyledOtherComponent<Pick<BadgeProps, "variant"> & WithThemeOverride, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../theme").Theme>;
export declare const TextContainer: import("create-emotion-styled/types/react").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, import("../theme").Theme>;
export {};
