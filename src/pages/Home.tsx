// src/pages/Home.tsx
import "./Home.css";

// Hero e Seção Galeria
import hero1 from "@assets/misto.jpg";
import hero2 from "@assets/transporte.jpg";
import hero3 from "@assets/placas.jpg";
import fechamentoImg from "@assets/fechamento.jpg";
import mistosImg from "@assets/misto.jpg";
import gpremoldadoImg from "@assets/gpremoldado.jpg";

// Logos de parceiros
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

function Home() {
  return (
    <main>
      {/* HERO COM CARROSSEL DE FUNDO */}
      <section className="hero">
        <div className="hero-slider">
          <div className="slide" style={{ backgroundImage: `url(${hero1})` }}></div>
          <div className="slide" style={{ backgroundImage: `url(${hero2})` }}></div>
          <div className="slide" style={{ backgroundImage: `url(${hero3})` }}></div>
        </div>
      </section>

      {/* CARD FIXO SOBRE O HERO */}
      <div className="hero-card">
        <h1>GALPÕES EM CONCRETO PRÉ MOLDADO</h1>
        <p>
          Entregamos seu galpão personalizado, <br />mais barato e mais seguro.
          <br /><br />
          Tudo que você precisa<br /> para o seu investimento retornar muito mais rápido.
        </p>
        <button onClick={() => (window.location.href = "/contato")}>
          Solicite um Orçamento
        </button>
      </div>

      {/* SOBRE A EMPRESA */}
      <section className="sobre">
        <div className="sobre-header">
          <h2>
            Seja bem-vindo a <span><br />Galpões Construções</span>
          </h2>
          <h1>Empresa do Grupo Estrutural</h1>
          <p>
            Referência em <strong>galpões pré-fabricados de concreto</strong>, atuamos em todo o estado de Minas Gerais,
            oferecendo soluções completas que unem <strong>agilidade, economia e segurança</strong>.
          </p>
        </div>

        <div className="sobre-grid">
          <div className="sobre-item projeto">
            <i className="fas fa-pencil-ruler"></i>
            <h3>Projeto</h3>
            <p>
              Apresente seu projeto e desenvolveremos soluções sob medida para atender às necessidades do seu empreendimento.
            </p>
          </div>
          <div className="sobre-item producao">
            <i className="fas fa-cogs"></i>
            <h3>Produção</h3>
            <p>
              Produzimos com tecnologia de ponta, garantindo qualidade e durabilidade em cada peça.
            </p>
          </div>
          <div className="sobre-item transporte">
            <i className="fas fa-truck"></i>
            <h3>Transporte</h3>
            <p>
              Realizamos transporte até o local da obra com segurança e pontualidade.
            </p>
          </div>
          <div className="sobre-item montagem">
            <i className="fas fa-tools"></i>
            <h3>Montagem</h3>
            <p>
              Nossa equipe executa a montagem rápida e eficiente, sem abrir mão da qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-us">
        <h2 className="why-title">Porque Nos Escolher ?</h2>
        <div className="why-actions">
          <button className="btn-primary" onClick={() => (window.location.href = "/contato")}>
            Faça Um Orçamento
          </button>
          <button className="btn-secondary" onClick={() => (window.location.href = "/servicos")}>
            Veja Nossos Serviços
          </button>
        </div>

        <div className="why-list">
          {/* Repetir os itens com ícones e textos como no seu código */}
        </div>
      </section>

      {/* GALERIA */}
      <section className="valores">
        <h2>CONHEÇA NOSSA GALERIA</h2>
        <div className="gallery-grid">
          <div className="gallery-item"><img src={fechamentoImg} alt="Imagem 1" /></div>
          <div className="gallery-item"><img src={mistosImg} alt="Imagem 2" /></div>
          <div className="gallery-item gallery-more" onClick={() => (window.location.href = "/obras")}>
            <img src={gpremoldadoImg} alt="Veja mais" />
            <div className="gallery-overlay">Veja Mais</div>
          </div>
        </div>
      </section>

      {/* FAIXA DE DESTAQUE */}
      <section className="stats-bar">
        <div className="stats-container">
          <div className="stat"><h3>+1000</h3><p>Obras Entregues</p></div>
          <div className="stat"><h3>+100</h3><p>Clientes Satisfeitos</p></div>
          <div className="stat"><h3>+45</h3><p>Anos de Mercado</p></div>
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
          <img src={indaiaLogo} alt="Indaia" />
          <img src={supermixLogo} alt="Supermix" />
          <img src={mannesmannLogo} alt="Mannesmann" />
          <img src={unileverLogo} alt="Unilever" />
          <img src={valeLogo} alt="Vale" />
          <img src={belgoLogo} alt="Belgo" />
          <img src={FiatLogo} alt="Fiat" />
        </div>
      </section>
    </main>
  );
}

export default Home;
