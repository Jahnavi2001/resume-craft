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

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List sx={{ padding: "24px", opacity: "0.8" }}>
          <ListItemButton sx={{ gap: "12px", borderRadius: "8px" }}>
            <HomeOutlinedIcon />
            <ListItemText>Home</ListItemText>
          </ListItemButton>

          <ListItemButton sx={{ gap: "12px", borderRadius: "8px" }}>
            <InfoOutlinedIcon />
            <ListItemText>About</ListItemText>
          </ListItemButton>

          <ListItemButton sx={{ gap: "12px", borderRadius: "8px" }}>
            <DarkModeOutlinedIcon />
            <ListItemText>Switch Mode</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};

export default DrawerComp;
