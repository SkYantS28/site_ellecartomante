import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return ( 
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            ✦ LENORMAND SECRETS
          </span>

          <h1>
            Descubra o que
            <br />
            as cartas podem
            <span> revelar.</span>
          </h1>

          <p>
            Uma experiência de leitura feita para quem busca novas
            perspectivas sobre o amor, a vida pessoal, os caminhos
            profissionais e as questões que fazem parte do seu momento.
          </p>

          <div className="hero-buttons">
            <Link to="/catalogo" className="button-primary">
              Ver as leituras
            </Link>

            <Link to="/agendamento" className="button-secondary">
              Falar com a Elle
            </Link>
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-frame">
            <img
              src="/images/elle.png"
              alt="Elle - Lenormand Secrets"
              onError={(e) => {
                e.target.style.background = "var(--roxo)";
              }}
            />

            <div className="photo-decoration">✦</div>
          </div>
        </div>

      </section>

      <section className="about">
        <span className="section-eyebrow">
          <span>✦ </span> 
            LENORMAND SECRETS
          <span> ✦</span>
        </span>

        <h2>
          Uma leitura para cada
          <span> momento.</span>
        </h2>

        <p>
          Do atendimento por perguntas às consultas completas, dos
          métodos amorosos às análises de diferentes áreas da vida.
          Escolha a leitura que mais combina com aquilo que você
          deseja investigar e encontre um espaço para olhar sua
          situação por novos ângulos.
        </p>

      </section>

      <section className="home-cards">
        <div>
          <h3><span>✦ </span> Questões do coração</h3>

          <p>
            Métodos voltados para relacionamentos, sentimentos,
            intenções, términos, reconciliações e decisões na vida
            amorosa.
          </p>
        </div>

        <div>
          <h3><span>✦ </span>Vida & Caminhos</h3>

          <p>
            Explore questões pessoais, profissionais, financeiras,
            sociais e outras escolhas que fazem parte da sua jornada.
          </p>
        </div>

        <div>
          <h3><span>✦ </span>Espiritualidade</h3>

          <p>
            Leituras dedicadas ao autoconhecimento, espiritualidade,
            mediunidade e conexão com diferentes aspectos da sua
            jornada interior.
          </p>
        </div>

      </section>

      <section className="cta">

        <h2>
          <span>✦ </span> 
          Qual questão você
          <br />
          quer investigar?
        </h2>

        <Link to="/catalogo">
          Conhecer o catálogo →
        </Link>

      </section>
    </div>
  );
}
