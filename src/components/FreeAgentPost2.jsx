import { Groups, Person } from "@mui/icons-material";
import { Avatar, Box, Card, CardActionArea, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const FreeAgentPost2 = () => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ mb: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardActionArea sx={{ height: '100%' }}>
                    <CardHeader 
                        avatar={
                            <Avatar sx={{ bgcolor: blue[400] }} >
                                <Person />
                            </Avatar>   
                        }

                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" component="div">
                            Looking for more players to join our team
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default FreeAgentPost2;