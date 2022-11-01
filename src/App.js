import "./App.css";
// import Landing from "./components/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import Nav from "./components/Nav";
import { Helmet } from "react-helmet";
import Shop from "./components/Shop";
import Forum from "./components/Forum";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mystic Craft Co</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Mystic Craft Co" />
      </Helmet>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
