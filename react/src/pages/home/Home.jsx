import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import FreeAgentPost from "../../components/FreeAgentPost";
import TeamPost from "../../components/TeamPost";
import TrainerPost from "../../components/TrainerPost";
import FeedFilter from "./components/FeedFilter";
import { Link } from "react-router-dom";
import Feed from "../../components/Feed";

export default function Home() {
    return (
        <main>
            <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="success.main"
                        gutterBottom
                    >
                        Team Finder
                    </Typography>
                    <Typography
                        variant="h5" align="center" color="text.secondary" paragraph
                    >
                        Looking for some people to play football with? 
                        Are you looking for a team to join? 
                        We can help you with that. Find a team near you!
                    </Typography>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button 
                            variant="contained" 
                            color="success"
                            onClick={() =>
                                window.scrollTo({
                                    top: document.getElementById("filter").offsetTop,
                                    behavior: "smooth",
                                })
                            }
                            
                        >
                            Find a Post
                        </Button>
                        <Button component={Link} to="/create" variant="outlined" color="success">Create a Post</Button>
                    </Stack>
                </Container>
            </Box>
            <Container sx={{ py: 8 }} maxWidth="md">
                <FeedFilter />
                <Grid container spacing={2}>
                    <Feed />
                </Grid>
            </Container>
        </main>
    );
  }