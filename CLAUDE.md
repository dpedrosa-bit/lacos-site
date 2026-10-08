# CLAUDE.md — Site do Sistema Laços (lacos.tec.br)

Leia este arquivo primeiro em qualquer sessão nova. Depois leia `STATUS.md`.

## O que é

Site institucional de uma página da **Lacos Sistemas e Tecnologia Ltda** (nome
fantasia "Sistema Laços"), CNPJ 68.907.014/0001-27, São Paulo/SP. Apresenta os
módulos do Sistema Laços para lojas de flores e presentes em Shopify e
Nuvemshop. Existe para dar à empresa um site e um e-mail no próprio domínio,
condição da aplicação ao programa Claude Startups (out/2026), e para ser a
vitrine quando o produto for oferecido a lojas de terceiros.

- **Domínio:** lacos.tec.br (DNS na Cloudflare, conta dpedrosa@gmail.com)
- **Hospedagem:** Cloudflare Pages, deploy a cada push na `main`
- **E-mail:** contato@lacos.tec.br e douglas@lacos.tec.br via Cloudflare Email Routing
- **Produto:** o código do Sistema Laços vive em outros repos (cestas-company,
  cestas-routes, cestas-atendente, delivery-picker-v2). Este repo é só o site.

## Stack e regras

- Astro 5 estático, sem framework de UI. CSS próprio em `src/styles/global.css`.
- **Todo texto fica em `src/data/site.ts`**, nos dicionários `t.pt` e `t.en`.
  As páginas não têm texto solto. Para mudar copy, mude ali.
- Páginas: `/` (PT), `/en` (EN), `/privacidade`. Seções da home: hero, módulos,
  loja completa (criação de loja nova em Shopify/Nuvemshop), em produção, para
  quem, empresa, contato. Layout `Home.astro` monta a
  home a partir do dicionário; `Base.astro` tem head, header, footer.
- Identidade: a do Claude Design (ago/2026, `Downloads\Sistema Laços – Identidade
  Visual*` e `Site Laços para Revisão.zip`): fundo quase branco, tinta #111114,
  gradiente da marca #3E6BFF → #7B2FF2 → #FF3DBE usado com parcimônia (wordmark,
  CTAs, números), acento teal/menta. Poppins na página, Albert Sans só no
  wordmark. Logos em `public/marca/` (símbolo flat e glow, assinatura escura).
  O wordmark no header é HTML ("Sistema" + "Laços" em gradiente), não o SVG da
  assinatura, porque o SVG usa `<text>` com fonte que não carrega em `<img>`.
- Sem preços no site enquanto a tabela não estiver fechada.
- IDs de rastreamento só por variável de ambiente (`PUBLIC_GA4_ID`). Sem o
  ID, nenhum script de terceiro carrega.
- Nada de afirmação não verificável: marca não está depositada no INPI,
  Curitiba e Brasília ainda não estão no ar.

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```
