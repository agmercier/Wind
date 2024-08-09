import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

const myTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary0,
        card: colors.dark1,
        text: colors.white,
        border: colors.dark3,
    }
}

export default myTheme;