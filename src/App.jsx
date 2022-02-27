import {
  BrowserRouter,
  Routes,
  Route,
  } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NavbarRB from "./components/NavbarRB";
import NavbarRB2 from "./components/NavbarRB2";

function App() {
  return (
    <BrowserRouter>
      <NavbarRB2/>
      <NavbarRB/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
