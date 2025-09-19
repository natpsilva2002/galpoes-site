import "./Products.css";

function Produtos() {
  const produtos = [
    {
      id: 1,
      titulo: "Placas de fechamento em concreto",
      descricao:
        "As placas de concreto pré-moldadas com aço reforçado oferecem fechamento lateral robusto, acabamento uniforme e alta resistência contra impactos e arrombamentos, sendo muito mais seguras e duráveis que métodos tradicionais como o tijolinho.\n✅ Ideal para galpões industriais, centros logísticos e armazéns.",
      imagem: "src/assets/placa.jpg",
    },
    {
      id: 2,
      titulo: "Pilares de concreto pré-moldado",
      descricao:
        "Os pilares pré-moldados de concreto armado são projetados para suportar grandes cargas estruturais, garantindo alinhamento perfeito, montagem ágil e segurança total da obra.\n✅ Utilizados em estruturas de galpões, fábricas e centros de distribuição.",
      imagem: "src/assets/pilares.JPG",
    },
    {
      id: 3,
      titulo: "Painéis de ventilação em concreto",
      descricao:
        "Os painéis de ventilação pré-moldados possibilitam circulação natural de ar e aproveitamento da iluminação nos galpões, sem abrir mão da robustez. Além de funcionais, agregam estética e contribuem para a eficiência energética da edificação.\n✅ Recomendados para indústrias, armazéns e galpões agrícolas.",
      imagem: "src/assets/veneziana.jpg",
    },
    {
      id: 4,
      titulo: "Tesouras de Concreto pré-moldado",
      descricao:
    "As tesouras de concreto pré-moldado são elementos estruturais projetados para sustentar a cobertura dos galpões com alta eficiência. Fabricadas com concreto armado de qualidade, garantem resistência a grandes vãos, excelente desempenho estrutural e montagem rápida no canteiro.\n✅ Ideais para coberturas de galpões industriais, centros logísticos e armazéns de grande porte.",
      imagem: "src/assets/tesoura.jpg",
    },
    {
      id: 5,
      titulo: "Lajes pré-moldadas em concreto",
      descricao:
        "As lajes pré-moldadas combinam resistência e praticidade, possibilitando maior rapidez na execução da cobertura e economia de materiais. São projetadas para suportar grandes cargas e garantir durabilidade.\n✅ Utilizadas em galpões industriais, comerciais e logísticos.",
      imagem: "src/assets/laje.jpg",
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
