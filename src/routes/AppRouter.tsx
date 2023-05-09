import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Login from "../component/Login/Login";
import { RootState } from "../store";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../component/Home/Home";
import SearchScreen from "../component/SearchScreen/SearchScreen";
import StoriesDetail from "../component/StoriesDetail/StoriesDetail";
import PageNotFound from "../component/PageNotFound/PageNotFound";

function AppRouter() {
  const user = useSelector((state: RootState) => state.auth.success);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute auth={user}>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/search-article"
        element={
          <ProtectedRoute auth={user}>
            <SearchScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/stories-detail/:type/:id"
        element={
          <ProtectedRoute auth={user}>
            <StoriesDetail />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRouter;
