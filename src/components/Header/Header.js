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
import { SUPPORTED_LANGUAGES } from "../../utils/constants";
import { changeLanguage } from "../../store/configSlice";

const headerVariants = {
  hidden: { y: 200 },
  visible: {
    y: 0,
    transition: { delay: 0.2, type: "spring", stiffness: 120 },
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

  const handleLanguageClick = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

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
              <List sx={{ marginLeft: "auto", display: "flex", alignItems: 'center' }}>
                <Link to="/">
                  <ListItemText className="mx-8">Home</ListItemText>
                </Link>

                <Link to="/about">
                  <ListItemText className="mx-8">About</ListItemText>
                </Link>

                <ListItemText sx={{margin: '0px 24px', }}>
                  <select onChange={handleLanguageClick} className="dark:bg-[#1D1F25]">
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <option value={lang.identifier} key={lang.identifier}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                </ListItemText>

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
