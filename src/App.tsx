import "./App.css";
import theme from "./theme/index";
import { ThemeProvider } from "@mui/material";
import Header from "./component/Header/Header";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
