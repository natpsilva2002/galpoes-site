// Contato.tsx
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contato() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_87qfiql", // substitua pelo seu ID do EmailJS
        "template_xfwnnqe", // substitua pelo seu template ID
        form.current,
        "530Fxh0sMvW3WT_t5" // substitua pela sua Public Key
      )
      .then(
        () => {
          setStatus("✅ Mensagem enviada com sucesso!");
          form.current!.reset();
        },
        () => {
          setStatus("❌ Ocorreu um erro. Tente novamente.");
        }
      );
  };

  return (
    <main className="contato">
      {/* BLOCO DE INFORMAÇÕES */}
      <section className="contato-info">
        <div className="contato-col">
          <h3>Comercial</h3>
          <p className="phone">
            <FaPhoneAlt className="icon" /> (31) 9 8634-5639
          </p>
          <p className="email">
            <FaEnvelope className="icon" /> galpoesconstrucoes@gmail.com
          </p>
        </div>

       
      </section>

      {/* FORMULÁRIO DE CONTATO */}
      <section className="contato-form">
        <p>
          Você pode enviar mensagens para a nossa equipe de maneira rápida e prática,
          utilizando o formulário abaixo. Informe detalhes sobre suas dúvidas ou projeto
          e retornaremos o contato com o máximo de agilidade.
        </p>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Seu Nome" required />
          <input type="email" name="email" placeholder="Seu E-mail" required />
          <input
            type="tel"
            name="phone"
            placeholder="Seu Telefone"
            required
            pattern="\d{10,11}"
            title="Digite um telefone válido com DDD"
          />
          <input type="text" name="title" placeholder="Assunto" required />
          <textarea name="message" placeholder="Escreva aqui a sua mensagem" rows={6} required></textarea>


          <button type="submit">Enviar Mensagem</button>
        </form>

        {status && <p className="status">{status}</p>}
      </section>
    </main>
  );
}

export default Contato;
