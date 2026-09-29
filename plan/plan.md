# CLIOC — Landing Page de Alta Conversão (SEO/MEO Local)

Landing page única, ultra-profissional e responsiva para a clínica odontológica CLIOC (Clínica Odontomédica da Chapada), em Ruy Barbosa – BA.
Objetivo central: ranquear no topo do Google para buscas locais de dentista/odontologia e converter visitantes em consultas via WhatsApp.

## Para quem é
- Moradores de Ruy Barbosa – BA e região da Chapada Diamantina buscando dentista, implantes, harmonização orofacial, canal, ortodontia e odontologia digital.
- Pessoas que chegam pelo Instagram (@clioc_rb) e pelo Google Maps e precisam de um caminho rápido para agendar.

## Funcionalidades e experiência principais
- **Header fixo** com logo CLIOC, menu de navegação suave (Especialidades, Corpo Clínico, História, Avaliações, Localização) e botão fixo "Agendar Consulta" → WhatsApp.
- **Hero estilo revista de luxo** com H1 otimizado ("Dentista e Odontologia Especializada em Ruy Barbosa – BA"), subtítulo e dois botões: "Agendar via WhatsApp" e "Siga nosso Instagram".
- **Corpo clínico e fundadores**: dois cards editoriais premium.
  - Dr. Jouglas Brito — Harmonização Orofacial, Odontologia Estética, Ortodontia, Cirurgia Oral Menor + botão para o Instagram dele.
  - Dr. Yulo Módollo — Implante Dentário, Prótese Dentária, Endodontia Automatizada (Canal), Odontologia Digital + botão para o Instagram dele.
- **Seção História & Excelência**: bloco editorial sobre a evolução da odontologia e a missão da CLIOC de trazer modernidade dos grandes centros para Ruy Barbosa e a Chapada.
- **Grid de especialidades** (8 cards com efeito hover/brilho esmeralda), com títulos ricos em palavras-chave: implantes, harmonização orofacial, odontologia digital, endodontia, ortodontia, prótese, odontologia estética, cirurgia oral menor.
- **Prova social & avaliações**: badge de nota 5.0 no Google, depoimentos de pacientes e botão "Ver Localização e Avaliações no Google".
- **Rodapé com localização e contato**: mapa incorporado de Ruy Barbosa – BA, links de WhatsApp e Instagram.
- **Botão flutuante do WhatsApp** no canto inferior direito com animação de pulso.
- **SEO/MEO completo**: title e meta description otimizados, Open Graph (compartilhamento perfeito no WhatsApp/Instagram), geo tags (BR-BA, Ruy Barbosa, coordenadas) e Schema.org JSON-LD do tipo Dentist/MedicalBusiness com nome, endereço, telefone, especialidades, fundadores, avaliação e link de localização.

## Fluxo do usuário
1. Visitante chega pelo Google/Instagram e vê o hero com proposta clara e CTA.
2. Navega pelas especialidades e conhece os dois cirurgiões-dentistas.
3. Lê a seção de história/excelência e as avaliações (nota 5.0).
4. Clica em "Agendar via WhatsApp" (header, hero, botão flutuante) ou acessa a localização no Google.

## Sensação de UI/UX
- **Editorial de Luxo Refinado**: sofisticado, elegante, padrão revista de estética premium.
- Paleta fiel à marca: Verde Esmeralda #014738, Verde Menta #2BEA8C, Ouro/Bronze #D4AF37, fundo escuro editorial #0A0F0D e fundo claro #F8FAF9.
- Tipografia editorial (Playfair Display / Cormorant Garamond) para títulos e sans moderna (Plus Jakarta Sans / Inter) para corpo.
- Totalmente mobile-first, com microinterações, hover suave e animações discretas.
- Ícones elegantes (Lucide/Feather via CDN).

## Links e contatos usados
- WhatsApp: https://api.whatsapp.com/send?phone=5571992704828
- Instagram da clínica: https://www.instagram.com/clioc_rb
- Instagram Dr. Jouglas: https://www.instagram.com/drjouglasbc
- Instagram Dr. Yulo: https://www.instagram.com/dryulomodollo
- Localização/Avaliações Google: https://share.google/FCWCgClcZ0kkoSMJU
- Todos os links externos abrem em nova aba (`target="_blank"`).

## Fases de implementação
**Fase 1 — MVP (construída agora):** Landing page completa em um único arquivo `index.html` (HTML5 + Tailwind via CDN + CSS customizado em `<style>` + JavaScript inline + SEO/JSON-LD completo), com todas as seções acima, as fotos dos dois dentistas, o logo da CLIOC, botão flutuante do WhatsApp e mapa incorporado. Pronta para baixar e subir no GitHub Pages.

**Fase 2 — Futuro:** Galeria de casos (antes/depois), FAQ com Schema FAQPage adicional, blog de conteúdo local para reforçar SEO e sitemap.xml/robots.txt.

**Fase 3 — Futuro:** Formulário de agendamento com backend e painel, integração de calendário/horários e captação de avaliações automatizada.

## Suposições
- Entrega como arquivo único `index.html` estático (sem backend), otimizado para GitHub Pages, conforme pedido.
- Usar as duas fotos enviadas dos dentistas e o logo enviado da CLIOC diretamente na página.
- Depoimentos de pacientes serão textos representativos (placeholder) até haver avaliações reais fornecidas.
- Endereço exibido: "Ruy Barbosa – BA" (sem rua/número específicos, pois não foram informados); coordenadas aproximadas -12.2833;-40.4833.
- Telefone de contato/WhatsApp: +55 71 99270-4828 (extraído do link fornecido).
- Mapa incorporado apontando para Ruy Barbosa – BA via embed público (sem chave de API).
- Idioma: Português (Brasil).
