import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hook/useAppDispatch";
import { logout } from "../../slice/authSlice";

const Logout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <Button variant="contained" size="small" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
