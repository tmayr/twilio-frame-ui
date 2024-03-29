/// <reference types="react" />
/// <reference types="create-emotion" />
import { ThemeProps } from "../../theme";
interface StyledInputProps {
    error: boolean;
}
export declare const StyledInput: import("create-emotion-styled/types/react").StyledOtherComponent<StyledInputProps & ThemeProps, import("@material-ui/core/Input").InputProps, import("../../theme").Theme>;
export declare const Container: import("create-emotion-styled/types/react").StyledOtherComponent<ThemeProps, import("create-emotion-styled/types/common").StyledOtherProps<object & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement>, import("../../theme").Theme, import("react").Ref<any>>, import("../../theme").Theme>;
export {};
