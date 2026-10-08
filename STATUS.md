# STATUS.md — nota de passagem de turno

## 08/10/2026 — site criado, DNS em transição

**Feito**
- Repo criado com home PT (`/`), EN (`/en`) e `/privacidade`. Build OK.
- Zona `lacos.tec.br` criada na Cloudflare (plano Free), com o CNAME
  `2osasco` → Hostinger recriado (DNS only). Nameservers: indie e ryan.
- Registro.br: servidores DNS trocados para a Cloudflare em 08/10 ~08:05.
  O Registro.br removeu o DNSSEC na hora e segura a delegação por ~2h.

**Pendente (nesta ordem)**
1. Delegação concluir no .br → clicar "I updated my nameservers" na Cloudflare.
2. Email Routing em lacos.tec.br: `contato@` e `douglas@` → dpedrosa@gmail.com;
   "enviar como" no Gmail.
3. Cloudflare Pages: projeto `lacos-site` ligado a este repo, domínio
   lacos.tec.br + www.
4. Douglas aprovar o texto (ver `src/data/site.ts`) e tornar o repo público.
5. Conta no Claude Console com douglas@lacos.tec.br e aplicação ao Claude
   Startups (plano em `OneDrive\CLAUDE\lacos\CLAUDE_STARTUPS_APLICACAO.md`).
