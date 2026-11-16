
export const mentoria = {
  titulo: "Mentoria",
  subtitulo: "Para cartomantes",

  funcionamento: [
    "Mentoria individual, por chamada de vídeo ou áudio.",
    "Duração de 1h, 1h30 ou 2h por sessão.",
    "Sem assunto predefinido; temos uma conversa antes da sua sessão e já alinhamos tudo que será visto para otimizar nosso tempo.",
    "Podemos conversar desde o básico das cartas até métodos mais profundos como análise espiritual e mediúnica, o que você quiser aprender.",
  ],

  acompanhamento: {
    titulo: "Acompanhamento por WhatsApp",
    subtitulo: "Durante o período contratado",

    inclui: [
      "Ajuda para interpretar tiragens",
      "Dúvidas acerca dos assuntos que foram tratados nas chamadas",
      "Orientações gerais acerca do trabalho na cartomancia",
    ],
  },

  valores: {
    avulsa: {
      titulo: "Sessão avulsa",
      descricao: "Escolha a duração da sua mentoria.",

      opcoes: [
        { nome: "1 hora", duracao: "60 minutos", valor: 128 },
        { nome: "1h30", duracao: "90 minutos", valor: 182 },
        { nome: "2 horas", duracao: "120 minutos", valor: 230 },
      ],
    },

    semanal: {
      titulo: "Plano semanal",
      descricao: "Encontros por semana.",

      opcoes: [
        {
          nome: "2 encontros · 1h",
          encontros: "2 encontros de 1 hora",
          valor: 218.50,
        },
        {
          nome: "2 encontros · 2h",
          encontros: "2 encontros de 2 horas",
          valor: 437.00,
        },
        {
          nome: "3 encontros · 1h",
          encontros: "3 encontros de 1 hora",
          valor: 310.50,
        },
        {
          nome: "3 encontros · 2h",
          encontros: "3 encontros de 2 horas",
          valor: 621.00,
        },
      ],
    },

    mensal: {
      titulo: "Plano mensal",
      descricao: "Encontros por semana, somados no mês.",

      opcoes: [
        {
          nome: "1 por semana · 1h",
          encontros: "4 encontros no total",
          valor: 391.00,
        },
        {
          nome: "1 por semana · 2h",
          encontros: "4 encontros no total",
          valor: 782.00,
        },
        {
          nome: "2 por semana · 1h",
          encontros: "8 encontros no total",
          valor: 754.40,
        },
        {
          nome: "2 por semana · 2h",
          encontros: "8 encontros no total",
          valor: 1508.80,
        },
        {
          nome: "3 por semana · 1h",
          encontros: "12 encontros no total",
          valor: 1104.00,
        },
        {
          nome: "3 por semana · 2h",
          encontros: "12 encontros no total",
          valor: 2208.00,
        },
      ],
    },
  },
};
