export declare const darkTheme: {
    palette: {
        primary: {
            main: string;
        };
        secondary: {
            main: string;
        };
        type: "dark";
    };
    sidebar: {
        width: number;
    };
    overrides: {
        MuiAppBar: {
            colorSecondary: {
                color: string;
                backgroundColor: string;
            };
        };
        MuiButtonBase: {
            root: {
                '&:hover:active::after': {
                    content: string;
                    display: string;
                    width: string;
                    height: string;
                    position: string;
                    top: number;
                    right: number;
                    backgroundColor: string;
                    opacity: number;
                    borderRadius: string;
                };
            };
        };
    };
    props: {
        MuiButtonBase: {
            disableRipple: boolean;
        };
    };
};
export declare const lightTheme: {
    palette: {
        primary: {
            main: string;
        };
        secondary: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
        background: {
            default: string;
        };
        type: "light";
    };
    shape: {
        borderRadius: number;
    };
    sidebar: {
        width: number;
    };
    overrides: {
        RaMenuItemLink: {
            root: {
                borderLeft: string;
            };
            active: {
                borderLeft: string;
            };
        };
        MuiPaper: {
            elevation1: {
                boxShadow: string;
            };
            root: {
                border: string;
                backgroundClip: string;
            };
        };
        MuiButton: {
            contained: {
                backgroundColor: string;
                color: string;
                boxShadow: string;
            };
        };
        MuiButtonBase: {
            root: {
                '&:hover:active::after': {
                    content: string;
                    display: string;
                    width: string;
                    height: string;
                    position: string;
                    top: number;
                    right: number;
                    backgroundColor: string;
                    opacity: number;
                    borderRadius: string;
                };
            };
        };
        MuiAppBar: {
            colorSecondary: {
                color: string;
                backgroundColor: string;
            };
        };
        MuiLinearProgress: {
            colorPrimary: {
                backgroundColor: string;
            };
            barColorPrimary: {
                backgroundColor: string;
            };
        };
        MuiFilledInput: {
            root: {
                backgroundColor: string;
                '&$disabled': {
                    backgroundColor: string;
                };
            };
        };
        MuiSnackbarContent: {
            root: {
                border: string;
            };
        };
    };
    props: {
        MuiButtonBase: {
            disableRipple: boolean;
        };
    };
};
