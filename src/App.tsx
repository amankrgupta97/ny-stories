import "./App.css";
import theme from "./theme/index";
import { ThemeProvider } from "@mui/material";
import Header from "./component/Header/Header";
import AppRouter from "./routes/AppRouter";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import LoadingScreen from "./component/LoadingScreen/LoadingScreen";
import { isLoadingSelector } from "./selector/statusSelector";
import { loadingList } from "./helpers/ActionTracker";

function App() {
  const isLogin = useSelector((state: RootState) => state.auth.success);
  const isLoad = useSelector((state: RootState) =>
    isLoadingSelector(loadingList, state)
  );
  return (
    <ThemeProvider theme={theme}>
      <LoadingScreen show={isLoad} />
      <Header isLogged={isLogin} />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
