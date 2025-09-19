import "./Products.css";
import placasImg from "@assets/placas.jpg";
import pilaresImg from "@assets/pilares.jpg";
import venezianaImg from "@assets/veneziana.jpg";
import tesouraImg from "@assets/tesoura.jpg";
import lajeImg from "@assets/laje.jpg";


function Produtos() {
  const produtos = [
  {
    id: 1,
    titulo: "Placas de fechamento em concreto",
    descricao:
      "As placas de concreto pré-moldadas com aço reforçado oferecem fechamento lateral robusto...",
    imagem: placasImg,
  },
  {
    id: 2,
    titulo: "Pilares de concreto pré-moldado",
    descricao:
      "Os pilares pré-moldados de concreto armado são projetados para suportar grandes cargas...",
    imagem: pilaresImg,
  },
  {
    id: 3,
    titulo: "Painéis de ventilação em concreto",
    descricao:
      "Os painéis de ventilação pré-moldados possibilitam circulação natural de ar...",
    imagem: venezianaImg,
  },
  {
    id: 4,
    titulo: "Tesouras de Concreto pré-moldado",
    descricao:
      "As tesouras de concreto pré-moldado são elementos estruturais projetados para sustentar...",
    imagem: tesouraImg,
  },
  {
    id: 5,
    titulo: "Lajes pré-moldadas em concreto",
    descricao:
      "As lajes pré-moldadas combinam resistência e praticidade, possibilitando maior rapidez...",
    imagem: lajeImg,
  },
];

  

  return (
    <main className="produtos">
      {/* Cabeçalho da seção */}
      <section className="produtos-header">
        <h4 className="produtos-subtitle">CONFIRA NOSSOS MATERIAIS</h4>
        <h2 className="produtos-title"></h2>
        <p className="produtos-intro">
          Há mais de 46 anos no mercado, desenvolvemos soluções completas em
          pré-moldados de concreto para a construção de galpões industriais,
          logísticos e comerciais. Nossos produtos unem qualidade estrutural,
          durabilidade e montagem rápida, garantindo eficiência em cada projeto.
        </p>
      </section>

      {/* Lista de produtos */}
      <section className="produtos-lista">
        {produtos.map((produto, index) => (
          <article
            key={produto.id}
            className={`produto-card ${index % 2 !== 0 ? "invertido" : ""}`}
          >
            <div className="produto-imagem">
              <img src={produto.imagem} alt={produto.titulo} />
            </div>
            <div className="produto-info">
              <h2>{produto.titulo}</h2>
              <p style={{ whiteSpace: "pre-line" }}>{produto.descricao}</p>
              <a
                className="produto-btn"
                onClick={() => (window.location.href = "/contato")}
              >
                SOLICITAR ORÇAMENTO →
              </a>
            </div>
          </article>
        ))}
      </section>
      
    </main>
  );
}

export default Produtos;
