// Fonte única de verdade do site. Trocar aqui muda em todas as páginas.

export const site = {
  nome: 'Sistema Laços',
  razaoSocial: 'Lacos Sistemas e Tecnologia Ltda',
  cnpj: '68.907.014/0001-27',
  cidade: 'São Paulo',
  uf: 'SP',
  email: 'contato@lacos.tec.br',
  url: 'https://lacos.tec.br',
  fundacao: 2026,
} as const;

export type Lang = 'pt' | 'en';

export const t = {
  pt: {
    lang: 'pt-BR',
    titulo: 'Sistema Laços — software para lojas de flores e presentes',
    descricao:
      'Agendamento de entrega, personalização de presente, atendimento com IA e painel de operação para lojas de flores e cestas em Shopify e Nuvemshop.',
    nav: { modulos: 'Módulos', producao: 'Em produção', paraQuem: 'Para quem', empresa: 'Empresa', contato: 'Contato' },
    trocarIdioma: { href: '/en', rotulo: 'English' },

    heroOlho: 'Software para flores e presentes',
    heroTitulo: 'Software para lojas de flores e presentes que entregam no mesmo dia.',
    heroTexto:
      'Agendamento de entrega, personalização de presente e atendimento com inteligência artificial para lojas em Shopify e Nuvemshop. Feito por quem opera uma rede de floriculturas há mais de vinte anos.',
    heroCta: 'Falar com a gente',
    heroCtaSec: 'Ver os módulos',

    modulosOlho: 'Módulos',
    modulosTitulo: 'O que a loja ganha',
    modulos: [
      {
        titulo: 'Agendamento de entrega',
        texto:
          'Seletor de data e horário na página do produto, com taxa calculada pelo CEP, faixas por distância, horário de corte e datas bloqueadas. A loja só aceita o pedido que consegue entregar.',
      },
      {
        titulo: 'Presente',
        texto:
          'Mensagem do cartão, escolha do cartão, complementos como chocolate, vinho e balão, e tudo isso vai junto no pedido, sem retrabalho no atendimento.',
      },
      {
        titulo: 'Atendente com IA',
        texto:
          'Atende no WhatsApp, no chat do site e por e-mail. Conhece o catálogo, a área de entrega e o pedido do cliente. Responde, vende e passa para a equipe quando precisa.',
      },
      {
        titulo: 'Painel de operação',
        texto:
          'Pedidos do dia, produção, impressão, rotas de entrega e repasse para floriculturas parceiras em outras cidades, com status compartilhado com o cliente.',
      },
    ],

    producaoOlho: 'Em produção',
    producaoTitulo: 'Roda hoje em lojas reais',
    producaoTexto:
      'O Sistema Laços nasceu dentro da operação da Cestas Company, da Uniflores e da Brazilian Florist, lojas que entregam flores e cestas em São Paulo e em todo o Brasil. A loja principal fecha por volta de duas dezenas de pedidos por dia pelo site, e cada módulo foi construído para resolver um problema que aparecia no balcão.',
    producaoItens: [
      { numero: '3', rotulo: 'marcas em operação' },
      { numero: '5', rotulo: 'lojas conectadas ao mesmo painel' },
      { numero: '20+', rotulo: 'anos operando floriculturas' },
    ],

    paraQuemOlho: 'Para quem',
    paraQuemTitulo: 'Floriculturas e lojas de cestas que vendem online',
    paraQuem: [
      {
        titulo: 'Loja própria em Shopify ou Nuvemshop',
        texto: 'Instala os módulos na sua loja e passa a vender com data de entrega, presente e atendimento automatizado.',
      },
      {
        titulo: 'Floricultura parceira de cidade',
        texto: 'Recebe pedidos repassados pela rede, confirma, entrega e informa o status, sem precisar de sistema próprio.',
      },
      {
        titulo: 'Rede com várias lojas',
        texto: 'Um painel para todas as lojas, catálogo replicável e regras de entrega por praça.',
      },
    ],

    empresaOlho: 'Empresa',
    empresaTitulo: 'Quem faz',
    empresaTexto:
      'A Lacos Sistemas e Tecnologia Ltda é uma empresa de software de São Paulo, fundada em 2026 para levar a lojas independentes o sistema que opera a rede de floriculturas do fundador. O produto evolui todos os dias dentro dessas lojas antes de chegar a qualquer cliente.',

    contatoOlho: 'Contato',
    contatoTitulo: 'Quer ver funcionando na sua loja?',
    contatoTexto: 'Escreva para a gente. Respondemos em até um dia útil.',
    contatoCta: 'Enviar e-mail',

    rodapeLinha: 'Software para lojas de flores e presentes.',
    rodapeEmpresa: 'Lacos Sistemas e Tecnologia Ltda · CNPJ 68.907.014/0001-27 · São Paulo, SP',
    privacidade: { href: '/privacidade', rotulo: 'Privacidade' },
  },
  en: {
    lang: 'en',
    titulo: 'Sistema Laços — software for flower and gift shops',
    descricao:
      'Delivery scheduling, gift personalization, AI customer service and an operations panel for flower and gift-basket shops on Shopify and Nuvemshop.',
    nav: { modulos: 'Modules', producao: 'In production', paraQuem: 'Who it is for', empresa: 'Company', contato: 'Contact' },
    trocarIdioma: { href: '/', rotulo: 'Português' },

    heroOlho: 'Software for flowers and gifts',
    heroTitulo: 'Software for flower and gift shops that deliver the same day.',
    heroTexto:
      'Delivery scheduling, gift personalization and AI-powered customer service for shops on Shopify and Nuvemshop. Built by people who have run a flower-delivery network for over twenty years.',
    heroCta: 'Talk to us',
    heroCtaSec: 'See the modules',

    modulosOlho: 'Modules',
    modulosTitulo: 'What the shop gets',
    modulos: [
      {
        titulo: 'Delivery scheduling',
        texto:
          'Date and time-slot picker on the product page, with fees computed from the postal code, distance bands, cut-off times and blocked dates. The shop only accepts orders it can deliver.',
      },
      {
        titulo: 'Gifting',
        texto:
          'Card message, card choice and add-ons such as chocolate, wine and balloons, all travelling with the order so nothing is re-typed by the team.',
      },
      {
        titulo: 'AI assistant',
        texto:
          'Answers on WhatsApp, on the website chat and by e-mail. Knows the catalogue, the delivery area and the customer\'s order. Replies, sells and hands over to the team when needed.',
      },
      {
        titulo: 'Operations panel',
        texto:
          'Orders of the day, production, printing, delivery routes and hand-off to partner florists in other cities, with status shared with the customer.',
      },
    ],

    producaoOlho: 'In production',
    producaoTitulo: 'Running today in real shops',
    producaoTexto:
      'Sistema Laços was born inside the operations of Cestas Company, Uniflores and Brazilian Florist, shops delivering flowers and gift baskets in São Paulo and across Brazil. The flagship store closes around two dozen online orders a day, and every module was built to solve a problem that showed up at the counter.',
    producaoItens: [
      { numero: '3', rotulo: 'brands in operation' },
      { numero: '5', rotulo: 'stores on the same panel' },
      { numero: '20+', rotulo: 'years running flower shops' },
    ],

    paraQuemOlho: 'Who it is for',
    paraQuemTitulo: 'Florists and gift-basket shops that sell online',
    paraQuem: [
      {
        titulo: 'Your own Shopify or Nuvemshop store',
        texto: 'Install the modules and start selling with delivery dates, gifting and automated customer service.',
      },
      {
        titulo: 'Partner florist in a city',
        texto: 'Receive orders handed off by the network, confirm, deliver and report status, with no system of your own.',
      },
      {
        titulo: 'Network with several stores',
        texto: 'One panel for every store, a replicable catalogue and delivery rules per city.',
      },
    ],

    empresaOlho: 'Company',
    empresaTitulo: 'Who builds it',
    empresaTexto:
      'Lacos Sistemas e Tecnologia Ltda is a software company from São Paulo, Brazil, founded in 2026 to bring independent shops the system that runs the founder\'s flower-delivery network. The product evolves every day inside those shops before it reaches any customer.',

    contatoOlho: 'Contact',
    contatoTitulo: 'Want to see it running in your shop?',
    contatoTexto: 'Write to us. We reply within one business day.',
    contatoCta: 'Send an e-mail',

    rodapeLinha: 'Software for flower and gift shops.',
    rodapeEmpresa: 'Lacos Sistemas e Tecnologia Ltda · CNPJ 68.907.014/0001-27 · São Paulo, Brazil',
    privacidade: { href: '/privacidade', rotulo: 'Privacy' },
  },
} as const;
