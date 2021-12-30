import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles({
    footerBox:{
        backgroundColor:"#1E2132"
    },
    footerText:{
        textAlign: "center",
        padding: "40px 0px",
        margin: "0px",
        color:"#fff",
        marginTop:"50px"
    }
})

const Footer = () => {
    const classes = useStyle();
    return (
        <> 
       
        <Box className={classes.footerBox}>
        
              <Typography className={classes.footerText} variant="subtitle2" gutterBottom component="div">
                Copyright @ 2021 All Rights Reserved
                </Typography>
        </Box>
        </>
    );
};

export default Footer;