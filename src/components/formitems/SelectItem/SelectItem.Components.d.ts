/// <reference types="react" />
/// <reference types="create-emotion" />
import { ThemeProps } from "../../theme";
interface StyledSelectProps {
    error: boolean;
}
export declare const StyledSelect: import("create-emotion-styled/types/react").StyledOtherComponent<StyledSelectProps & ThemeProps, import("@material-ui/core/Select").SelectProps, import("../../theme").Theme>;
export declare const Container: import("create-emotion-styled/types/react").StyledOtherComponent<object, import("create-emotion-styled/types/common").StyledOtherProps<object & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement>, import("../../theme").Theme, import("react").Ref<any>>, import("../../theme").Theme>;
export {};
