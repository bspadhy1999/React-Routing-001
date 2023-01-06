import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      Urban Science Mep
      </Typography>
      <Divider />
      <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>
            <Link to="/" style={{textDecoration:"none",color:"black"}}><ListItemText primary="Home" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>
            <Link to="/about" style={{textDecoration:"none",color:"black"}}><ListItemText primary="About" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>
            <Link to="/project" style={{textDecoration:"none",color:"black"}}><ListItemText primary="Project" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>
            <Link to="/services" style={{textDecoration:"none",color:"black"}}><ListItemText primary="Services" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>
            <Link to="/blog" style={{textDecoration:"none",color:"black"}}><ListItemText primary="Blog" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>
            <Link to="/contact" style={{textDecoration:"none",color:"black"}}><ListItemText primary="Contact" /></Link>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" style={{ background: 'white' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
            style={{color:"black"}}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
          >
            <img src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" alt="" />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button sx={{ color: '#fff' }}><Link to="/" style={{textDecoration:"none",color:"black"}}>Home</Link></Button>
              <Button sx={{ color: '#fff' }}><Link to="/about" style={{textDecoration:"none",color:"black"}}>About</Link></Button>
              <Button sx={{ color: '#fff' }}><Link to="/project" style={{textDecoration:"none",color:"black"}}>Project</Link></Button>
              <Button sx={{ color: '#fff' }}><Link to="/services" style={{textDecoration:"none",color:"black"}}>Services</Link></Button>
              <Button sx={{ color: '#fff' }}><Link to="/blog" style={{textDecoration:"none",color:"black"}}>Blog</Link></Button>
              <Button sx={{ color: '#fff' }}><Link to="/contact" style={{textDecoration:"none",color:"black"}}>Contact</Link></Button>
          </Box>
          <button className='p-2' style={{backgroundColor:"#596AFF", border:"2px solid white",borderRadius:"25px"}}><Link to="/services" style={{textDecoration:"none",color:"white"}}>Enquire Now</Link></button>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar/>
      </Box>
    </Box>
  );
}

export default Navbar;