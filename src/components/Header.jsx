import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NotesIcon from "@mui/icons-material/Notes";

const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar className="tool_bar" variant="dense">
          <NotesIcon />
          <Typography>My Notes</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
