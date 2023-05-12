import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Careers } from "./components/Careers";
import { Contactus } from "./components/Contactus";

import { Name } from "./Name";
import "../src/App.css";
import Services from "./components/Services/Services";
import { Serv1 } from "./components/Serv1";
import { Footer } from "./components/Fooeter";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/abou" element={<About />}></Route>
          <Route path="/cont" element={<Contactus />}></Route>
          <Route path="/care" element={<Careers />}></Route>
          <Route path="/serv1" element={<Serv1 />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
