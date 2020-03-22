

export type ThemeColors = {
    red: string,
    black: string,
    darkGrey: string,
    lightGrey: string,
    white: string  
}


export type Theme = {
    colors: ThemeColors;
    typo: {
        fontFamily: string;
        fontSize: string;
    }
}