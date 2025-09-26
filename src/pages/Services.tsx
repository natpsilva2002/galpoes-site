import "./Services.css";

function Services() {
  return (
    <>
      {/* HERO DA PÁGINA DE SERVIÇOS */}
      <section
        className="services-header"
        style={{ backgroundImage: `url("/assets/muros.jpg")` }}
      >
        <h1>Serviços</h1>
        <p></p>
      </section>

      {/* CONTEÚDO DE SERVIÇOS */}
      <section className="services">
        {/* 🔹 TÍTULO DA SEÇÃO */}
        <div className="services-title">
          <h2>Conheça Nossos Serviços</h2>
        </div>

        {/* 🔹 NOVOS CARDS */}
        <div className="services-grid">
          {/* Card 1 */}
          <div className="service-card">
            <div className="card-image">
              <img src="/assets/galpoes/galpaorca.png" alt="Galpões Completos" />
            </div>
            <h3>Galpões Completos “Chave na Mão”</h3>
            <p>
              Executamos obras completas de galpões industriais e logísticos,
              contemplando todas as etapas: <strong>Fundação</strong>,{" "}
              <strong>estrutura de concreto</strong>,{" "}
              <strong>fechamento lateral</strong>,{" "}
              <strong>cobertura metálica</strong> e{" "}
              <strong>acabamento final</strong>.
              <br />
              <br />
              Entregamos o galpão <strong>pronto para uso</strong>, com
              eficiência construtiva, alta performance estrutural e prazo
              otimizado.
            </p>
            <div className="card-footer">
              <button className="btn" onClick={() => (window.location.href = "/contato")}>Solicitar Orçamento</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="service-card">
            <div className="card-image">
              <img
                src="/assets/galpoes/galpao5.jpg"
                alt="Galpões (Sem fundação e piso)"
              />
            </div>
            <h3>Galpões<br/> (Sem fundação e piso)</h3>
            <p>
              Fornecemos a{" "}
              <strong>
                estrutura pré-moldada em concreto integral do galpão
              </strong>
              , incluindo pilares, placas de fechamento e cobertura metálica.
              <br />
              <br />
              <strong>
                A execução de fundação e piso fica sob responsabilidade do
                cliente.
              </strong>
            </p>
            <div className="card-footer">
              <button className="btn" onClick={() => (window.location.href = "/contato")}>Solicitar Orçamento</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <div className="card-image">
              <img
                src="/assets/galpoes/galpaoIncom.jpg"
                alt="Galpões (Sem cobertura)"
              />
            </div>
            <h3>Galpões<br/>(Sem cobertura)</h3>
            <p>
              Construímos galpões com estrutura pré-moldada de concreto,
              compostos por pilares, painéis de fechamento e elementos
              estruturais.
              <br />
              <br />
              <strong>
                O cliente pode optar por instalar a cobertura metálica
                posteriormente.
              </strong>
            </p>
            <div className="card-footer">
              <button className="btn" onClick={() => (window.location.href = "/contato")}>Solicitar Orçamento</button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="service-card">
            <div className="card-image">
              <img src="/assets/galpoes/misto2.jpg" alt="Galpões Mistos" />
            </div>
            <h3>Galpões Mistos</h3>
            <p>
              Projetamos e executamos galpões mistos, que{" "}
              <strong>
                combinam a robustez dos pré-moldados de concreto com a
                flexibilidade da estrutura metálica
              </strong>
              .
              <br />
              <br />
              Essa tecnologia proporciona segurança estrutural, otimização de
              recursos e adaptabilidade a diferentes empreendimentos.
            </p>
            <div className="card-footer">
              <button className="btn" onClick={() => (window.location.href = "/contato")}>Solicitar Orçamento</button>
            </div>
          </div>
        </div>

        {/* Etapas do processo */}
        <div className="process-steps">
          <a href="#projeto" className="step">
            <div className="circle">📋</div>
            <p>PROJETO</p>
          </a>

          <a href="#producao" className="step">
            <div className="circle">⚙️</div>
            <p>PRODUÇÃO</p>
          </a>

          <a href="#transporte" className="step">
            <div className="circle">🚛</div>
            <p>TRANSPORTE</p>
          </a>

          <a href="#montagem" className="step">
            <div className="circle">✔️</div>
            <p>MONTAGEM</p>
          </a>
        </div>

        {/* 🔹 BLOCO 1 */}
        <div
          className="project-section bg1"
          style={{ backgroundImage: `url("/assets/ilugalpao.jpg")` }}
        >
          <div className="overlay"></div>
          <div className="project-text">
            <div className="project-icon">
              <i className="fa-solid fa-warehouse"></i>
            </div>
            <h2 className="project-title" id="projeto">
              PROJETO
            </h2>
            <p>
              Apresente seu projeto arquitetônico. Nós avaliaremos e elaboraremos
              um novo projeto estrutural, adequado para o conceito de estruturas
              pré-fabricadas. Nesta etapa, toda estrutura de seu projeto é
              redesenhada, de forma a permitir que você saiba exatamente quantas
              peças serão utilizadas e o cronograma de execução da obra.
            </p>
          </div>
        </div>

        {/* 🔹 BLOCO 2 */}
        <div
          className="project-section"
          style={{ backgroundImage: `url("/assets/muros.jpg")` }}
        >
          <div className="overlay"></div>
          <div className="project-text">
            <div className="project-icon">
              <i className="fa-solid fa-industry"></i>
            </div>
            <h2 className="project-title" id="producao">
              PRODUÇÃO
            </h2>
            <p>
              Nesta etapa, as peças são fabricadas com alta precisão em ambiente
              controlado, garantindo qualidade e redução de desperdícios.
            </p>
          </div>
        </div>

        {/* 🔹 BLOCO 3 */}
        <div
          className="project-section"
          style={{ backgroundImage: `url("/assets/transporte.jpg")` }}
        >
          <div className="overlay"></div>
          <div className="project-text">
            <div className="project-icon">
              <i className="fa-solid fa-truck"></i>
            </div>
            <h2 className="project-title" id="transporte">
              TRANSPORTE
            </h2>
            <p>
              Realizamos o transporte das peças até o local da obra com
              segurança e eficiência, utilizando frota adequada para grandes
              dimensões e cargas pesadas.
            </p>
          </div>
        </div>

        {/* 🔹 BLOCO 4 */}
        <div
          className="project-section"
          style={{ backgroundImage: `url("/assets/misto.jpg")` }}
        >
          <div className="overlay"></div>
          <div className="project-text">
            <div className="project-icon">
              <i className="fa-solid fa-screwdriver-wrench"></i>
            </div>
            <h2 className="project-title" id="montagem">
              MONTAGEM
            </h2>
            <p>
              Nossa equipe especializada executa a montagem das estruturas no
              canteiro de obras, garantindo alinhamento, estabilidade e
              segurança em cada etapa da construção.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
