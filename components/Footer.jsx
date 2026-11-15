import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
const currentYear = new Date().getFullYear();

const handleNavigation = () => {
window.scrollTo({
top: 0,
behavior: "smooth",
});
};
  return ( 
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <Link
            to="/"
            className="footer-logo"
            onClick={handleNavigation}
          >
            <span>✦</span>
            <span>Lenormand Secrets</span>
          </Link>

          <p>
            Leituras intuitivas para trazer clareza,
            direcionamento e novas perspectivas.
          </p>
        </div>


        <div className="footer-column">

          <h2>Navegação</h2>

          <Link to="/" onClick={handleNavigation}>
            Início
          </Link>

          <Link to="/catalogo" onClick={handleNavigation}>
            Catálogo
          </Link>

          <Link to="/cursos" onClick={handleNavigation}>
            Meus cursos
          </Link>

          <Link to="/agendamento" onClick={handleNavigation}>
            Agendamento
          </Link>

        </div>


        <div className="footer-column">

          <h2>Contato</h2>

          <a
            href="https://instagram.com/lenormandsecrets"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@lenormandsecrets"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>

          <a href="mailto:lenormandsecrets@gmail.com">
            lenormandsecrets@gmail.com
          </a>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © {currentYear} Lenormand Secrets. Todos os direitos reservados.
        </p>

        <p>
          Conteúdo, textos, identidade visual e materiais autorais
          protegidos por direitos autorais.
        </p>

        <span>
          ✦ Feito por Sky Crizosti
        </span>

      </div>

    </footer>
  );
}
