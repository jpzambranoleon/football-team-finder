import { Box, Button, Container, Stack, Typography } from "@mui/material";
import CreatePost from "./components/CreatePost";
import FeedFilter from "./components/FeedFilter";
import Post from "./components/Post";

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
                        <Button variant="contained">Find a Post</Button>
                        {/*<Button variant="outlined">Secondary action</Button>*/}
                        <CreatePost />
                    </Stack>
                </Container>
            </Box>
            <Container sx={{ py: 8 }} maxWidth="md">
                <FeedFilter />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </Container>
        </main>
    );
  }