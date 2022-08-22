import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { makeStyles } from '@material-ui/core';



const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const useStyle = makeStyles({
  socialIcon:{
    fontSize: "22px",
    background:"#1E2132",
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
  
          
            <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: 'flex' }}>
              
          
              <Button  onClick={handleCloseNavMenu}
               sx={{ 
                lineHeight:"0px",
                margin:"0px",
                minWidth:"0px",
                padding:"0px",
                borderRadius:"0px"}}
                >
              <a target="_blank" style={{textDecoration:"none",color:"#fff"}} href="https://web.facebook.com/profile.php?id=100055606685759&_rdc=1&_rdr"><FacebookIcon style={{background:"#1E2132"}} className={classes.socialIcon}/></a>
              </Button>

              <Button  onClick={handleCloseNavMenu} 
              sx={{ 
                lineHeight:"0px",
                margin:"0px",
                minWidth:"0px",
                padding:"0px",
                borderRadius:"0px"}}
              >
              <a target="_blank" style={{textDecoration:"none",color:"#fff"}} href="https://www.linkedin.com/in/mohammad-hanif-6a61b920b/"><LinkedInIcon style={{background:"#1E2132"}} className={classes.socialIcon}/></a>
              </Button>

              <Button  onClick={handleCloseNavMenu} 
              sx={{ 
                lineHeight:"0px",
                margin:"0px",
                minWidth:"0px",
                padding:"0px",
                borderRadius:"0px"}}
              >
              <a style={{textDecoration:"none",color:"#fff"}} href="#contactArea"><TwitterIcon style={{background:"#1E2132"}} className={classes.socialIcon}/></a>
              </Button>

              <Button  onClick={handleCloseNavMenu} 
              sx={{ 
                lineHeight:"0px",
                margin:"0px",
                minWidth:"0px",
                padding:"0px",
                borderRadius:"0px"}}
              >
              <a style={{textDecoration:"none",color:"#fff"}} href="#contactArea"><EmailIcon style={{background:"#1E2132"}} className={classes.socialIcon}/></a>
              </Button>

            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    );
};

export default Navbar;