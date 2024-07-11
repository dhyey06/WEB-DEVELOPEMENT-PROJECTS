import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About"; 
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Welcome from "./pages/Welcome";
import Blog from "./pages/Blog";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import './Contact.css';
import './About.css';
import './App.css';
import './Blog.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Welcome />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="About" element={<About />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Blog1" element={<Blog1 />} />
          <Route path="Blog2" element={<Blog2 />} />
          <Route path="Blog3" element={<Blog3 />} />
          <Route path="*" element={<NoPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);