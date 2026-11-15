
import { useState } from "react";
import "./Feedbacks.css";

const feedbacks = Array.from({ length: 43 }, (_, index) => ({
  id: index + 1,
  src: `/images/feedback ${index + 1}.jpeg`,
  alt: `Feedback de cliente ${index + 1}`,
}));

export default function Feedbacks() {
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const previousFeedback = () => {
    setSelectedFeedback((current) =>
      current === 1 ? 43 : current - 1
    );
  };

  const nextFeedback = () => {
    setSelectedFeedback((current) =>
      current === 43 ? 1 : current + 1
    );
  };

  const closeModal = () => setSelectedFeedback(null);

  return (
    <div className="feedbacks-page">
      <section className="feedbacks-header">
        <span className="feedbacks-subtitle">
          ✦ Lenormand Secrets ✦
        </span>

        <h1>Feedbacks</h1>

        <p>
          A experiência de quem já confiou em meu trabalho.
          <br />
          Confira os relatos e depoimentos de minhas clientes.
        </p>
      </section>

      <section className="feedbacks-video-section">
        <div className="feedbacks-section-title">
          <span>Depoimento em vídeo</span>
          <h2>Experiências reais</h2>
        </div>

        <div className="feedbacks-video-container">
          <video
            controls
            preload="metadata"
            playsInline
          >
            <source
              src="/images/feedback video 1.mp4"
              type="video/mp4"
            />

            Seu navegador não suporta a reprodução de vídeos.
          </video>
        </div>
      </section>

      <section className="feedbacks-gallery-section">
        <div className="feedbacks-section-title">
          <span>Relatos de clientes</span>
          <h2>Palavras que fazem a diferença</h2>

          <p>
            Cada feedback representa uma experiência e uma história.
          </p>
        </div>

        <div className="feedbacks-gallery">
          {feedbacks.map((feedback) => (
            <button
              key={feedback.id}
              className="feedbacks-card"
              type="button"
              onClick={() => setSelectedFeedback(feedback.id)}
              aria-label={`Ampliar feedback ${feedback.id}`}
            >
              <img
                src={feedback.src}
                alt={feedback.alt}
                loading="lazy"
              />

              <span className="feedbacks-card-overlay">
                ✦ Ampliar
              </span>
            </button>
          ))}
        </div>
      </section>

      {selectedFeedback !== null && (
        <div
          className="feedbacks-modal"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Feedback ampliado"
        >
          <button
            className="feedbacks-modal-close"
            type="button"
            onClick={closeModal}
            aria-label="Fechar"
          >
            ×
          </button>

          <button
            className="feedbacks-modal-nav feedbacks-modal-prev"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previousFeedback();
            }}
            aria-label="Feedback anterior"
          >
            ‹
          </button>

          <div
            className="feedbacks-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={`/images/feedback ${selectedFeedback}.jpeg`}
              alt={`Feedback de cliente ${selectedFeedback}`}
            />

            <span>
              {selectedFeedback} / 43
            </span>
          </div>

          <button
            className="feedbacks-modal-nav feedbacks-modal-next"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextFeedback();
            }}
            aria-label="Próximo feedback"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
