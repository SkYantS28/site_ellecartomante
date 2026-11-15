import { useState } from "react";

export default function MethodCard({ method }) {
  const [open, setOpen] = useState(false);

  return (
    <article className={`method-card ${open ? "open" : ""}`}>
      <button
        className="method-header"
        onClick={() => setOpen(!open)}
        type="button"
        aria-expanded={open}
      >
        <div>
          <h3>{method.nome}</h3>
        </div>

        <strong>
          {open ? "−" : "+"}
        </strong>
      </button>

      {open && (
        <div className="method-content">
          <ul>
            {method.itens.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {method.adicional && (
            <small>{method.adicional}</small>
          )}
        </div>
      )}
    </article>
  );
}
