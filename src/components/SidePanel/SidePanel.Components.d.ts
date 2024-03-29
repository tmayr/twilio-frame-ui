/// <reference types="react" />
/// <reference types="create-emotion" />
import { CSSProps } from "../CSSProps";
export declare const Title: import("create-emotion-styled/types/react").StyledOtherComponent<object, import("../FlexBox").FlexBoxProperties, import("../theme").Theme>;
interface WithThemeOverride {
    themeOverride: CSSProps;
}
export declare const HeaderContainer: import("create-emotion-styled/types/react").StyledOtherComponent<WithThemeOverride, import("../FlexBox").FlexBoxProperties, import("../theme").Theme>;
export interface WrapperProps {
    isHidden: boolean;
}
export declare const Wrapper: import("create-emotion-styled/types/react").StyledOtherComponent<WrapperProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../theme").Theme>;
export declare const MainContainer: import("create-emotion-styled/types/react").StyledOtherComponent<WithThemeOverride, import("../FlexBox").FlexBoxProperties, import("../theme").Theme>;
export declare const StyledIconButton: import("create-emotion-styled/types/react").StyledOtherComponent<WithThemeOverride, import("../IconButton").IconButtonProps, import("../theme").Theme>;
export {};
