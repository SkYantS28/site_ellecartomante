import "./Agendamento.css";
import { Link } from "react-router-dom";

export default function Agendamento() {
  const whatsappNumber = "5524992561107";

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá Elle! Gostaria de agendar uma leitura."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <div className="agendamento-page">

      <section className="page-header">
        <span>✦ AGENDE SUA LEITURA</span>

        <h1>
          Encontre o seu
          <strong> próximo passo</strong>
        </h1>

        <p>
          Escolha o método que deseja realizar e entre em contato
          antes de efetuar qualquer pagamento. A Elle irá confirmar
          o atendimento e orientar você sobre os próximos passos.
        </p>
      </section>

      <section className="booking-process">

        <div className="process-step">
          <span className="step-number">01</span>

          <h2>Escolha sua leitura</h2>

          <p>
            Acesse o catálogo, escolha o método e a quantidade
            de perguntas ou horas que você deseja contratar.
          </p>

          <Link to="/catalogo" className="link-button">
            Ver catálogo →
          </Link>
        </div>

        <div className="process-step">
          <span className="step-number">02</span>

          <h2>Fale com a Elle</h2>

          <p>
            Entre em contato pelo WhatsApp, informe qual método
            você escolheu e aguarde a confirmação da Elle antes
            de realizar qualquer pagamento.
          </p>

          <button
            className="link-button"
            onClick={handleWhatsAppClick}
          >
            Abrir WhatsApp →
          </button>
        </div>

        <div className="process-step">
          <span className="step-number">03</span>

          <h2>Realize o pagamento</h2>

          <p>
            Após a confirmação do atendimento pela Elle, realize
            o pagamento via PIX ou Cartão de Crédito. A leitura
            será iniciada em até 48 horas.
          </p>
        </div>

      </section>

      <section className="payment-section">

        <span>✦ PAGAMENTO</span>

        <h2>
          Duas formas de
          <strong> pagamento</strong>
        </h2>

        <p className="payment-warning">
          <strong>Importante:</strong> entre em contato com a Elle
          e aguarde a confirmação do atendimento antes de realizar
          qualquer pagamento.
        </p>
        <br></br>
        <br></br>
        <div className="payment-options">

          <div className="payment-card">
            <strong>Transferência PIX</strong>

            <p>
              Após a confirmação do atendimento, realize o
              pagamento via PIX para:  <span>  24992561107</span>
              <br />

              Nome: Gabrielle Lopes

              <br />

              Banco: PicPay
            </p>
          </div>

          <div className="payment-card">
            <strong>Cartão de Crédito</strong>

            <p>
              Entre em contato pelo WhatsApp para realizar o
              pagamento via cartão de crédito.
              <br />
              Parcelamento em até 12x com juros.
            </p>
          </div>

        </div>

      </section>

      <section className="cta-booking">

        <p>
          Antes de realizar o pagamento, fale com a Elle
          para confirmar seu atendimento.
        </p>

        <button
          className="button-primary"
          onClick={handleWhatsAppClick}
        >
          Falar com a Elle no WhatsApp
        </button>

      </section>

    </div>
  );
}
