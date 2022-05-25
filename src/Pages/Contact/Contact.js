import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EmailIcon from '@mui/icons-material/Email';
import AlbumIcon from '@mui/icons-material/Album';
import { makeStyles } from '@mui/styles';
import EmailForm from './EmailForm';

const useStyle = makeStyles({
    scrollBar:{
        overflow:"scroll",
        height:"100vh",
        '&::-webkit-scrollbar': {
            width: '3px',
            padding:"20px"
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#1E2131',
            outline: '2px solid #BDBDBD',
            borderRadius: "5px"
          }
        
    }
})

const Contact = () => {
    const classes = useStyle();
    return (
        <Box className={classes.scrollBar} sx={{width:"100%",bgcolor:"#1E2131",p:2}}>
            <Box sx={{width:"100%"}}>
            <Typography sx={{borderBottom:"2px solid #FE5205",width:"125px",color:"#fff",mt:4}} variant="h5" gutterBottom component="div">
            Contact Me
            </Typography>
            <Typography sx={{color:"#fff",borderBottom:"2px solid #FE5205",width:"105px",marginTop:"-5px",mb:6}} variant="h4" gutterBottom component="div"></Typography>
            </Box>
            
            <Grid sx={{color:"#fff"}} container spacing={2}>
                

                <Grid sx={{display:"flex",justifyContent:"center"}} item xs={12} sm={4} md={3}>
                <Card sx={{boxShadow:'none',border:"none",borderRadius:"0",color:"#fff",bgcolor:"#1E2131"}}>
                    <CardContent>
                        <Typography sx={{display: "flex", justifyContent: "space-around"}}>
                        <PhoneEnabledIcon sx={{color:"#FE5205",fontSize:"30px",pb:1}}/>
                        </Typography>
                        <Typography sx={{fontSize:"20px",textAlign:"center"}} variant="button" display="block" gutterBottom>
                        Call us on
                        </Typography>
                        <Typography sx={{textAlign:"justify",fontSize:"18px"}} variant="body1" gutterBottom>
                        +8801821876351
                        </Typography>
                     </CardContent>
                    </Card>
                </Grid>  
                

                <Grid sx={{display:"flex",justifyContent:"center"}} item xs={12} sm={4} md={3}>
                <Card sx={{boxShadow:'none',border:"none",borderRadius:"0",color:"#fff",bgcolor:"#1E2131"}}>
                    <CardContent>
                        <Typography sx={{display: "flex", justifyContent: "space-around"}}>
                        <FmdGoodIcon sx={{color:"#FE5205",fontSize:"30px",pb:1}}/>
                        </Typography>
                        <Typography sx={{fontSize:"20px",textAlign:"center"}} variant="button" display="block" gutterBottom>
                        Location
                        </Typography>
                        <Typography sx={{textAlign:"justify",fontSize:"18px"}} variant="body1" gutterBottom>
                        Gopalganj-8100,Dhaka
                        </Typography>
                     </CardContent>
                    </Card>
                </Grid>  
                

                <Grid sx={{display:"flex",justifyContent:"center"}} item xs={12} sm={4} md={3}>
                <Card sx={{boxShadow:'none',border:"none",borderRadius:"0",color:"#fff",bgcolor:"#1E2131"}}>
                    <CardContent>
                        <Typography sx={{display: "flex", justifyContent: "space-around"}}>
                        <EmailIcon sx={{color:"#FE5205",fontSize:"30px",pb:1}}/>
                        </Typography>
                        <Typography sx={{fontSize:"20px",textAlign:"center"}} variant="button" display="block" gutterBottom>
                        Email
                        </Typography>
                        <Typography sx={{textAlign:"justify",fontSize:"18px"}} variant="body1" gutterBottom>
                        mdhanif2921@gmail.com
                        </Typography>
                     </CardContent>
                    </Card>
                </Grid>  
                

                <Grid sx={{display:"flex",justifyContent:"center"}} item xs={12} sm={4} md={3}>
                <Card sx={{boxShadow:'none',border:"none",borderRadius:"0",color:"#fff",bgcolor:"#1E2131"}}>
                    <CardContent>
                        <Typography sx={{display: "flex", justifyContent: "space-around"}}>
                        <AlbumIcon sx={{color:"#FE5205",fontSize:"30px",pb:1}}/>
                        </Typography>
                        <Typography sx={{fontSize:"20px",textAlign:"center"}} variant="button" display="block" gutterBottom>
                        Website
                        </Typography>
                        <Typography sx={{textAlign:"justify",fontSize:"18px"}} variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, doloremque.
                        </Typography>
                     </CardContent>
                    </Card>
                </Grid>  

            </Grid>
            <Box sx={{mb:10,color:"fff"}}>
                <EmailForm></EmailForm>
            </Box>
        </Box>
    );
};

export default Contact;