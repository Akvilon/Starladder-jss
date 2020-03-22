import { Theme } from "./theme.types";
import { MainThemeColors } from "./colors.styles";
import { baseFontFamily, baseFontSize } from "./variables.styles";

export const mainTheme: Theme = {
    colors: MainThemeColors,
    typo: {
        fontFamily: baseFontFamily.join(', '),
        fontSize: baseFontSize,
    }
}

