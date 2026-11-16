import { mentoria } from "../data/mentoria";
import "./Mentoria.css";

function formatPrice(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function SectionTitle({ eyebrow, title, highlight }) {
  return (
    <div className="mentoria-heading">
      {eyebrow && <span>✦ {eyebrow}</span>}

      <h2>
        {title}
        {highlight && <strong> {highlight}</strong>}
      </h2>
    </div>
  );
}

function PriceCard({ item }) {
  return (
    <article className="mentoria-price-card">
      <div className="mentoria-price-icon">✦</div>

      <h3>{item.nome}</h3>

      {item.duracao && (
        <span className="mentoria-price-detail">
          {item.duracao}
        </span>
      )}

      {item.encontros && (
        <span className="mentoria-price-detail">
          {item.encontros}
        </span>
      )}

      <div className="mentoria-price-value">
        {formatPrice(item.valor)}
      </div>
    </article>
  );
}

function PriceSection({ data, id }) {
  return (
    <section className="mentoria-pricing-section" id={id}>
      <SectionTitle title={data.titulo} />

      <p className="mentoria-section-description">
        {data.descricao}
      </p>

      <div className="mentoria-price-grid">
        {data.opcoes.map((item) => (
          <PriceCard key={item.nome} item={item} />
        ))}
      </div>
    </section>
  );
}

export default function Mentoria() {
  const { valores } = mentoria;

  // Número do WhatsApp da Elle
  const whatsappNumber = "5524992561107";

  // Rola suavemente até a seção "Como funciona"
  const scrollToSection = () => {
    document.getElementById("como-funciona")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Abre o WhatsApp com uma mensagem pronta
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá Elle! Tenho interesse na mentoria para cartomantes. Gostaria de saber mais sobre os planos e agendar uma conversa."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="mentoria">

      {/* CABEÇALHO */}

      <section className="mentoria-page-header">
        <span>✦ LENORMAND SECRETS ✦</span>

        <h1>
          {mentoria.titulo}
        </h1>

        <h2>
          PARA CARTOMANTES
        </h2>

        <p>
          Um espaço individual de aprendizado,
          troca e desenvolvimento na cartomancia.
        </p>

        <button
          type="button"
          onClick={scrollToSection}
          className="mentoria-header-button"
        >
          Conheça a mentoria
        </button>
      </section>

      {/* COMO FUNCIONA */}

      <section
        className="mentoria-section"
        id="como-funciona"
      >
        <SectionTitle
          eyebrow="SOBRE A EXPERIÊNCIA"
          title="Como"
          highlight="funciona"
        />

        <div className="mentoria-info-card">
          {mentoria.funcionamento.map((item, index) => (
            <p key={index}>
              <span>✦</span>
              {item}
            </p>
          ))}
        </div>
      </section>

      {/* ACOMPANHAMENTO */}

      <section
        className="mentoria-whatsapp-section"
        id="acompanhamento"
      >
        <div className="mentoria-whatsapp-card">
          <span className="mentoria-whatsapp-icon">
            ✦
          </span>

          <span className="mentoria-whatsapp-eyebrow">
            SUPORTE INDIVIDUAL
          </span>

          <h2>
            {mentoria.acompanhamento.titulo}
          </h2>

          <p className="mentoria-whatsapp-subtitle">
            {mentoria.acompanhamento.subtitulo}
          </p>

          <div className="mentoria-whatsapp-divider" />

          <h3>
            O acompanhamento inclui:
          </h3>

          <div className="mentoria-whatsapp-list">
            {mentoria.acompanhamento.inclui.map(
              (item, index) => (
                <p key={index}>
                  <span>✦</span>
                  {item}
                </p>
              )
            )}
          </div>
        </div>
      </section>

      {/* VALORES */}

      <section
        className="mentoria-values-section"
        id="valores"
      >
        <SectionTitle
          eyebrow="INVESTIMENTO"
          title="Valores da"
          highlight="mentoria"
        />

        <p className="mentoria-section-description">
          Escolha a modalidade que melhor acompanha
          seus objetivos e sua disponibilidade.
        </p>

        {/* SESSÃO AVULSA */}

        <PriceSection
          id="sessao-avulsa"
          data={valores.avulsa}
        />

        {/* PLANO SEMANAL */}

        <PriceSection
          id="plano-semanal"
          data={valores.semanal}
        />

        {/* PLANO MENSAL */}

        <PriceSection
          id="plano-mensal"
          data={valores.mensal}
        />
      </section>

      {/* RODAPÉ DA PÁGINA */}

      <section className="mentoria-final-section">
        <span>✦ LENORMAND SECRETS ✦</span>

        <h2>
          Sua jornada na
          <strong> cartomancia</strong>
        </h2>

        <p>
          Aprenda, desenvolva suas habilidades e
          aprofunde seus conhecimentos no seu próprio ritmo.
        </p>

        <button
          type="button"
          onClick={handleWhatsAppClick}
          className="mentoria-header-button"
        >
          Quero contratar minha mentoria
        </button>
      </section>

    </div>
  );
}
