
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import JobExperience from "./routes/job_experience";
import Certificates from "./routes/certificates";
import About from "./routes/about";
import Home from './routes/home';
import Contact from "./routes/contact";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="job-experience" element={<JobExperience />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
       
      </Route> 
    </Routes>
  </BrowserRouter>,
  rootElement
);