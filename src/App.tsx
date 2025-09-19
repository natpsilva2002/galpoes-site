import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Works from "./pages/Works";
import Services from "./pages/Services";
import Quote from "./pages/Quote";
import WhatsAppButton from "./components/WhatsAppButton";
import Contact from "./pages/Contact";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Make sure './pages/Contact.tsx' exists and is named exactly as 'Contact.tsx'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/obras" element={<Works />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/orcamento" element={<Quote />} />
      <Route path="/contato" element={<Contact />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
