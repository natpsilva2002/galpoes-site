import "./Home.css";

function Home() {
  return (
    <main>
      {/* HERO COM CARROSSEL DE FUNDO */}
      <section className="hero">
        <div className="hero-slider">
          <div
            className="slide"
            style={{ backgroundImage: "url('/assets/misto.jpg')" }}
          ></div>
          <div
            className="slide"
            style={{ backgroundImage: "url('/assets/galpao1.jpg')" }}
          ></div>
          <div
            className="slide"
            style={{ backgroundImage: "url('/assets/placa.jpg')" }}
          ></div>
        </div>
      </section>

      {/* CARD FIXO SOBRE O HERO */}
      <div className="hero-card">
        <h1>GALPÕES EM CONCRETO<br/> PRÉ MOLDADO</h1>
        <p>
          Segurança, economia e rapidez para o seu investimento
          <br />
          <br />
          {/* Tudo que você precisa<br /> para o seu investimento retornar muito mais
          rápido. */}
        </p>
        <button onClick={() => (window.location.href = "/contato")}>
          Solicite um Orçamento
        </button>
      </div>
       {/* FAIXA DE DESTAQUE */}
      <section className="stats-bar">
        <div className="stats-container">
          <div className="stat">
            <h3>+1000</h3>
            <p>Obras Entregues</p>
          </div>
          <div className="stat">
            <h3>+100</h3>
            <p>Clientes Satisfeitos</p>
          </div>
          <div className="stat">
            <h3>+45</h3>
            <p>Anos de Mercado</p>
          </div>
        </div>
      </section>

      {/* SOBRE A EMPRESA */}
      <section className="sobre">
        <div className="sobre-header">
          <h2>
               Seja bem-vindo a <span></span>
          </h2>
          <h1>Galpões Construções</h1>
          <h3>Empresa do Grupo Estrutural</h3>
          <p>
            Referência em <strong>galpões pré-fabricados de concreto</strong>,
            atuamos em todo território nacional, oferecendo soluções
            completas que unem <strong>agilidade, economia e segurança</strong>.
            
          </p>
        </div>

        <div className="sobre-grid">
          <div className="sobre-item projeto">
            <i className="fas fa-pencil-ruler"></i>
            <h3>Projeto</h3>
            <p>
              Apresente seu projeto e desenvolveremos soluções sob medida para
              atender às necessidades do seu empreendimento.
            </p>
          </div>
          <div className="sobre-item producao">
            <i className="fas fa-cogs"></i>
            <h3>Produção</h3>
            <p>
              Produzimos com tecnologia de ponta, garantindo qualidade e
              durabilidade em cada peça.
            </p>
          </div>
          <div className="sobre-item transporte">
            <i className="fas fa-truck"></i>
            <h3>Transporte</h3>
            <p>
              Realizamos transporte até o local da obra com segurança e
              pontualidade.
            </p>
          </div>
          <div className="sobre-item montagem">
            <i className="fas fa-tools"></i>
            <h3>Montagem</h3>
            <p>
              Nossa equipe executa a montagem rápida e eficiente, sem abrir mão
              da qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* WHY US - texto simples */}
      <section className="why-us">
        <h2 className="why-title">Porque Nos Contratar?</h2>

        <div className="why-actions">
          <button
            className="btn-primary"
            onClick={() => (window.location.href = "/contato")}
          >
            Faça Um Orçamento
          </button>

          <button
            className="btn-secondary"
            onClick={() => (window.location.href = "/servicos")}
          >
            Veja Nossos Serviços
          </button>
        </div>

        <div className="why-list">
          <div className="why-item">
            <i className="fa-solid fa-shield"></i>
            <div>
              <h3> Segurança </h3>
              <p>
                Nossos galpões são fechados com placas de concreto maciço
                reforçadas com tela de aço. Isso significa uma barreira quase
                impenetrável contra arrombamentos e furtos — tranquilidade total
                para o seu negócio.
              </p>
            </div>
          </div>

          <div className="why-item">
            <i className="fa-solid fa-hand-holding-dollar"></i>
            <div>
              <h3>Menor Custo </h3>
              <p>
                Produzimos todas as peças em fábrica própria, sem intermediários.
                Resultado? Mais qualidade, menos custo e o melhor retorno para o
                seu investimento.
              </p>
            </div>
          </div>

          <div className="why-item">
            <i className="fa-solid fa-truck-fast"></i>
            <div>
              <h3> Rapidez </h3>
              <p>
                Enquanto construções convencionais levam meses, nossos painéis
                pré-moldados reduzem de 25% a 50% o tempo da obra. Você recebe
                seu galpão muito antes e já pode começar a faturar.
              </p>
            </div>
          </div>

          <div className="why-item">
            <i className="fa-solid fa-money-bill-trend-up"></i>
            <div>
              <h3>O investimento mais inteligente</h3>
              <p>
                No ritmo acelerado do e-commerce e da logística, cada semana
                conta. Com pré-moldados de concreto, seu galpão fica pronto
                rapidamente e passa a gerar resultados sem demora.
              </p>
            </div>
          </div>

          <div className="why-item">
            <i className="fa-regular fa-handshake"></i>
            <div>
              <h3>Tradição que gera confiança</h3>
              <p>
                São mais de 46 anos de experiência, milhares de galpões entregues
                em todo o Brasil e uma reputação de excelência que nos coloca
                entre os pioneiros do setor. Com a Estrutural, você tem a certeza
                de uma obra bem-feita.
              </p>
            </div>
          </div>

          <div className="why-item">
            <i className="fa-regular fa-lightbulb"></i>
            <div>
              <h3>Estética moderna e funcional</h3>
              <p>
                Além de resistentes e práticos, nossos galpões possuem uma
                estética industrial limpa e sofisticada, transmitindo
                profissionalismo e solidez para o seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="valores">
        <h2>CONHEÇA NOSSA GALERIA</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="\assets\fechamento.jpg" alt="Imagem 1" />
          </div>
          <div className="gallery-item">
            <img src="/assets/misto.jpg" alt="Imagem 2" />
          </div>
          <div
            className="gallery-item gallery-more"
            onClick={() => (window.location.href = "/obras")}
          >
            <img src="/assets/placa.jpg" alt="Veja mais" />
            <div className="gallery-overlay">Veja Mais</div>
          </div>
        </div>
      </section>

      {/* FAIXA DE DESTAQUE
      <section className="stats-bar">
        <div className="stats-container">
          <div className="stat">
            <h3>+1000</h3>
            <p>Obras Entregues</p>
          </div>
          <div className="stat">
            <h3>+100</h3>
            <p>Clientes Satisfeitos</p>
          </div>
          <div className="stat">
            <h3>+45</h3>
            <p>Anos de Mercado</p>
          </div>
        </div>
      </section> */}

      {/* PARCEIROS */}
      <section className="partners">
        <h2>Nossos Clientes</h2>
        <div className="partners-logos">
          <img src="/assets/parceiros/autoglass-logo.png" alt="Auto Glass" />
          <img src="/assets/parceiros/carrefour-logo-1.png" alt="Carrefour" />
          <img src="/assets/parceiros/direcional_rgb-25388393.jpg" alt="Direcional" />
          <img src="/assets/parceiros/epa.png" alt="Epa" />
          <img src="/assets/parceiros/indaia-logo-png_seeklogo-196358.png" alt="Indaia" className="logo-indaia" />
          <img src="/assets/parceiros/logo-supermix-pq.png" alt="Supermix" />
          <img src="/assets/parceiros/man-novo.png" alt="Mannesmann" className="logo-mannesmann" />
          <img src="/assets/parceiros/logo-animated.svg" alt="Unilever" className="logo-viapark" />
          <img src="/assets/parceiros/vale.png" alt="Vale" />
          <img src="/assets/parceiros/belgo.png" alt="Belgo" />
          <img src="/assets/parceiros/fiatallis.jpg" alt="Fiat" />
        </div>
      </section>
    </main>
  );
}

export default Home;
