import "./Works.css";
import { Link } from "react-router-dom";

function Works() {
  return (
    <main>
      {/* HERO */}
      <section
        className="about-hero"
        style={{ backgroundImage: "url('/assets/muros.jpg')" }}
      >
        <h1>Galeria de Obras</h1>
      </section>

      <section className="works-intro">
        <h2>Conheça Alguns dos Projetos que Entregamos com Excelência</h2>
        <p className="highlight">
          Do tamanho do seu orçamento, com a qualidade que você merece.
        </p>
        <p>
          Tem um projeto diferente para sua obra? Nós criamos o pré-moldado para
          você. Somos especialistas em soluções para projetos especiais em
          diversos segmentos, com execução sob demanda e de acordo com a
          necessidade da sua obra.
        </p>
        <p>
          A experiência da nossa equipe garante qualidade, agilidade e
          compromisso em todas as etapas do processo.
        </p>
      </section>

      {/* GALERIA */}
      <section className="works-gallery">
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/assets/fechamento.jpg" alt="Fechamento" />
          </div>
          <div className="gallery-item">
            <img src="/assets/misto.jpg" alt="Mistos" />
          </div>
          <div className="gallery-item">
            <img src="/assets/placa.jpg" alt="Pré-Moldado" />
          </div>
          <div className="gallery-item">
            <img src="/assets/galpoes/galpaorca.png" alt="Obra 4" />
          </div>
          <div className="gallery-item">
            <img src="/assets/muros.jpg" alt="Obra 5" />
          </div>
          <div className="gallery-item">
            <img src="/assets/galpoes/galpao3.jpg" alt="Obra 6" />
          </div>
          <div className="gallery-item">
            <img src="/assets/galpoes/galpaoIncom.jpg" alt="Obra 7" />
          </div>
          <div className="gallery-item">
            <img src="/assets/galpoes/galpao2.jpg" alt="Obra 8" />
          </div>
          <div className="gallery-item">
            <img src="/assets/galpoes/galpao5.jpg" alt="Obra 9" />
          </div>
          <div className="gallery-item">
            <img src="/assets/galpoes/muropre.jpg" alt="Obra 9" />
          </div>

        </div>
      </section>

      {/* NOVA SECTION CHAMADA PARA AÇÃO */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>
            Transforme Sua Ideia em Realidade <br />
            com a Galpões Construções
          </h2>
          <p>
            Seja para construir o seu galpão, a Galpões Construções tem a
            expertise e o compromisso necessários para entregar o melhor
            resultado. Você pode trazer o seu projeto pronto ou, se preferir,
            indicamos um especialista para desenvolver o projeto ideal para a
            sua necessidade. <strong>Entre em contato e comece seu projeto hoje mesmo</strong>{" "}
            com quem entende do assunto.
          </p>
          <Link to="/contato" className="cta-btn">
            Solicite Seu Orçamento Agora
          </Link>
        </div>
      </section>

      {/* PARCEIROS */}
      <section className="partners">
        <h2>Nossos Clientes</h2>
        <div className="partners-logos">
          <img src="/assets/parceiros/autoglass-logo.png" alt="Auto Glass" />
          <img src="/assets/parceiros/carrefour-logo-1.png" alt="Carrefour" />
          <img src="/assets/parceiros/direcional_rgb-25388393.jpg" alt="Direcional" />
          <img src="/assets/parceiros/epa.png" alt="Epa" />
          <img
            src="/assets/parceiros/indaia-logo-png_seeklogo-196358.png"
            alt="Indaia"
            className="logo-indaia"
          />
          <img src="/assets/parceiros/logo-supermix-pq.png" alt="Supermix" />
          <img
            src="/assets/parceiros/man-novo.png"
            alt="Mannesmann"
            className="logo-mannesmann"
          />
          <img
            src="/assets/parceiros/logo-animated.svg"
            alt="Unilever"
            className="logo-viapark"
          />
          <img src="/assets/parceiros/vale.png" alt="Vale" />
          <img src="/assets/parceiros/belgo.png" alt="Belgo" />
          <img src="/assets/parceiros/fiatallis.jpg" alt="Fiat" />
        </div>
      </section>
    </main>
  );
}

export default Works;
