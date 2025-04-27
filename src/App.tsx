import { ThemeProvider } from "styled-components";
import Router from "./router/Router";
import { GlobalStyles } from "./styles/GlobalStyles";
import { useThemeStore } from "./lib/store/themeStore";
const App = () => {
  const { themeStyle } = useThemeStore();
  return (
    <>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </>
  );
};
export default App;
