import { createGlobalStyle } from "styled-components";
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgtotal: string;
  }
}

export const GlobalStyles = createGlobalStyle`
    body{
        margin:0;
        padding:0;
        box-sizing:border-box;
        background-color:${({ theme }) => theme.bgtotal};
        font-family:"Poppins",sans-serif;
        color:#fff;
    }
    

`;
