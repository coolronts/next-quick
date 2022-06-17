export interface IAllColorTheme {
    [key: string]: IColorTheme
}

export interface IColorTheme {
    primaryTextColor: string;
    secondaryColor: string;
    backgroundColor: string;
}

export interface IColorMode{
    mode: string;
}