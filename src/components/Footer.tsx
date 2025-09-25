import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      
      
      <div className="footer-container">
        {/* COLUNA 1 - SOBRE */}
        <div className="footer-about">
          <img src="/assets/file.png" alt="Logo" className="footer-logo" />
                    <img src="/assets/logoestrutural.png" alt="Logo" className="footer-logo2" />

          <p>
            A Galpões Construções é especializada na construção de galpões pré-moldados e
            artefatos em concreto. Desde 1979 no mercado da construção,
            oferecemos soluções inovadoras no que há de mais moderno em
            estruturas de concreto, com rapidez, economia e sustentabilidade.
          </p>
        </div>

        {/* COLUNA 2 - CONTATOS */}
        <div className="footer-contacts">
          <h3>Contatos</h3>
          <p>
            <strong>Telefone:</strong> (31) 98634-5639
          </p>
          <p>
            <strong>Endereço:</strong> Avenida Juiz Marco Tulio Isaac, 4764
            <br />
             Betim/MG
          </p>
          <p>
            <strong>E-mail:</strong> galpoesconstrucoes@gmail.com 
          </p>

          <div className="social-icons">
            <a href="#">📘</a>
            <a href="#">📸</a>
            <a href="#">💼</a>
            <a href="#">▶️</a>
            <a href="#">💬</a>
          </div>
        </div>

        {/* COLUNA 3 - NEWSLETTER */}
        <div className="footer-newsletter">
          <h3>Newsletters</h3>
          <p>
            Inscreva-se em nossa newsletter para receber as últimas notícias.
          </p>
          <form>
            <input type="email" placeholder="E-mail *" required />
            <label>
              <input type="checkbox" /> Ao utilizar este formulário, concorda
              com o armazenamento e tratamento dos seus dados por este website.
            </label>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Galpões Construções. Todos os direitos reservados.</p>
                <p>© {new Date().getFullYear()} Estrutural Estruturas Metálicas LTDA. Todos os direitos reservados.</p>

      </div>
    </footer>
  );
}

export default Footer;
