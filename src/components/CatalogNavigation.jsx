
import "./CatalogNavigation.css";

const sections = [
  { id: "politica", label: "Informações" },
  { id: "fidelidade", label: "Fidelidade" },
  { id: "indicacao", label: "Indique e ganhe" },
  { id: "perguntas", label: "Perguntas" },
  { id: "consultas", label: "Consultas completas" },
  { id: "metodos-amorosos", label: "Métodos amorosos" },
  { id: "metodos-gerais", label: "Métodos gerais" },
  { id: "analises", label: "Análises completas" },
  { id: "previsao", label: "Previsão" },
  { id: "analise-geral", label: "Análise geral" },
  { id: "espiritualidade", label: "Elo espiritual" },
  { id: "vislumbre", label: "Vislumbre Astral" },
  { id: "mesa-real", label: "Mesa Real" },
];

export default function CatalogNavigation() {
  return (
    <nav className="catalog-navigation">
      <div className="catalog-navigation-header">
        <span>✦ EXPLORE O CATÁLOGO</span>
        <p>
          Encontre diretamente o tipo de atendimento
          que procura.
        </p>
      </div>

      <div className="catalog-navigation-links">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
          >
            {section.label}
            <span>✦</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
