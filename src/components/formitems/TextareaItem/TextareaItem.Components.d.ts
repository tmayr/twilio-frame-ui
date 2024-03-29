/// <reference types="react" />
/// <reference types="create-emotion" />
import { ThemeProps } from "../../theme";
interface StyledTextAreaProps {
    error: boolean;
}
export declare const StyledTextArea: import("create-emotion-styled/types/react").StyledOtherComponent<StyledTextAreaProps & ThemeProps, import("@material-ui/core/Input").InputProps, import("../../theme").Theme>;
export declare const Container: import("create-emotion-styled/types/react").StyledOtherComponent<object, import("create-emotion-styled/types/common").StyledOtherProps<object & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement>, import("../../theme").Theme, import("react").Ref<any>>, import("../../theme").Theme>;
export {};
