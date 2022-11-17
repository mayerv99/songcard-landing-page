import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #7615F3;
        --text-color: #101820;
        --text-color-light: #454545;
        --background-color: #dddddd;
    }

    * {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        color: #101820;
    }
`;
