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
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import img from "../../Images/hanif.jpg";
import { makeStyles } from '@material-ui/core';



const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const useStyle = makeStyles({
  socialIcon:{
    fontSize: "22px",
    padding: "5px",
    borderRadius: "50%",
    margin: "0px 2px",
    border: "2px solid #FE5205"
  },
  button:{
    lineHeight:"0px",
    padding:"0px",
    borderRadius:"0px"
  }
});

const Navbar = () => {
    const classes = useStyle();
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
        <AppBar position="static" sx={{ bgcolor: '#1E2132',top: 0, boxShadow: 5 , position:"fixed",zIndex:2 }}>
           
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{display:"flex"}}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, color:"#FE5205", display: { /* xs: 'none', */ md: 'flex' } ,fontWeight:'600'}}
            >
              Portfolio
            </Typography>
  
{/* 
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
                    <a href="#">
                    <FacebookIcon/>
                    </a>
                  </Typography> 
                  <Typography sx={{width:"100%" ,p:1}} textAlign="left">
                    <a href="#">
                    <LinkedInIcon />
                    </a>
                  </Typography>
                  <Typography sx={{width:"100%" ,p:1}} textAlign="left">
                  <Link to="/about"><TwitterIcon /></Link>
                  </Typography>
                  <Typography sx={{width:"100%" ,p:1}} textAlign="left">
                  <Link to="/about"><EmailIcon /></Link>
                  </Typography>

                  </MenuItem>
               
              </Menu>
            </Box> */}
          
            <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: 'flex' }}>
              
          
              <Button  onClick={handleCloseNavMenu}
               sx={{ 
                lineHeight:"0px",
                margin:"0px",
                minWidth:"0px",
                padding:"0px",
                borderRadius:"0px"}}
                >
              <a style={{textDecoration:"none",color:"#fff"}} href="#about"><FacebookIcon className={classes.socialIcon}/></a>
              </Button>

              <Button  onClick={handleCloseNavMenu} 
              sx={{ 
                lineHeight:"0px",
                margin:"0px",
                minWidth:"0px",
                padding:"0px",
                borderRadius:"0px"}}
              >
              <a style={{textDecoration:"none",color:"#fff"}} href="#about"><LinkedInIcon className={classes.socialIcon}/></a>
              </Button>

              <Button  onClick={handleCloseNavMenu} 
              sx={{ 
                lineHeight:"0px",
                margin:"0px",
                minWidth:"0px",
                padding:"0px",
                borderRadius:"0px"}}
              >
              <a style={{textDecoration:"none",color:"#fff"}} href="#contactArea"><TwitterIcon className={classes.socialIcon}/></a>
              </Button>

              <Button  onClick={handleCloseNavMenu} 
              sx={{ 
                lineHeight:"0px",
                margin:"0px",
                minWidth:"0px",
                padding:"0px",
                borderRadius:"0px"}}
              >
              <a style={{textDecoration:"none",color:"#fff"}} href="#contactArea"><EmailIcon className={classes.socialIcon}/></a>
              </Button>

             
              {/* <Button  onClick={handleCloseNavMenu} 
              sx={{ 
                lineHeight:"0px",
                margin:"0px",
                minWidth:"0px",
                padding:"0px",
                borderRadius:"0px"}}
              >
              <Avatar sx={{border: "2px solid #FE5205",fontSize:"22px"}} alt="Remy Sharp" src={`${img}`} />  
              </Button> */} 
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    );
};

export default Navbar;