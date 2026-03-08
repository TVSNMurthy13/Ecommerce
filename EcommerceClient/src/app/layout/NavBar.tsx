import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type NavBarProps = {
  toggleDarkMode: () => void;
  darkmode: boolean;
}

export default function NavBar({ toggleDarkMode, darkmode }: NavBarProps) {

  return (
    <AppBar position="fixed" sx={{ mb: 4 }}>
        <Toolbar>
            <Typography variant="h6" component="div">
                E - Commerce
            </Typography>
            <IconButton onClick={toggleDarkMode}>
              {darkmode ? <DarkMode /> : <LightMode sx={{color:"whitesmoke"}} />}
            </IconButton>
        </Toolbar>
      
    </AppBar>
  )
}
