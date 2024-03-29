import MediumTheme, { GreyLight } from "./grey-light-theme";
import DarkTheme, { GreyDark } from "./grey-dark-theme";
import BlueDarkTheme, { FlexDark } from "./flex-dark-theme";
import BlueMediumTheme, { FlexLight } from "./flex-light-theme";
import BaseTheme, { createTheme } from "./baseTheme";
import { CoreThemeColors } from "../components/theme";
/**
 * Theme definition map.
 * @typedef ThemeColorsDefinition
 * @property {CoreThemeColors} colors An object which specifies the base colors from 1 to 11.
 */
export interface ThemeColorsDefinition {
    colors: CoreThemeColors;
}
/**
 * @deprecated use ThemeColorsDefinition instead
 */
export interface ThemeDef extends ThemeColorsDefinition {
}
export { MediumTheme, DarkTheme, BlueMediumTheme, BlueDarkTheme };
export { BaseTheme, GreyDark, GreyLight, FlexDark, FlexLight };
export { createTheme };
