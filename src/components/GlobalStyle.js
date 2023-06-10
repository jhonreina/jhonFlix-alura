import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        box-sizing:border-box;
        margin:0;
        padding:0;
        text-decoration:none;
        color: #fff;   
        background: rgba(0, 0, 0, 0.9);
        font-family: 'Roboto', sans-serif;
    }

    

`;

export default GlobalStyle;