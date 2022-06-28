import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Avatar from '@mui/material/Avatar';
import htmlImg from "../../Images/servicesIcon/html.png";
import cssImg from "../../Images/servicesIcon/css.png";
import jsImg from "../../Images/servicesIcon/js.png";
import reactImg from "../../Images/servicesIcon/react.png";
import bootstrapImg from "../../Images/servicesIcon/bootstrap.png";
import reactbootstrapImg from "../../Images/servicesIcon/reactBootstrap.png";
import muiImg from "../../Images/servicesIcon/mui.png";
import nodeImg from "../../Images/servicesIcon/node.png";
import photoshopImg from "../../Images/servicesIcon/photoshop.png";
import tailwinImg from "../../Images/servicesIcon/tailwind.png";
import typescriptImg from "../../Images/servicesIcon/typescript.png";
import wordpressImg from "../../Images/servicesIcon/wordpress.png";
import mongodbImg from "../../Images/servicesIcon/mongodb.png";
import firebaseImg from "../../Images/servicesIcon/firebase.png";

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
const Services = () => {
    const classes = useStyle();
    return (
       <Box className={classes.scrollBar} sx={{bgcolor:"#1E2132",width:"100%"}}>
            <Container sx={{py:3,width:"100%",mb:10}}>
                <Typography sx={{borderBottom:"2px solid #FE5205",width:"130px",color:"#fff",mt:4}} variant="h4" gutterBottom component="div">
                    Services
                </Typography>
                <Typography sx={{color:"#fff",borderBottom:"2px solid #FE5205",width:"110px",marginTop:"-5px",mb:4}} variant="h4" gutterBottom component="div"></Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                        <Typography sx={{display: "flex", justifyContent: "space-around"}}>
                        <Avatar sx={{p:1,width:"60px",height:"60px"}} alt="Remy Sharp" src={htmlImg} />
                        </Typography>
                        <Typography sx={{fontSize:"24px",textAlign:"center"}} variant="button" display="block" gutterBottom>
                            HTML
                        </Typography>
                        <Typography sx={{textAlign:"justify",fontSize:"18px"}} variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatibus modi. Delectus totam molestias nobis eveniet dolorum laborum eum iste.
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                        <Typography sx={{display: "flex", justifyContent: "space-around"}}>
                        <Avatar sx={{p:1,width:"60px",height:"60px"}} alt="Remy Sharp" src={cssImg} />
                        </Typography>
                        <Typography sx={{fontSize:"24px",textAlign:"center"}} variant="button" display="block" gutterBottom>
                            CSS
                        </Typography>
                        <Typography sx={{textAlign:"justify",fontSize:"18px"}} variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatibus modi. Delectus totam molestias nobis eveniet dolorum laborum eum iste.
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                        <Typography sx={{display: "flex", justifyContent: "space-around"}}>
                        <Avatar sx={{p:1,width:"60px",height:"60px"}} alt="Remy Sharp" src={jsImg} />
                        </Typography>
                        <Typography sx={{fontSize:"24px",textAlign:"center"}} variant="button" display="block" gutterBottom>
                            JavaScript + ES6
                        </Typography>
                        <Typography sx={{textAlign:"justify",fontSize:"18px"}} variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatibus modi. Delectus totam molestias nobis eveniet dolorum laborum eum iste.
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                        <Typography sx={{display: "flex", justifyContent: "space-around"}}>
                        <Avatar sx={{p:1,width:"60px",height:"60px"}} alt="Remy Sharp" src={reactImg} />
                        </Typography>
                        <Typography sx={{fontSize:"24px",textAlign:"center"}} variant="button" display="block" gutterBottom>
                            REACT
                        </Typography>
                        <Typography sx={{textAlign:"justify",fontSize:"18px"}} variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatibus modi. Delectus totam molestias nobis eveniet dolorum laborum eum iste.
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                        <Typography sx={{display: "flex", justifyContent: "space-around"}}>
                        <Avatar sx={{p:1,width:"60px",height:"60px"}} alt="Remy Sharp" src={muiImg} />
                        </Typography>
                        <Typography sx={{fontSize:"24px",textAlign:"center"}} variant="button" display="block" gutterBottom>
                         Material UI
                        </Typography>
                        <Typography sx={{textAlign:"justify",fontSize:"18px"}} variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatibus modi. Delectus totam molestias nobis eveniet dolorum laborum eum iste.
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                        <Typography sx={{display: "flex", justifyContent: "space-around"}}>
                        <Avatar sx={{p:1,width:"60px",height:"60px"}} alt="Remy Sharp" src={bootstrapImg} />
                        </Typography>
                        <Typography sx={{fontSize:"24px",textAlign:"center"}} variant="button" display="block" gutterBottom>
                          Bootstrap 5
                        </Typography>
                        <Typography sx={{textAlign:"justify",fontSize:"18px"}} variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatibus modi. Delectus totam molestias nobis eveniet dolorum laborum eum iste.
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
                
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                        <Typography sx={{display: "flex", justifyContent: "space-around"}}>
                        <Avatar sx={{p:1,width:"60px",height:"60px"}} alt="Remy Sharp" src={reactbootstrapImg} />
                        </Typography>
                        <Typography sx={{fontSize:"24px",textAlign:"center"}} variant="button" display="block" gutterBottom>
                        React Bootstrap
                        </Typography>
                        <Typography sx={{textAlign:"justify",fontSize:"18px"}} variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatibus modi. Delectus totam molestias nobis eveniet dolorum laborum eum iste.
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                        <Typography sx={{display: "flex", justifyContent: "space-around"}}>
                        <Avatar sx={{p:1,width:"60px",height:"60px"}} alt="Remy Sharp" src={nodeImg} />
                        </Typography>
                        <Typography sx={{fontSize:"24px",textAlign:"center"}} variant="button" display="block" gutterBottom>
                          Node Js
                        </Typography>
                        <Typography sx={{textAlign:"justify",fontSize:"18px"}} variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatibus modi. Delectus totam molestias nobis eveniet dolorum laborum eum iste.
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                        <Typography sx={{display: "flex", justifyContent: "space-around"}}>
                        <Avatar sx={{p:1,width:"60px",height:"60px"}} alt="Remy Sharp" src={mongodbImg} />
                        </Typography>
                        <Typography sx={{fontSize:"24px",textAlign:"center"}} variant="button" display="block" gutterBottom>
                          MongoDB
                        </Typography>
                        <Typography sx={{textAlign:"justify",fontSize:"18px"}} variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatibus modi. Delectus totam molestias nobis eveniet dolorum laborum eum iste.
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                        <Typography sx={{display: "flex", justifyContent: "space-around"}}>
                        <Avatar sx={{p:1,width:"60px",height:"60px"}} alt="Remy Sharp" src={tailwinImg} />
                        </Typography>
                        <Typography sx={{fontSize:"24px",textAlign:"center"}} variant="button" display="block" gutterBottom>
                          Tailwind
                        </Typography>
                        <Typography sx={{textAlign:"justify",fontSize:"18px"}} variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatibus modi. Delectus totam molestias nobis eveniet dolorum laborum eum iste.
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                        <Typography sx={{display: "flex", justifyContent: "space-around"}}>
                        <Avatar sx={{p:1,width:"60px",height:"60px"}} alt="Remy Sharp" src={firebaseImg} />
                        </Typography>
                        <Typography sx={{fontSize:"24px",textAlign:"center"}} variant="button" display="block" gutterBottom>
                          Firebase
                        </Typography>
                        <Typography sx={{textAlign:"justify",fontSize:"18px"}} variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatibus modi. Delectus totam molestias nobis eveniet dolorum laborum eum iste.
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                        <Typography sx={{display: "flex", justifyContent: "space-around"}}>
                        <Avatar sx={{p:1,width:"60px",height:"60px"}} alt="Remy Sharp" src={photoshopImg} />
                        </Typography>
                        <Typography sx={{fontSize:"24px",textAlign:"center"}} variant="button" display="block" gutterBottom>
                          Adobe Photoshop cc
                        </Typography>
                        <Typography sx={{textAlign:"justify",fontSize:"18px"}} variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatibus modi. Delectus totam molestias nobis eveniet dolorum laborum eum iste.
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
               
                
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                        <Typography sx={{display: "flex", justifyContent: "space-around"}}>
                        <Avatar sx={{p:1,width:"60px",height:"60px"}} alt="Remy Sharp" src={typescriptImg} />
                        </Typography>
                        <Typography sx={{fontSize:"24px",textAlign:"center"}} variant="button" display="block" gutterBottom>
                          Typescript
                        </Typography>
                        <Typography sx={{textAlign:"justify",fontSize:"18px"}} variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatibus modi. Delectus totam molestias nobis eveniet dolorum laborum eum iste.
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
               
                
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                        <Typography sx={{display: "flex", justifyContent: "space-around"}}>
                        <Avatar sx={{p:1,width:"60px",height:"60px"}} alt="Remy Sharp" src={wordpressImg} />
                        </Typography>
                        <Typography sx={{fontSize:"24px",textAlign:"center"}} variant="button" display="block" gutterBottom>
                          Wordpress
                        </Typography>
                        <Typography sx={{textAlign:"justify",fontSize:"18px"}} variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatibus modi. Delectus totam molestias nobis eveniet dolorum laborum eum iste.
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
               
            </Grid>
            </Container>
       </Box>
    );
};

export default Services;