import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "@assets/logo2.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ===== TOPO (contatos rápidos) ===== */}
      <div className="top-bar">
        <div className="top-bar-left">
          <span>📞 (31)   98634-5639</span>
          <span>✉️galpoesconstrucoes@gmail.com </span>
        </div>
        <div className="top-bar-right">
          <span>Seg - Sex: 08:00 - 17:00</span>
        </div>
      </div>

      {/* ===== HEADER PRINCIPAL ===== */}
      <header className="header">
        {/* LOGO */}
        <div className="logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Logo Pré-Moldados" />
          </Link>
        </div>

        {/* BOTÃO HAMBURGUER */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAV */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul className="menu">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/sobre" onClick={() => setMenuOpen(false)}>Sobre Nós</Link></li>
            <li><Link to="/servicos" onClick={() => setMenuOpen(false)}>Serviços</Link></li>
            <li><Link to="/obras" onClick={() => setMenuOpen(false)}>Portfólio</Link></li>
            <li><Link to="/produtos" onClick={() => setMenuOpen(false)}>Pré Moldados</Link></li>
            <li><Link to="/contato" onClick={() => setMenuOpen(false)}>Contato</Link></li>
          </ul>
        </nav>

        {/* BOTÃO CTA */}
        <div className="header-cta">
          <Link to="/contato" className="cta-btn">
            Solicite um Orçamento
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
