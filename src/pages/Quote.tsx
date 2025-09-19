function Quote() {
  return (
    <main>
      <h1>Solicite um Orçamento</h1>
      <form>
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="E-mail" required />
        <input type="tel" placeholder="Telefone" required />
        <input type="text" placeholder="Produto de interesse" />
        <input type="number" placeholder="Quantidade" />
        <input type="text" placeholder="Local da obra" />
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}

export default Quote;
