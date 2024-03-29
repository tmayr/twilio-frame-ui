/// <reference types="react" />
/// <reference types="create-emotion" />
import { ThemeProps } from "../../theme";
import { IconButtonProps } from "../../IconButton";
interface ExpandableComponentProps extends ThemeProps {
    isExpanded: boolean;
    showExpandToggle: boolean;
}
export declare const Container: import("create-emotion-styled/types/react").StyledOtherComponent<ExpandableComponentProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../theme").Theme>;
export declare const Header: import("create-emotion-styled/types/react").StyledOtherComponent<ExpandableComponentProps, import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, import("../../theme").Theme>;
export declare const InnerHeader: import("create-emotion-styled/types/react").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../theme").Theme>;
export declare const Title: import("create-emotion-styled/types/react").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../theme").Theme>;
export declare const Label: import("create-emotion-styled/types/react").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../theme").Theme>;
interface ExpandIconButton extends ThemeProps, IconButtonProps {
    id?: string;
}
export declare const ExpandIconButton: import("create-emotion-styled/types/react").StyledOtherComponent<ExpandIconButton, IconButtonProps, import("../../theme").Theme>;
export declare const FieldContainer: import("create-emotion-styled/types/react").StyledOtherComponent<ExpandableComponentProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../theme").Theme>;
export {};
