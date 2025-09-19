// src/pages/Works.tsx
import "./Works.css";
import { Link } from "react-router-dom";
import bgAbout from "@assets/muros.jpg";
import fechamentoImg from "@assets/fechamento.jpg";
import mistosImg from "@assets/misto.jpg";
import gpremoldadoImg from "@assets/gpremoldado.jpg";
import servicesImage from "@assets/image1.jpg";
import tesouraImg from "@assets/tesoura.jpg";
import muroImg from "@assets/laje.jpg";
import autoglassLogo from "@assets/parceiros/autoglass-logo.png";
import carrefourLogo from "@assets/parceiros/carrefour-logo-1.png";
import direcionalLogo from "@assets/parceiros/direcional_rgb-25388393.jpg";
import epaLogo from "@assets/parceiros/epa.png";
import indaiaLogo from "@assets/parceiros/indaia-logo-png_seeklogo-196358.png";
import supermixLogo from "@assets/parceiros/logo-supermix-pq.png";
import mannesmannLogo from "@assets/parceiros/man-novo.png";
import unileverLogo from "@assets/parceiros/logo-animated.svg";
import valeLogo from "@assets/parceiros/vale.png";
import belgoLogo from "@assets/parceiros/belgo.png";
import FiatLogo from "@assets/parceiros/fiatallis.jpg";

function Works() {
  return (
    <main>
      {/* HERO */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${bgAbout})` }}
      >
        <h1>Galeria de Obras</h1>
        
          
      </section>
      <section className="works-intro">
  <h2>Conheça Alguns dos Projetos que Entregamos com Excelência</h2>
  <p className="highlight">
    Do tamanho do seu orçamento, com a qualidade que você merece.
  </p>
  <p>
    Tem um projeto diferente para sua obra? Nós criamos o pré-moldado para você.
    Somos especialistas em soluções para projetos especiais em diversos segmentos,
    com execução sob demanda e de acordo com a necessidade da sua obra.
  </p>
  <p>
    A experiência da nossa equipe garante qualidade, agilidade e compromisso
    em todas as etapas do processo.
  </p>
</section>

      {/* GALERIA */}
      <section className="works-gallery">
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={fechamentoImg} alt="Fechamento" />
          </div>
          <div className="gallery-item">
            <img src={mistosImg} alt="Mistos" />
          </div>
          <div className="gallery-item">
            <img src={gpremoldadoImg} alt="Pré-Moldado" />
          </div>
          <div className="gallery-item">
            <img src={servicesImage} alt="Obra 4" />
          </div>
          <div className="gallery-item">
            <img src={muroImg} alt="Obra 5" />
          </div>
          <div className="gallery-item">
            <img src={tesouraImg} alt="Obra 6" />
          </div>
        </div>
      </section>
      
      {/* NOVA SECTION CHAMADA PARA AÇÃO */}
      <section className="cta-section">
  <div className="cta-content">
    <h2>
      Transforme Sua Ideia em Realidade 
      com a <br />Galpões Construções
    </h2>
    <p>
      Seja para construir o seu galpão, a Galpões Construções tem a expertise e
      o compromisso necessários para entregar o melhor resultado. Você pode
      trazer o seu projeto pronto ou, se preferir, indicamos um especialista
      para desenvolver o projeto ideal para a sua necessidade.
      <strong> Entre em contato e comece seu projeto hoje mesmo</strong> com
      quem entende do assunto.
    </p>
   <Link to="/contato" className="cta-btn">
  Solicite Seu Orçamento Agora
</Link>
  </div>
</section>


      {/* PARCEIROS */}
      <section className="partners">
  <h2>Nossos Parceiros e Clientes</h2>
  <div className="partners-logos">
    <img src={autoglassLogo} alt="Auto Glass" />
    <img src={carrefourLogo} alt="Carrefour" />
    <img src={direcionalLogo} alt="Direcional" />
    <img src={epaLogo} alt="Epa" />
    <img src={indaiaLogo} alt="Indaia" className="logo-indaia" />
    <img src={supermixLogo} alt="Supermix" />
    <img src={mannesmannLogo} alt="Mannesmann" className="logo-mannesmann" />
    <img src={unileverLogo} alt="Unilever" className="logo-viapark" />
    <img src={valeLogo} alt="Vale" />
     <img src={belgoLogo} alt="Belgo" />
          <img src={FiatLogo} alt="Fiat" />
  </div>
</section>
    </main>
  );
}

export default Works; 
