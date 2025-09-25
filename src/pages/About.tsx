import "./About.css";

function About() {
  return (
    <main className="about">
      {/* HERO / CABEÇALHO */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url("/images/muros.jpg")` }}
      >
        <h1>Sobre Nós</h1>
        <p></p>
      </section>

      {/* QUEM SOMOS */}
      <section className="about-section">
        <h2>Quem Somos</h2>
        <p>
          Fundada em Minas Gerais, nossa empresa nasceu com o propósito de
          oferecer soluções construtivas em <strong>estruturas pré-moldadas</strong>.
          Ao longo de décadas, consolidamos nosso nome no mercado, sempre com
          foco em qualidade, agilidade e segurança.
        </p>
      </section>

      {/* VALORES, VISÃO, MISSÃO */}
      <section className="about-grid">
        <div className="about-card">
          <h3>Valores</h3>
          <ul>
            <li>✔️ Segurança</li>
            <li>✔️ Parceria</li>
            <li>✔️ Inovação</li>
            <li>✔️ Compromisso</li>
            <li>✔️ Sustentabilidade</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Visão</h3>
          <p>
            Ser referência nacional em pré-moldados, reconhecida pela excelência
            nos projetos, respeito ao meio ambiente e compromisso com nossos
            clientes.
          </p>
        </div>

        <div className="about-card">
          <h3>Missão</h3>
          <p>
            Industrializar a construção, tornando-a mais <strong>rápida</strong>,
            <strong> segura</strong> e <strong>acessível</strong>.
          </p>
        </div>
      </section>

      {/* NOSSA ESTRUTURA */}
      <section className="about-section">
        <h2>A Nossa Estrutura</h2>
        <p>
          Contamos com uma planta fabril moderna e equipada com tecnologia de
          ponta, garantindo produção em escala com alto padrão de qualidade.
          Nossos times de engenharia e montagem acompanham cada etapa,
          assegurando a entrega dentro do prazo e com total segurança.
        </p>
      </section>
    </main>
  );
}

export default About;
