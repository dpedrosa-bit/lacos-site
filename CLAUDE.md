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
- Páginas: `/` (PT), `/en` (EN), `/privacidade`. Layout `Home.astro` monta a
  home a partir do dicionário; `Base.astro` tem head, header, footer.
- Identidade: papel claro, tinta escura, acento índigo `--laco`. Fontes
  Newsreader (display) e Inter (UI). Não reaproveitar cores da Cestas Company
  nem da Brazilian Florist.
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
