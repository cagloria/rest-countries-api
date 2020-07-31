import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    bodyBG: "hsl(0, 0%, 98%)",
    elementBG: "hsl(0, 0%, 100%)",
    text: "hsl(200, 15%, 8%)",
    inputText: "hsl(0, 0%, 52%)",
    buttonHover: "hsl(0, 0%, 90%)",
    linkHover: "hsl(200, 25%, 44%)",
};

export const darkTheme = {
    bodyBG: "hsl(207, 26%, 17%)",
    elementBG: "hsl(209, 23%, 22%)",
    text: "hsl(0, 0%, 100%)",
    inputText: "hsl(0, 0%, 100%)",
    buttonHover: "hsl(209, 23%, 42%)",
    linkHover: "hsl(200, 50%, 70%)",
};

export const GlobalStyles = createGlobalStyle`
    body {
        color: ${({ theme }) => theme.text};
        background-color: ${({ theme }) => theme.bodyBG};
    }

    a {
        color: ${({ theme }) => theme.text};
        &:hover:not(.button-link) {
            color: ${({ theme }) => theme.linkHover};
        }
    }

    ion-icon {
        color: ${({ theme }) => theme.inputText};
    }

    .element {
        color: ${({ theme }) => theme.text};
        background-color: ${({ theme }) => theme.elementBG};
    }

    .theme-switch {
        color: ${({ theme }) => theme.text};
    }

    .select {
        option {
            color: ${({ theme }) => theme.text};
        }
    }

    .text-field {
        color: ${({ theme }) => theme.text};
        &::placeholder {
            color: ${({ theme }) => theme.inputText};
        }
    }

    .button-link {
        &:hover {
            background-color: ${({ theme }) => theme.buttonHover};
        }
    }    
`;
