# STATUS.md — nota de passagem de turno

## 08/10/2026 — site no ar em lacos.tec.br, e-mail roteado

**Feito**
- Repo com home PT (`/`), EN (`/en`) e `/privacidade`, identidade do Claude
  Design (logo, gradiente, Poppins) e seção "Loja completa" (criação de loja
  nova em Shopify/Nuvemshop). Build com `format: 'file'` (sem redirect de barra).
- Cloudflare: zona `lacos.tec.br` ativa (Free), CNAME `2osasco` → Hostinger
  preservado (DNS only). Registro.br delegou para indie/ryan às ~10:05;
  DNSSEC foi removido pelo Registro.br na troca (pode ser religado depois,
  pelo painel da Cloudflare).
- Pages: projeto `lacos-site` ligado ao GitHub (preset Astro, `npm run build`,
  `dist`), deploy a cada push na `main`. Domínios `lacos.tec.br` (ativo, SSL)
  e `www.lacos.tec.br` (verificando às 10:28, responde 200).
- Email Routing ativo: MX route1-3, SPF, DKIM cf2024-1. Regras
  `contato@` e `douglas@` → dpedrosa@gmail.com (destino já verificado).
  Catch-all desligado.

**Pendente**
1. Conta no Claude Console com douglas@lacos.tec.br e aplicação ao Claude
   Startups (plano em `OneDrive\CLAUDE\lacos\CLAUDE_STARTUPS_APLICACAO.md`).
2. Opcional: incluir `include:_spf.google.com` no SPF da lacos.tec.br (envio
   pelo Gmail "enviar como"), GA4 (`PUBLIC_GA4_ID` no Pages), religar DNSSEC.

**Concluído em 08/10 (tarde):** roteamento testado (e-mail de terceiro chegou em
douglas@), "enviar como" configurado pelo Douglas, repo tornado PÚBLICO.
