import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <Button variant="contained" size="small" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
