import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin:0;
        padding:0;
        font-family: 'Open Sans', sans-serif;
        background-color: #E5E5E5;
    }

    ::-webkit-scrollbar {
        width: 4px;
      }

    ::-webkit-scrollbar-thumb {
        background: #e0e0e0;
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }
`;
