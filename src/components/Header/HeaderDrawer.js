import { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { setIsDarkMode } from "../../store/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DrawerComp = () => {
  const dispatch = useDispatch();
  const [openDrawer, setOpenDrawer] = useState(false);
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);

  const handleToggleTheme = () => {
    dispatch(setIsDarkMode());
    setOpenDrawer(false);
  };

  return (
    <>
      <IconButton
        sx={{ color: isDarkMode ? "white" : "black", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div
          className={isDarkMode ? "bg-[#1D1F25] text-white min-h-screen" : ""}
        >
          <List sx={{ padding: "24px", opacity: "0.8" }}>
            <Link to="/">
              <ListItemButton sx={{ gap: "12px", borderRadius: "8px" }}>
                <HomeOutlinedIcon />
                <ListItemText>Home</ListItemText>
              </ListItemButton>
            </Link>

            <Link to="/about">
              <ListItemButton sx={{ gap: "12px", borderRadius: "8px" }}>
                <InfoOutlinedIcon />
                <ListItemText>About</ListItemText>
              </ListItemButton>
            </Link>

            <ListItemButton
              sx={{ gap: "12px", borderRadius: "8px" }}
              onClick={handleToggleTheme}
            >
              {isDarkMode ? (
                <LightModeOutlinedIcon />
              ) : (
                <DarkModeOutlinedIcon />
              )}
              <ListItemText>Switch Mode</ListItemText>
            </ListItemButton>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerComp;
