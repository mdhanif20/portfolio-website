import { Logout, Settings} from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; 
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import Box from '@mui/material/Box';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';
import ListIcon from '@mui/icons-material/List';
import WorkIcon from '@mui/icons-material/Work';
import WaterDamageIcon from '@mui/icons-material/WaterDamage';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import ContactsIcon from '@mui/icons-material/Contacts';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import Stack from '@mui/material/Stack';


const useStyle = makeStyles({
    container:{
        padding:"40px 0px .09px 20px", 
        height:"100vh",
        position: "sticky",
        color:'#fff',
        
    },
    item:{
        display:"flex",
        alignItems:"center",
        margin:"0px 0px 25px 0px",
        padding:'0px',
        cursor:"pointer",
        border:'none',
        background:"transparent"
        /* '&:hover':{
            transform: 'scale(1.01)',
            transition:".1s"
        } */
        
    },
    icon:{
        marginRight:"6px",
        fontSize:"32px",
        border:'none',
        background:"transparent"
    },
    text:{
        fontWeight:500,
        fontSize:"17px",
        background:"transparent"
    },
    linkDesign:{
        textDecoration:"none",
        color:"#fff"
    }
    ,
    containerSmall:{
        padding:"20px 5px", 
        paddingBottom:".09px",
        height:"98vh", 
        position: "sticky",
        color:'#fff',
        top:0
    },
    textSmall:{
        fontWeight:800,
        // border:"2px solid #FE5205", 
        padding:"2px 16px",
        borderRadius:"30px",
        backgroundColor:"#1E2132",
        marginLeft:"-100%",
        opacity:0
    },
    itemSmall:{
        display:"flex",
        alignItems:"center",
        marginBottom:"40px",
        cursor:"pointer",
       /*  '&:hover $textSmall':{
            marginLeft:"0",
            opacity:1,
            transition:".6s"
        } */
        
    },
    
    iconSmall:{
        marginRight:"6px",
    }
   
})
 


