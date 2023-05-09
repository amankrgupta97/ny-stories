import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { logo } from "../../asset/logo";
import { RootState } from "../../store";
import Logout from "../Logout/Logout";
import ".//Header.css";

const Header: React.FC = () => {
  const isLogin = useSelector((state: RootState) => state.auth.success);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} alt="logo" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NY Stories
          </Typography>
          {isLogin ? <Logout /> : <></>}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
