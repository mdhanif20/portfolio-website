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
        marginBottom:"25px",
        cursor:"pointer",
        '&:hover':{
            transform: 'scale(1.01)',
            transition:".1s"
        }
    },
    icon:{
        marginRight:"6px",
        fontSize:"32px"
    },
    text:{
        fontWeight:500,
        fontSize:"17px",
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
        border:"2px solid #FE5205",
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
        '&:hover $textSmall':{
            marginLeft:"0",
            opacity:1,
            transition:".6s"
        }
    },
    
    iconSmall:{
        marginRight:"6px",
    }
   
})
 


const LeftSideBar = () => {
    const classes = useStyle();

    return (
        <Box sx={{display:"flex",position:'fixed',marginTop:"55px", zIndex:1}}>
            <Box sx={{display:{xs:"none",sm:"none",md:"block"}}}>
                    <Container sx={{  bgcolor:"#1E2132",width:"180px",boxShadow: 5}} className={classes.container}>
                    <div className={classes.item}>
                    <Link to="/" style={{textDecoration:"none"}}>
                        <Button sx={{  color: 'white', display: 'flex',padding:"6px 0px"}}>
                        <WaterDamageIcon sx={{fontSize:"1.8rem"}} className={classes.icon}/>
                        <span className={classes.text}>Home</span>
                        </Button> 
                    </Link>
                    </div>   
                    <div className={classes.item}>
                    <Link to="/about" style={{textDecoration:"none"}}>
                        <Button sx={{ color: 'white', display: 'flex',padding:"6px 0px" }}>
                        <PersonIcon   sx={{fontSize:"1.8rem"}} className={classes.icon}/>
                        <span className={classes.text}>About</span>
                        </Button> 
                    </Link>
                    </div>  
                    
                    <div className={classes.item}>
                    <Link to="/services" style={{textDecoration:"none"}}>  
                        <Button sx={{ color: 'white', display: 'flex',padding:"6px 0px" }}>
                        <ListIcon   sx={{fontSize:"1.8rem"}} className={classes.icon}/>
                        <span className={classes.text}>Services</span>
                        </Button> 
                    </Link>
                    </div>   
                    <div className={classes.item}>
                        <Button sx={{ color: 'white', display: 'flex' ,padding:"6px 0px"}}>
                        <WorkIcon  sx={{fontSize:"1.8rem"}}  className={classes.icon}/>
                        <span className={classes.text}>Projects</span>
                        </Button> 
                    </div>   
                    <div className={classes.item}>
                        <Button sx={{ color: 'white', display: 'flex',padding:"6px 0px" }}>
                        < FileOpenIcon  sx={{fontSize:"1.8rem"}} className={classes.icon}/>
                        <span className={classes.text}>Resume</span>
                        </Button> 
                    </div>   
                    <div className={classes.item}>
                         <Link to="/contact" style={{textDecoration:"none"}}> 
                        <Button sx={{ color: 'white', display: 'flex',padding:"6px 0px" }}>
                        <ForumIcon  sx={{fontSize:"1.8rem"}}  className={classes.icon}/>
                        <span className={classes.text}>Contact</span>
                        </Button> 
                        </Link>
                    </div>   
                </Container>
            </Box>

            <Box sx={{display:{xs:"block",sm:"block",md:"none"},zIndex:1,boxShadow: 5}}>
                    <Container sx={{ bgcolor:"#1E2132",width:"34px",paddingLeft:"5px",paddingRight:"38px"}} className={classes.containerSmall}>
                        <div className={classes.itemSmall}>
                            <WaterDamageIcon sx={{marginLeft:{xs:0,sm:"-14px",md:0}}} style={{fontSize:"30px"}} className={classes.iconSmall}/>
                            <Typography style={{fontWeight:400}} className={classes.textSmall}>Home</Typography>
                        </div>
                    
                    <div className={classes.itemSmall}>
                        <PersonIcon sx={{marginLeft:{xs:0,sm:"-14px",md:0}}} style={{fontSize:"30px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:400}} className={classes.textSmall}>About</Typography>
                    </div>
                    <div className={classes.itemSmall}>
                        <ListIcon sx={{marginLeft:{xs:0,sm:"-14px",md:0}}} style={{fontSize:"30px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:400}} className={classes.textSmall}>Services</Typography>
                    </div>
                    <div className={classes.itemSmall}>
                        <WorkIcon sx={{marginLeft:{xs:0,sm:"-14px",md:0}}} style={{fontSize:"30px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:400}} className={classes.textSmall}>Project</Typography>
                    </div>
                    <div className={classes.itemSmall}>
                        < FileOpenIcon sx={{marginLeft:{xs:0,sm:"-14px",md:0}}} style={{fontSize:"30px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:400}}  className={classes.textSmall}>Resume</Typography>
                    </div>
                    <div className={classes.itemSmall}>
                    <Link to="/contact" style={{textDecoration:"none"}}>  
                        <ForumIcon sx={{marginLeft:{xs:0,sm:"-14px",md:0}}} style={{fontSize:"30px"}}  className={classes.iconSmall}/>
                        <Typography style={{fontWeight:400}}  className={classes.textSmall}>Contact</Typography>
                        </Link>
                    </div>
                </Container>
            </Box>
            <Outlet/>
        </Box>
       
        
    );
};

export default LeftSideBar;