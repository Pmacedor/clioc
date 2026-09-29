# CLIOC — Landing Page (PRD)

## Problem statement original
"acima estão as imagens dos dentistas e logo" — construir uma landing page de alta conversão e SEO/MEO local para a clínica odontológica CLIOC (Clínica Odontomédica da Chapada), Ruy Barbosa – BA, usando as fotos dos dois dentistas e o logo enviados.

## Arquitetura
- Entrega estática: arquivo único `index.html` (HTML5 + Tailwind CDN + CSS inline + JS inline), pronto para GitHub Pages.
- Cópia servida em `/app/frontend/public/clioc.html` para preview.
- Raiz do React (`App.js`) redireciona para `/clioc.html` no preview.
- Sem backend (site estático).

## Personas
- Moradores de Ruy Barbosa – BA e Chapada Diamantina buscando dentista/odontologia.
- Visitantes vindos do Instagram (@clioc_rb) e Google Maps que querem agendar rápido via WhatsApp.

## Requisitos centrais (estáticos)
- SEO/MEO local: title, meta description, keywords, geo tags (BR-BA), Open Graph, Twitter card, Schema.org JSON-LD (Dentist/MedicalBusiness) com fundadores, especialidades e avaliação.
- CTAs para WhatsApp (+55 71 99270-4828) no header, hero, rodapé e botão flutuante com pulso.
- Links externos em nova aba: Instagram clínica/médicos, localização/avaliações Google.

## Implementado (2026-06)
- Header fixo com logo, menu suave e CTA WhatsApp.
- Hero editorial de luxo (Playfair/Cormorant + Plus Jakarta Sans), paleta esmeralda/menta/ouro.
- Grid de 8 especialidades com hover/brilho.
- Corpo clínico: cards Dr. Jouglas Brito e Dr. Yulo Módollo com fotos e Instagram.
- Seção História & Excelência com métricas.
- Avaliações (nota 5.0) + depoimentos placeholder + link Google.
- Rodapé com localização, mapa embed de Ruy Barbosa – BA e contatos.
- Botão flutuante WhatsApp com animação de pulso.
- SEO/JSON-LD completos.

## Backlog priorizado
- P1: Galeria de casos antes/depois; FAQ com Schema FAQPage; sitemap.xml + robots.txt.
- P2: Blog de conteúdo local para SEO.
- P2: Formulário de agendamento com backend + painel, calendário/horários, captação automática de avaliações.

## Suposições
- Depoimentos são textos representativos até avaliações reais serem fornecidas.
- Endereço "Ruy Barbosa – BA"; coordenadas aproximadas -12.2833;-40.4833.
- Mapa via embed público (sem chave de API).
- Idioma: Português (Brasil).

## Próximos passos
- Substituir depoimentos placeholder por avaliações reais do Google.
- Adicionar endereço/rua completo quando disponível.
- Fase 2: galeria antes/depois e FAQ.
