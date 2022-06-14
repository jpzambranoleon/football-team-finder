import { Person } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const FreeAgentPost = () => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ mb: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardHeader 
                    avatar={
                        <Avatar sx={{ bgcolor: blue[400] }} >
                            <Person />
                        </Avatar>   
                    }
                    title="Player Name"
                    subheader="September 14, 2016"

                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="div">
                        Looking for more players to join our team
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="success">Share</Button>
                    <Button size="small" color="success">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default FreeAgentPost;