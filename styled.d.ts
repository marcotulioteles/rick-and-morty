import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      secondary: string;
      highlight: string;
      text: string;
      title: string;
    };
  }
}