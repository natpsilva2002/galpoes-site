import "./Services.css";
import projetoImg from "@assets/ilugalpao.jpg";
import projetoImg1 from "@assets/placas.jpg";
import projetoImg2 from "@assets/transporte.jpg";
import projetoImg3 from "@assets/misto.jpg";

import mistoImg from "@assets/misto.jpg";
import murosImg from "@assets/muros.jpg";
import bgAbout from "@assets/muros.jpg";

function Services() {
  return (
    <>
      {/* HERO DA PÁGINA DE SERVIÇOS */}
      <section
        className="services-header"
        style={{ backgroundImage: `url(${bgAbout})` }}
      >
        <h1>Serviços</h1>
        <p>
          
        </p>
      </section>

      {/* CONTEÚDO DE SERVIÇOS */}
      <section className="services">
        
        {/* 🔹 TÍTULO DA SEÇÃO */}
        <div className="services-title">
          <h2>Conheça Nossos Serviços</h2>
        </div>

        {/* 🔹 NOVOS CARDS (3 em cima, 2 embaixo) */}
        <div className="top-services-grid">
          {/* Linha 1 - 3 cards */}
          <div className="top-row">
            <div className="service-card">
              <div className="icon">
                <i className="fa-solid fa-key"></i>
              </div>
              <h3>Galpões Completos <br /> “Chave na Mão”</h3>
              <p>
                    Executamos obras completas de galpões industriais e logísticos,
    contemplando todas as etapas: 
    <strong> Fundação</strong>, 
    <strong> estrutura de concreto</strong>, 
    <strong> fechamento lateral</strong>, 
    <strong> cobertura metálica</strong> e 
    <strong> acabamento final</strong>. 
    Entregamos o galpão <strong>pronto para uso</strong>, com eficiência construtiva,
    alta performance estrutural e prazo otimizado.
  </p>
            </div>

            <div className="service-card">
              <div className="icon">🏗️</div>
              <h3>Galpões Completos (sem fundação e piso)</h3>
              <p>
                Fornecemos a <strong>estrutura pré-moldada em concreto integral do galpão</strong>,
                incluindo pilares, placas de fechamento e cobertura metálica.<strong> A
                execução de fundação e piso fica sob responsabilidade do cliente.</strong>
                Solução indicada para quem busca rapidez de montagem, precisão
                estrutural e durabilidade garantida.
              </p>
            </div>

            <div className="service-card">
              <div className="icon">
                <i className="fa-solid fa-warehouse"></i>
              </div>
              <h3>Galpões Pré-Moldados (sem cobertura metálica)</h3>
              <p>
                Construímos galpões com estrutura pré-moldada de concreto,
                compostos por pilares, painéis de fechamento e elementos
                estruturais.<strong> O cliente pode optar por instalar a cobertura
                metálica posteriormente. </strong>Uma alternativa versátil para projetos
                que priorizam resistência, modularidade e baixo custo de
                manutenção.
              </p>
            </div>
          </div>

          {/* Linha 2 - 2 cards centralizados */}
          <div className="bottom-row">
            <div className="service-card">
              <div className="card-image">
                <img src={mistoImg} alt="Galpões Mistos" />
              </div>
              <div className="card-content">
                <h3>Galpões Mistos</h3>
                <p>
                  Projetamos e executamos galpões mistos, que <strong>combinam a robustez
                  dos pré-moldados de concreto com a flexibilidade da estrutura
                  metálica.</strong> Essa tecnologia proporciona segurança estrutural,
                  otimização de recursos e adaptabilidade a diferentes tipos de
                  empreendimentos industriais e comerciais.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="card-image">
                <img src={murosImg} alt="Muros Pré-Moldados de Concreto" />
              </div>
              <div className="card-content">
                <h3>Muros Pré-Moldados de Concreto</h3>
                <p>
                  <strong>Fabricamos e instalamos muros </strong>pré-moldados de concreto de alta
                  resistência, projetados para oferecer segurança perimetral,
                  durabilidade e montagem ágil. Ideais para indústrias, centros
                  logísticos, armazéns e condomínios. Uma solução robusta e
                  eficiente para fechamento de grandes áreas.
                </p>
              </div>
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
          style={{ backgroundImage: `url(${projetoImg})` }}
        >
          <div className="overlay"></div>
          <div className="project-text">
            <div className="project-icon">
              <i className="fa-solid fa-warehouse"></i>
            </div>
            <h2 className="project-title" id="projeto">PROJETO</h2>
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
          style={{ backgroundImage: `url(${projetoImg1})` }}
        >
          <div className="overlay"></div>
          <div className="project-text">
            <div className="project-icon">
              <i className="fa-solid fa-industry"></i>
            </div>
            <h2 className="project-title" id="producao">PRODUÇÃO</h2>
            <p>
              Nesta etapa, as peças são fabricadas com alta precisão em ambiente
              controlado, garantindo qualidade e redução de desperdícios.
            </p>
          </div>
        </div>

        {/* 🔹 BLOCO 3 */}
        <div
          className="project-section"
          style={{ backgroundImage: `url(${projetoImg2})` }}
        >
          <div className="overlay"></div>
          <div className="project-text">
            <div className="project-icon">
              <i className="fa-solid fa-truck"></i>
            </div>
            <h2 className="project-title" id="transporte">TRANSPORTE</h2>
            <p>
              Realizamos o transporte das peças até o local da obra com segurança
              e eficiência, utilizando frota adequada para grandes dimensões e
              cargas pesadas.
            </p>
          </div>
        </div>

        {/* 🔹 BLOCO 4 */}
        <div
          className="project-section"
          style={{ backgroundImage: `url(${projetoImg3})` }}
        >
          <div className="overlay"></div>
          <div className="project-text">
            <div className="project-icon">
              <i className="fa-solid fa-screwdriver-wrench"></i>
            </div>
            <h2 className="project-title" id="montagem">MONTAGEM</h2>
            <p>
              Nossa equipe especializada executa a montagem das estruturas no
              canteiro de obras, garantindo alinhamento, estabilidade e segurança
              em cada etapa da construção.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