const LeftSideBar = () => {
    const classes = useStyle();

    return (
        // boxShadow:"-4px 1px 15px #101010 !important" 
        <Box sx={{display:"flex",position:'fixed',marginTop:"55px", zIndex:1}}>
            <Box sx={{display:{xs:"none",sm:"none",md:"block"}}}>
            <Container style={{borderRight:"2px solid #232222"}} sx={{ bgcolor:"#1E2132",width:"180px",boxShadow:"-4px 1px 10px #101010 !important",borderRadius:"0px",border:"0px"}}
                 className={classes.container}>
             
            <Box style={{border:"none"}}  className={classes.item}>
                    <Link to="/" style={{textDecoration:"none"}}>
                        <Button sx={{  color: 'white', display: 'flex',padding:"6px 0px"}}>
                        <WaterDamageIcon sx={{fontSize:"1.8rem"}} style={{background:"transparent",border:"none"}}  className={classes.item}/>
                        <span className={classes.text}>Home</span>
                        </Button> 
                    </Link>
                    </Box>   
                    <Box style={{border:"none"}}  className={classes.item}>
                    <Link to="/about" style={{textDecoration:"none"}}>
                        <Button sx={{ color: 'white', display: 'flex',padding:"6px 0px" }}>
                        <PersonIcon   sx={{fontSize:"1.8rem"}} style={{background:"transparent",border:"none"}}  className={classes.item}/>
                        <span className={classes.text}>About</span>
                        </Button> 
                    </Link>
                    </Box>  
                    
                    <Box style={{border:"none"}}  className={classes.item}>
                    <Link to="/services" style={{textDecoration:"none"}}>  
                        <Button sx={{ color: 'white', display: 'flex',padding:"6px 0px" }}>
                        <ListIcon   sx={{fontSize:"1.8rem"}} style={{background:"transparent",border:"none"}}  className={classes.item}/>
                        <span className={classes.text}>Services</span>
                        </Button> 
                    </Link>
                    </Box>   
                    <Box style={{border:"none"}}  className={classes.item}>
                        <Link to="/projects" style={{textDecoration:"none"}}>
                            <Button sx={{ color: 'white', display: 'flex' ,padding:"6px 0px"}}>
                            <WorkIcon  sx={{fontSize:"1.8rem"}}  style={{background:"transparent",border:"none"}}  className={classes.item}/>
                            <span className={classes.text}>Projects</span>
                            </Button> 
                        </Link>
                    </Box>   
                    <Box style={{border:"none"}}  className={classes.item}>
                        <Button href="https://drive.google.com/file/d/1dc_vL62vUkQqzHTvTUkuvgAqMnuHcQw_/view?usp=sharing" target="-blank" sx={{ color: 'white', display: 'flex',padding:"6px 0px" }}>
                        < FileOpenIcon  sx={{fontSize:"1.8rem"}} style={{background:"transparent",border:"none"}}  className={classes.item}/>
                        <span className={classes.text}>Resume</span>
                        </Button> 
                    </Box>   
                    <Box style={{border:"none"}}  className={classes.item}>
                         <Link to="/contact" style={{textDecoration:"none"}}> 
                        <Button sx={{ color: 'white', display: 'flex',padding:"6px 0px" }}>
                        <ForumIcon  sx={{fontSize:"1.8rem"}}  style={{background:"transparent",border:"none"}}  className={classes.item}/>
                        <span className={classes.text}>Contact</span>
                        </Button> 
                        </Link>
                    </Box> 
                          
            </Container>
            
            </Box>

            <Box sx={{display:{xs:"block",sm:"block",md:"none"},zIndex:1,boxShadow: 5}}>
                    <Container sx={{ bgcolor:"#1E2132",width:"34px",paddingLeft:"5px",paddingRight:"38px"}} className={classes.containerSmall}>
                        <Box className={classes.itemSmall}>
                        <Link to="/" style={{textDecoration:"none"}}>
                            <WaterDamageIcon sx={{marginLeft:{xs:0,sm:"-14px",md:0}}} style={{fontSize:"30px"}} className={classes.iconSmall}/>
                            <Typography style={{fontWeight:400}} className={classes.textSmall}>Home</Typography>
                        </Link>
                        </Box>
                    
                    <Box className={classes.itemSmall}>
                    <Link to="/about" style={{textDecoration:"none"}}>
                        <PersonIcon sx={{marginLeft:{xs:0,sm:"-14px",md:0}}} style={{fontSize:"30px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:400}} className={classes.textSmall}>About</Typography>
                        </Link>
                    </Box>
                    <Box className={classes.itemSmall}>
                    <Link to="/services" style={{textDecoration:"none"}}>
                        <ListIcon sx={{marginLeft:{xs:0,sm:"-14px",md:0}}} style={{fontSize:"30px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:400}} className={classes.textSmall}>Services</Typography>
                        </Link>
                    </Box>
                    <Box className={classes.itemSmall}>
                    <Link to="/projects" style={{textDecoration:"none"}}>
                        <WorkIcon sx={{marginLeft:{xs:0,sm:"-14px",md:0}}} style={{fontSize:"30px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:400}} className={classes.textSmall}>Project</Typography>
                        </Link>
                    </Box>
                    <Box className={classes.itemSmall}>
                    <Button href="https://drive.google.com/file/d/1dc_vL62vUkQqzHTvTUkuvgAqMnuHcQw_/view?usp=sharing" target="-blank" sx={{ color: 'white', display: 'flex',padding:"6px 0px" }}>
                        < FileOpenIcon sx={{marginLeft:{xs:0,sm:"-14px",md:0}}} style={{fontSize:"30px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:400}}  className={classes.textSmall}>Resume</Typography>
                    </Button>
                    </Box>
                    <Box className={classes.itemSmall}>
                    <Link to="/contact" style={{textDecoration:"none"}}>  
                        <ForumIcon sx={{marginLeft:{xs:0,sm:"-14px",md:0}}} style={{fontSize:"30px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:400}}  className={classes.textSmall}>Contact</Typography>
                        </Link>
                    </Box>
                </Container>
            </Box>
            <Outlet/>
        </Box>
        
        
    );
};

export default LeftSideBar;