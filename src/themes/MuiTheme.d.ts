import { CoreThemeColors } from "../components/theme";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
/**
 * Creates MaterialUI theme for the passed colors.
 * @param  {CoreThemeColors} colors An object which specifies the base colors from 1 to 11.
 * @param  {boolean} lightTheme A boolean value used to set the contrast right.
 * @returns {ThemeOptions}
 *
 * @ignore
 */
export declare function createMuiTheme(colors: CoreThemeColors, lightTheme: boolean): ThemeOptions;
