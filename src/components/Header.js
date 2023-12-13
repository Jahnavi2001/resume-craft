import {
  AppBar,
  Box,
  Toolbar,
  useMediaQuery,
  useTheme,
  ListItemText,
  List,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import HeaderDrawer from "./HeaderDrawer";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Header = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar sx={{ background: "#063970", padding: "10px 58px" }}>
        <Toolbar>
          <img src={logo} alt="logo" className="w-24 h-12" />
          {isMatch ? (
            <HeaderDrawer />
          ) : (
            <List sx={{ marginLeft: "auto", display: "flex" }}>
              <Link to="/">
                <ListItemText className="mx-8">Home</ListItemText>
              </Link>

              <Link to="/about">
                <ListItemText className="mx-8">About</ListItemText>
              </Link>

              <ListItemText className="mx-8">
                <DarkModeOutlinedIcon />
              </ListItemText>
            </List>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
