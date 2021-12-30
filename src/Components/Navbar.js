import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
    return (
        <AppBar position="static" sx={{ bgcolor: '#1E2132',top: 0, boxShadow: 0 , position:"sticky" }}>
           
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{display:"flex"}}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { /* xs: 'none', */ md: 'flex' } }}
            >
              Portfolio
            </Typography>
  

            <Box sx={{  flexGrow: 1,justifyContent: 'flex-end',  display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    width:"100%",
                  display: { xs: 'block', md: 'none' },
                }}
              >
                
                  <MenuItem sx={{width:"100%", display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }} onClick={handleCloseNavMenu}>
                  <Typography sx={{width:"100%",p:1}} textAlign="left">
                  <Link to="/home">Home</Link></Typography> 
                  <Typography sx={{width:"100%" ,p:1}} textAlign="left">
                  <Link to="/about">AboutMe</Link>
                      </Typography>
                  <Typography sx={{width:"100%" ,p:1}} textAlign="left">Resume</Typography>
                  <Typography sx={{width:"100%" ,p:1}} textAlign="left">Testimonial</Typography>
                  <Typography sx={{width:"100%" ,p:1}} textAlign="left">ContactMe</Typography>
                  </MenuItem>
               
              </Menu>
            </Box>
          {/*   <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              LOGO
            </Typography> */}
            <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'none', md: 'flex' } }}>
              
            <Link to="/home">
            <Button  onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
            Home</Button> </Link>


              <Button  onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              <a style={{textDecoration:"none",color:"#fff"}} href="#about">AboutMe</a>
              </Button>
              <Button  onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              <a style={{textDecoration:"none",color:"#fff"}} href="#contactArea">ContactMe</a>
              </Button>

              <Button  onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Resume</Button> 
              <Button  onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Testimonial</Button> 
              <Button  onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>ContactMe</Button> 
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    );
};

export default Navbar;