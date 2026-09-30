import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">

        <Link to="/" className="logo">
          <span className="logo-star">✦</span>
          <span>Lenormand Secrets</span>
        </Link>

        <nav>
          <Link
            to="/"
            className={isActive("/") ? "active" : ""}
          >
            Início
          </Link>

          <Link
            to="/catalogo"
            className={isActive("/catalogo") ? "active" : ""}
          >
            Catálogo
          </Link>

          <Link
            to="/cursos"
            className={isActive("/cursos") ? "active" : ""}
          >
            Meus cursos
          </Link>
        </nav>

        <Link to="/agendamento" className="header-button">
          Agendar
        </Link>

      </div>
    </header>
  );
}
