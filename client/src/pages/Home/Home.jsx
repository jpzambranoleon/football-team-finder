import {
  Box,
  Button,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import FeedFilter from "./components/FeedFilter";
import { Link } from "react-router-dom";
import Post from "../../components/Post";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { InfoContext } from "../../utils/InfoProvider";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { authorized } = useContext(InfoContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/all");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <main>
      <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="primary"
            gutterBottom
          >
            Team Finder
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Looking for some people to play football with? Are you looking for a
            team to join? We can help you with that. Find a team near you!
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("filter").offsetTop,
                  behavior: "smooth",
                })
              }
            >
              Find a Post
            </Button>
            <Button
              component={Link}
              to={authorized ? "/post/create" : "/register"}
              variant="outlined"
              color="primary"
            >
              Create a Post
            </Button>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <FeedFilter />
        <Grid container spacing={2}>
          {posts.map((p) => (
            <Post key={p._id} post={p} />
          ))}
        </Grid>
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            mt: 2,
          }}
        >
          <Pagination count={10} variant="outlined" color="primary" />
        </Box>
      </Container>
    </main>
  );
}
