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
    titulo: 'Sistema Laços — software e lojas online para flores e presentes',
    descricao:
      'Módulos de agendamento de entrega, presente, atendimento com IA e painel de operação para lojas em Shopify e Nuvemshop. Ou a loja completa, pronta para vender.',
    nav: { modulos: 'Módulos', lojasNovas: 'Loja completa', producao: 'Em produção', paraQuem: 'Para quem', empresa: 'Empresa', contato: 'Contato' },
    trocarIdioma: { href: '/en', rotulo: 'English' },

    heroOlho: 'Flores, cestas e presentes',
    heroTitulo: 'Sua loja de flores e presentes vendendo online, <span class="grad-texto">com entrega no mesmo dia.</span>',
    heroTexto:
      'Módulos para quem já vende em Shopify ou Nuvemshop, e a loja completa para quem está começando. Feito por quem opera uma rede de floriculturas há mais de vinte anos.',
    heroCta: 'Falar com a gente',
    heroCtaSec: 'Ver os módulos',

    modulosOlho: 'Módulos',
    modulosTitulo: 'O que a sua loja ganha',
    modulosTexto: 'Instalam na loja que você já tem, em Shopify ou Nuvemshop. Cada um resolve um problema que aparece no balcão todo dia.',
    modulos: [
      {
        titulo: 'Agendamento de entrega',
        texto:
          'Data e horário escolhidos na página do produto, com taxa calculada pelo CEP, faixas por distância, horário de corte e datas bloqueadas. A loja só aceita o pedido que consegue entregar.',
      },
      {
        titulo: 'Presente',
        texto:
          'Mensagem do cartão, escolha do cartão e complementos como chocolate, vinho e balão. Tudo viaja junto no pedido, sem retrabalho no atendimento.',
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

    lojasOlho: 'Loja completa',
    lojasTitulo: 'Ainda não vende online? Entregamos a loja pronta.',
    lojasTexto:
      'Criamos a sua loja do zero em Shopify ou Nuvemshop: tema, produtos cadastrados com foto e descrição, frete e pagamentos configurados e os módulos já integrados. Você recebe a loja vendendo, não um projeto para terminar.',
    lojasCta: 'Quero minha loja',
    lojasPassos: [
      {
        titulo: 'Plataforma e tema',
        texto: 'Escolhemos com você entre Shopify e Nuvemshop e montamos a loja com o modelo que já roda nas nossas lojas.',
      },
      {
        titulo: 'Catálogo e configurações',
        texto: 'Cadastramos produtos, variações, coleções, frete por região, formas de pagamento, e-mails e domínio.',
      },
      {
        titulo: 'Módulos integrados',
        texto: 'Agendamento de entrega, presente, atendente com IA e painel de operação já ligados no dia da entrega.',
      },
      {
        titulo: 'Treinamento e acompanhamento',
        texto: 'Sua equipe aprende a operar e nós seguimos junto nas primeiras semanas de venda.',
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
    paraQuemTitulo: 'Floriculturas e lojas de cestas, com ou sem site',
    paraQuem: [
      {
        titulo: 'Quem já vende em Shopify ou Nuvemshop',
        texto: 'Instala os módulos na loja que já tem e passa a vender com data de entrega, presente e atendimento automatizado.',
      },
      {
        titulo: 'Quem ainda não vende online',
        texto: 'Recebe a loja completa, com produtos, configurações e módulos integrados, pronta para o primeiro pedido.',
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

    rodapeLinha: 'Software e lojas online para flores e presentes.',
    rodapeEmpresa: 'Lacos Sistemas e Tecnologia Ltda · CNPJ 68.907.014/0001-27 · São Paulo, SP',
    privacidade: { href: '/privacidade', rotulo: 'Privacidade' },
  },
  en: {
    lang: 'en',
    titulo: 'Sistema Laços — software and online stores for flower and gift shops',
    descricao:
      'Delivery scheduling, gifting, AI customer service and operations modules for shops on Shopify and Nuvemshop. Or the complete store, ready to sell.',
    nav: { modulos: 'Modules', lojasNovas: 'Complete store', producao: 'In production', paraQuem: 'Who it is for', empresa: 'Company', contato: 'Contact' },
    trocarIdioma: { href: '/', rotulo: 'Português' },

    heroOlho: 'Flowers, baskets and gifts',
    heroTitulo: 'Your flower and gift shop selling online, <span class="grad-texto">with same-day delivery.</span>',
    heroTexto:
      'Modules for shops already selling on Shopify or Nuvemshop, and the complete store for those just starting. Built by people who have run a flower-delivery network for over twenty years.',
    heroCta: 'Talk to us',
    heroCtaSec: 'See the modules',

    modulosOlho: 'Modules',
    modulosTitulo: 'What your shop gets',
    modulosTexto: 'They install on the store you already have, on Shopify or Nuvemshop. Each one solves a problem that shows up at the counter every day.',
    modulos: [
      {
        titulo: 'Delivery scheduling',
        texto:
          'Date and time slot chosen on the product page, with fees computed from the postal code, distance bands, cut-off times and blocked dates. The shop only accepts orders it can deliver.',
      },
      {
        titulo: 'Gifting',
        texto:
          'Card message, card choice and add-ons such as chocolate, wine and balloons. Everything travels with the order, so nothing is re-typed by the team.',
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

    lojasOlho: 'Complete store',
    lojasTitulo: 'Not selling online yet? We deliver the store ready.',
    lojasTexto:
      'We build your store from scratch on Shopify or Nuvemshop: theme, products with photos and descriptions, shipping and payments configured, and the modules already integrated. You receive a store that is selling, not a project to finish.',
    lojasCta: 'I want my store',
    lojasPassos: [
      {
        titulo: 'Platform and theme',
        texto: 'We choose Shopify or Nuvemshop with you and set up the store on the model that already runs in our own shops.',
      },
      {
        titulo: 'Catalogue and settings',
        texto: 'We register products, variants, collections, shipping by region, payment methods, e-mails and domain.',
      },
      {
        titulo: 'Integrated modules',
        texto: 'Delivery scheduling, gifting, AI assistant and operations panel connected on delivery day.',
      },
      {
        titulo: 'Training and follow-up',
        texto: 'Your team learns to operate it and we stay alongside through the first weeks of sales.',
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
    paraQuemTitulo: 'Florists and gift-basket shops, with or without a website',
    paraQuem: [
      {
        titulo: 'Already selling on Shopify or Nuvemshop',
        texto: 'Install the modules on the store you have and start selling with delivery dates, gifting and automated customer service.',
      },
      {
        titulo: 'Not selling online yet',
        texto: 'Receive the complete store, with products, settings and modules integrated, ready for the first order.',
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

    rodapeLinha: 'Software and online stores for flower and gift shops.',
    rodapeEmpresa: 'Lacos Sistemas e Tecnologia Ltda · CNPJ 68.907.014/0001-27 · São Paulo, Brazil',
    privacidade: { href: '/privacidade', rotulo: 'Privacy' },
  },
} as const;
