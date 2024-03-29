/// <reference types="react" />
/// <reference types="create-emotion" />
import { Alignments, TabHeaderProps } from "./TabHeader";
export declare type TabHeaderSubProps = Pick<TabHeaderProps, "isActive">;
interface TabHeaderContainerProps {
    alignment: Alignments;
}
export declare const TabHeaderContainer: import("create-emotion-styled/types/react").StyledOtherComponent<TabHeaderContainerProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../theme").Theme>;
export declare const TabHeaderIndicatorContainer: import("create-emotion-styled/types/react").StyledOtherComponent<Pick<TabHeaderProps, "isActive">, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../theme").Theme>;
interface TabLabelProps {
    isActive: boolean;
    onClick: () => {};
}
export declare const TabLabel: import("create-emotion-styled/types/react").StyledOtherComponent<TabLabelProps, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, import("../theme").Theme>;
export declare const IconWrapper: import("create-emotion-styled/types/react").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../theme").Theme>;
export {};
