import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Link, useLocation } from 'react-router-dom'
import { Divider } from '@mui/material';

const drawerWidth = 240;

type NavbarProps = {
    children: React.ReactNode;
};
export default function Navbar({ children }: NavbarProps) {
    const location = useLocation()
    const path = location.pathname

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Clipped drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItem key={1} disablePadding>
                            <ListItemButton component={Link} to="/home" selected={"/home" === path}>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Home"} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem key={2} disablePadding>
                            <ListItemButton component={Link} to="/about" selected={"/about" === path}>
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primary={"About"} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider/>
                    <List>
                        <ListItem key={3} disablePadding>
                            <ListItemButton component={Link} to="/login" selected={"/login" === path}>
                                <ListItemIcon>
                                    <LoginIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Login"} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem key={4} disablePadding>
                            <ListItemButton component={Link} to="/signup" selected={"/signup" === path}>
                                <ListItemIcon>
                                    <HowToRegIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Signup"} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}
