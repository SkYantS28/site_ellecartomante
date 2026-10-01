import {
  perguntas,
  consultasCompletas,
  metodosAmorosos,
  metodosGerais,
  analisesCompletas,
  previsao,
  analiseGeral,
  eloEspiritual,
  vislumbreAstral,
  mesaReal,
  fidelidade,
  indicacao,
  politica,
  taxaEmergencial,
} from "../data/catalogo";

import MethodCard from "../components/MethodCard";

import "./Catalogo.css";

function formatPrice(valor) {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

function PriceCard({ item }) {
  return (
    <div className="price-card">
      <span>{item.nome}</span>

      <strong>
        {formatPrice(item.valor)}
      </strong>
    </div>
  );
}

function SectionTitle({ eyebrow, title, highlight }) {
  return (
    <div className="section-heading">
      {eyebrow && <span>✦ {eyebrow}</span>}

      <h2>
        {title}
        {highlight && <strong> {highlight}</strong>}
      </h2>
    </div>
  );
}

function MethodSection({ title, data }) {
  return (
    <section className="methods-section">
      <SectionTitle title={title} />

      <div className="method-price-highlight">
        <span>Valor individual</span>
        <strong>{formatPrice(data.valor)}</strong>
      </div>

      <div className="combo-section">
        <h3>Combos</h3>

        <div className="prices">
          {data.combos.map((item) => (
            <PriceCard
              key={item.nome}
              item={item}
            />
          ))}
        </div>
      </div>

      <div className="method-grid">
        {data.metodos.map((method) => (
          <MethodCard
            key={method.nome}
            method={method}
          />
        ))}
      </div>
    </section>
  );
}

export default function Catalogo() {
  return (
    <div className="catalogo">

      {/* CABEÇALHO */}

      <section className="page-header">
        <span>✦ LENORMAND SECRETS</span>

        <h1>
          Catálogo
        </h1>

        <p>
          Escolha a leitura que melhor corresponde
          ao que você deseja compreender neste momento.
        </p>
      </section>

     {/* POLÍTICA DE ATENDIMENTO */}
      <section className="important">
        <SectionTitle
          eyebrow="POLÍTICA DE ATENDIMENTO"
          title="Informações"
          highlight="importantes"
        />

        <div className="important-list">
          {politica.map((regra, index) => (
            <p key={index}>
              <span>✦</span>
              {regra}
            </p>
          ))}
        </div>

        <aside>
          <strong>
            Taxa emergencial: {formatPrice(taxaEmergencial.valor)}
          </strong>

          <span>
            {taxaEmergencial.descricao}
          </span>

          <small>
            {taxaEmergencial.aviso}
          </small>
        </aside>
      </section>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* PROGRAMA DE FIDELIDADE */}
      <section className="fidelity">
        <SectionTitle
          eyebrow="PROGRAMA DE FIDELIDADE"
          title="Acumule"
          highlight="benefícios"
        />

        <div className="fidelity-grid">
          <div className="fidelity-main">
            <p>
              <span>✦ </span>
              A cada 10 pontos ganhe <strong>3 perguntas</strong> ou <strong>20% de desconto</strong> em qualquer item do catálogo 
            </p>
          </div>

          <div className="fidelity-details">
            <p>
              <span>✦ </span>
              1 pergunta = <strong>1 ponto</strong>
            </p>
            <p>
              <span>✦ </span>
              Como conseguir os pontos?
            </p>

            <p>
              <span>✦ </span>
              1 método, uma analise ou uma previsão: <strong>2 pontos</strong>
            </p>

            <p>
              <span>✦ </span>
              1 consulta completa = <strong>3 pontos</strong>
            </p>
          </div>
        </div>
      </section>

      {/* INDIQUE E GANHE */}
      <section className="indication-section">
        <span>✦ INDIQUE E GANHE</span>

        <h2>
          Compartilhe e
          <strong> ganhe benefícios.</strong>
        </h2>

        <p>
          <span>✦ </span> Indique para seus amigos!
        </p>
        <br></br>
        <p>
          <span>✦ </span> Cada pessoa indicada por você que realizar uma consulta te garante <strong>1 pergunta gratuita</strong> ou <strong>20% de desconto</strong> em algum método ou análise.
        </p>
      </section>

      {/* PERGUNTAS */}
      <section className="catalog-section">
        <SectionTitle
          eyebrow="PERGUNTAS"
          title="Perguntas ao"
          highlight="Oráculo"
        />

        <p className="section-description">
          {perguntas.descricao}
        </p>

        <div className="prices">
          {perguntas.precos.map((item) => (
            <PriceCard
              key={item.nome}
              item={item}
            />
          ))}
        </div>
      </section>

      {/* CONSULTAS COMPLETAS */}
      <section className="catalog-section">
        <SectionTitle
          eyebrow="CONSULTAS COMPLETAS"
          title="Consultas"
          highlight="completas"
        />

        <p className="section-description">
          {consultasCompletas.descricao}
        </p>

        <div className="prices">
          {consultasCompletas.precos.map((item) => (
            <PriceCard
              key={item.nome}
              item={item}
            />
          ))}
        </div>
      </section>


      {/* MÉTODOS AMOROSOS */}
      <MethodSection
        title="Métodos amorosos"
        data={metodosAmorosos}
      />

      {/* MÉTODOS GERAIS */}
      <MethodSection
        title="Métodos gerais"
        data={metodosGerais}
      />


      {/* ANÁLISES COMPLETAS */}
      <MethodSection
        title="Análises completas"
        data={analisesCompletas}
      />

      {/* PREVISÃO */}

      <section className="catalog-section featured-section">
        <SectionTitle
          eyebrow="PREVISÃO"
          title="Previsão"
        />

        <div className="featured-price">
          {formatPrice(previsao.valor)}
        </div>

        <p className="section-description">
          {previsao.descricao}
        </p>

        <div className="period-list">
          {previsao.periodos.map((periodo) => (
            <span key={periodo}>
              {periodo}
            </span>
          ))}
        </div>

        <ul className="info-list">
          {previsao.itens.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>


      {/* ANÁLISE GERAL */}
      <section className="catalog-section featured-section">
        <SectionTitle
          eyebrow="ANÁLISE"
          title="Análise"
          highlight="geral"
        />

        <div className="featured-price">
          {formatPrice(analiseGeral.valor)}
        </div>

        <p className="section-description">
          {analiseGeral.descricao}
        </p>

        <ul className="info-list">
          {analiseGeral.itens.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>


      {/* ELO ESPIRITUAL */}
      <section className="catalog-section featured-section">
        <SectionTitle
          eyebrow="ESPIRITUALIDADE"
          title="Elo"
          highlight="espiritual"
        />

        <div className="featured-price">
          {formatPrice(eloEspiritual.valor)}
        </div>

        <ul className="info-list">
          {eloEspiritual.itens.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* VISLUMBRE ASTRAL */}
      <section className="catalog-section">
        <SectionTitle
          eyebrow="ORÁCULO VISLUMBRE ASTRAL"
          title="Vislumbre"
          highlight="Astral"
        />

        <div className="featured-price">
          {formatPrice(vislumbreAstral.valor)}
        </div>

        <p className="section-description">
          {vislumbreAstral.descricao}
        </p>

        <div className="method-grid">
          {vislumbreAstral.metodos.map((method) => (
            <MethodCard
              key={method.nome}
              method={method}
            />
          ))}
        </div>
      </section>


      {/* MESA REAL */}
      <section className="mesa-real">
        <span>✦ LEITURA ESPECIAL</span>

        <h2>
          Mesa <strong>Real</strong>
        </h2>

        <div className="featured-price">
          {formatPrice(mesaReal.valor)}
        </div>

        <p>
          {mesaReal.descricao}
        </p>
      </section>

    </div>
  );
}
