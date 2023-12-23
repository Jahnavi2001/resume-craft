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
import logo from "../../assets/logo.png";
import HeaderDrawer from "./HeaderDrawer";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { setIsDarkMode } from "../../store/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: { y: 200 },
  visible: {
    y: 0,
    transition: { delay: 0.2, type: "spring", stiffness: 120 }
  },
};
const Header = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const dispatch = useDispatch();
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);

  const handleToggleTheme = () => {
    dispatch(setIsDarkMode());
  };

  return (
    <motion.div variants={headerVariants} initial="hidden" animate="visible">
      <Box sx={{ display: "flex" }}>
        <AppBar
          sx={{
            padding: "10px 58px",
            boxShadow: "none",
            color: isDarkMode ? "white" : "black",
            backgroundColor: isDarkMode ? "#1D1F25" : "#FFFFFf",
          }}
          className="border-b border-b-slate-100 dark:border-b-slate-800"
        >
          <Toolbar>
            <img
              src={logo}
              alt="logo"
              className="w-24 h-12 border rounded-lg"
            />
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
                  <span onClick={handleToggleTheme} className="cursor-pointer">
                    {isDarkMode ? (
                      <LightModeOutlinedIcon />
                    ) : (
                      <DarkModeOutlinedIcon />
                    )}
                  </span>
                </ListItemText>
              </List>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </motion.div>
  );
};

export default Header;
