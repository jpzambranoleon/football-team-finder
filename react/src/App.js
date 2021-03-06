import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/about/About";
import Login from "./authorization/Login";
import Signup from "./authorization/Signup";
import Copyright from "./components/Copyright";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import Error404 from "./pages/error404/Error404";
import CreatePost from "./pages/create/CreatePost";
import axios from "axios";
import PostPageFeed from "./pages/post/PostPageFeed";

function App() {
  axios.defaults.baseURL = "http://localhost:5200";
  return (
    <div className="App">
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user" element={<User />} />
            <Route path="/post" element={<PostPageFeed />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </Router>
        <Copyright />
      </>
    </div>
  );
}

export default App;
