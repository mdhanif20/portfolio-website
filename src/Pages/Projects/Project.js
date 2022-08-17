import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

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
                                    <Typography sx={{fontWeight:"600",fontSize:"1.8rem"}} gutterBottom variant="h5" component="div">
                                    {data.websiteName}
                                    </Typography>
                                    
                                    <Typography sx={{fontSize:"1.2rem"}} variant="body2" color="black">
                                   {
                                        learn? <>
                                            {
                                                data?.detailsOne 
                                            }
                                            
                                         </>:<>
                                            {
                                            data?.detailsOne?.slice(0,150) 
                                            }...
                                            <Button onClick={()=>readDetails(true,data.id)}>Read more</Button>
                                         </>
                                    } 
                                    </Typography> 
                                    
                                   {
                                        learn? <>
                                        {
                                            data?.detailsTwo&&<Typography sx={{fontSize:"1.2rem",display:"block",pt:2}} variant="body2" color="black">
                                            {data?.detailsTwo}
                                            </Typography>
                                        }
                                        
                                        {
                                           data?.detailsThree&& <Typography sx={{fontSize:"1.2rem",display:"block",pt:2}} variant="body2" color="black">
                                           {data?.detailsThree}
                                          </Typography>
                                        }
                                        
                                        {
                                            data?.detailsFour&&<Typography sx={{fontSize:"1.2rem",display:"block",pt:2}} variant="body2" color="black">
                                            {data?.detailsFour}
                                            </Typography>
                                        }
                                        
                                        {
                                           data?.detailsFive && <Typography sx={{fontSize:"1.2rem",display:"block",pt:2}} variant="body2" color="black">
                                           {data?.detailsFive}
                                           </Typography> 
                                        }
                                        
                                        
                                            <Typography sx={{py:2,fontSize:"18px",fontWeight:"bold"}} variant="h6" gutterBottom component="div">
                                            Technology: {data.technology}
                                            </Typography>
                                            <Button onClick={()=>readDetails(false,data.id)}>Minimize</Button>
                                         </>:<>
                                           
                                         </>
                                    } 
                                    
                                    
                                    </CardContent>
                                <CardActions style={{justifyContent:"space-evenly"}}>
                                   
                                    <Button target="_blank" rel="noreferrer" href={`${data?.clientCodeLink}`} size="small">Client Side Code</Button>
                                    {
                                        data?.serverCodeLink && <Button target="_blank" rel="noreferrer" href={`${data?.serverCodeLink}`} size="small">Server Side Code</Button>
                                    }
                                    
                                    <Button target="_blank" rel="noreferrer" href={`${data?.liveSide}`} size="small">Live Side</Button>
                                </CardActions>
                            </Card>
                        </Grid>
        </>
           
    );
};

export default Project;