import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';



const Project = ({data}) => {
    const [learn,setLearn] = useState(false);


    const readDetails = (condition,id)=>{
        if(id===data.id){
            setLearn(condition)
        }
        else{
            setLearn(false)
        }
    }
    return (
        <> 
         <Grid sx={{py:10,background:"#1E2132"}} item xs={12} sm={6}  >
                            <Card sx={{ width: "100%",pt:1,pb:3 }}>
                                <CardMedia
                                    component="img"
                                    style={{padding:"20px 0px",width:"90%",margin:"auto"}}
                                    image={data.websiteImg}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {data.websiteName}
                                    </Typography>
                                    
                                    <Typography variant="body2" color="text.secondary">
                                   {
                                        learn? <>
                                            {
                                                data.details 
                                            }
                                            <Button onClick={()=>readDetails(false,data.id)}>Minimize</Button>
                                         </>:<>
                                            {
                                            data.details.slice(0,150) 
                                            }...
                                            <Button onClick={()=>readDetails(true,data.id)}>Read more</Button>
                                         </>
                                    } 
                                    
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button target="_blank" rel="noreferrer" href={`${data.clientCodeLink}`} size="small">Client Side Code</Button>
                                    <Button target="_blank" rel="noreferrer" href={`${data.serverCodeLink}`} size="small">Server Side Code</Button>
                                    <Button target="_blank" rel="noreferrer" href={`${data.liveSide}`} size="small">Live Side</Button>
                                </CardActions>
                            </Card>
                        </Grid>
        </>
           
    );
};

export default Project;