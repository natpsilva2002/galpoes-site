// src/App.js
import "./App.css";
import projetoImg from "./projeto.png"; // coloque a imagem no src ou public

function App() {
  return (
    <div className="container">
      <section className="content">
        <div className="text">
          <h2 className="title">📋 PROJETO</h2>
          <p>
            Apresente seu projeto arquitetônico. Nós avaliaremos e elaboraremos
            um novo projeto estrutural, adequado para o conceito de estruturas
            pré-fabricadas. Nesta etapa, toda estrutura de seu projeto é
            redesenhada, de forma a permitir que você saiba exatamente quantas
            peças serão utilizadas e o cronograma de execução da obra, o que
            possibilita um planejamento financeiro exato e totalmente sem
            imprevistos. Construções pré-fabricadas são concluídas na metade do
            tempo que as convencionais e geram até 80% a menos de resíduos.
          </p>
        </div>
        <div className="image">
          <img src={projetoImg} alt="Projeto Pré-fabricado" />
        </div>
      </section>

      <footer className="footer">
        CONFIRA TODAS AS VANTAGENS DE SE CONSTRUIR COM PRÉ-FABRICADOS DE
        CONCRETO!
      </footer>
    </div>
  );
}

export default App;
