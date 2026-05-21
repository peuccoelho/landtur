export const navLinks = [
  { label: 'Projeto', href: '#sobre' },
  { label: 'Destinos', href: '#destinos' },
  { label: 'Storytelling', href: '#storytelling' },
  { label: 'Dados', href: '#dados' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Vozes', href: '#vozes' },
]

export const heroContent = {
  eyebrow: 'Especial multimídia de turismo',
  headline: 'Ah, que bom!\nVocê chegou.\nBem vindo a Salvador!',
  subtitle:
    'Uma experiência editorial criada pela turma de Jornalismo para reunir matérias, entrevistas, dados e narrativas sobre o turismo contemporâneo.',
  highlights: ['Reportagens especiais', 'Curadorias locais', 'Dados e curiosidades'],
  image: '/imgs/salvador-principal.jpg',
  primaryCta: 'Ver reportagens',
  secondaryCta: 'Conhecer o projeto',
}

export const aboutContent = {
  label: 'Projeto em foco',
  title: 'Turismo em Foco: narrativas jornalísticas sobre viagens e territórios',
  description:
    'A proposta é construir um portal informativo que conecta destinos, culturas e pessoas por meio de narrativas jornalísticas sensíveis e bem apuradas.',
  paragraphs: [
    'Nossa jornada reúne pautas que atravessam turismo, cultura e economia criativa. As reportagens nascem de apuração em campo, entrevistas e leitura de dados.',
    'Cada matéria é pensada para combinar contexto, escuta e narrativa visual. O resultado é um especial multimídia pronto para receber conteúdos dinâmicos.',
  ],
  image: '/imgs/pelourinho.jpg',
  stats: [
    { value: '12+', label: 'temas editoriais' },
    { value: '40+', label: 'entrevistas previstas' },
  ],
  impact: { value: '28+', label: 'pautas em produção' },
  socials: [
    { label: 'Site do projeto', href: '#', icon: 'globe' },
    { label: 'Contato', href: '#', icon: 'mail' },
    { label: 'Mapa de campo', href: '#', icon: 'map' },
  ],
  aside: {
    name: 'Turma de Jornalismo',
    role: 'Laboratório de Jornalismo Digital',
    ctaTitle: 'Pronta para compartilhar sua matéria?',
    ctaLabel: 'Enviar pauta',
  },
}

export const destinationFilters = [
  'Praias',
  'Turismo histórico',
  'Gastronomia',
  'Ecoturismo',
  'Cultura',
  'Eventos',
]

export const destinations = [
  {
    id: 'd1',
    category: 'Ecoturismo',
    title: 'Rotas de natureza que reescrevem o turismo brasileiro',
    summary:
      'Da floresta ao litoral, caminhos que mostram como a preservação pode impulsionar novas economias locais.',
    image: '/imgs/itapua.jpg',
  },
  {
    id: 'd2',
    category: 'Gastronomia',
    title: 'Sabores que contam histórias: cozinhas regionais em foco',
    summary:
      'Chefs, mercados e tradições gastronômicas que revelam identidades culturais pelo paladar.',
    image: '/imgs/dique.jpg',
  },
  {
    id: 'd3',
    category: 'Turismo histórico',
    title: 'Centros históricos e memória viva do patrimônio brasileiro',
    summary:
      'Cidades que preservam patrimônio e reinventam seus centros para receber visitantes.',
    image: '/imgs/pelourinho.jpg',
  },
  {
    id: 'd4',
    category: 'Praias',
    title: 'Litorais em transformação: turismo, sustentabilidade e comunidade',
    summary:
      'Como destinos costeiros se adaptam ao crescimento do turismo sem perder suas raízes.',
    image: '/imgs/faroul-barra.jpg',
  },
  {
    id: 'd5',
    category: 'Cultura',
    title: 'Festivais, artes e a força das culturas locais',
    summary:
      'Eventos que movimentam cidades e criam novas experiências de viagem.',
    image: '/imgs/elevador-lacerda.jpg',
  },
  {
    id: 'd6',
    category: 'Eventos',
    title: 'Calendários turísticos e economias criativas em expansão',
    summary:
      'A agenda cultural como motor de fluxo turístico e visibilidade regional.',
    image: '/imgs/senhor-bonfim.jpg',
  },
]

export const storytelling = [
  {
    id: 's1',
    tag: 'Reportagem em campo',
    title: 'Vozes que narram o território',
    text:
      'Pequenas entrevistas e registros sonoros revelam como moradores enxergam o turismo em suas cidades.',
    data: '48 relatos locais mapeados',
    image: '/imgs/igreja.jpg',
  },
  {
    id: 's2',
    tag: 'Diário de viagem',
    title: 'Percursos que se transformam em histórias',
    text:
      'Narrativas que acompanham a jornada completa: chegada, deslocamento, encontros e descobertas.',
    data: '12 rotas documentadas',
    image: '/imgs/pelourinho.jpg',
  },
  {
    id: 's3',
    tag: 'Dados e contexto',
    title: 'O impacto do turismo na economia local',
    text:
      'Infográficos e indicadores ajudam a contextualizar o papel do turismo no desenvolvimento regional.',
    data: '6 indicadores analisados',
    image: '/imgs/dique.jpg',
  },
]

export const stats = [
  {
    id: 'st1',
    icon: 'compass',
    label: 'Destinos mapeados',
    value: 36,
    suffix: '',
    description: 'Localidades analisadas com foco em diversidade cultural.',
  },
  {
    id: 'st2',
    icon: 'camera',
    label: 'Registros multimídia',
    value: 128,
    suffix: '+',
    description: 'Fotografias, vídeos curtos e entrevistas editadas.',
  },
  {
    id: 'st3',
    icon: 'sparkles',
    label: 'Curiosidades reunidas',
    value: 54,
    suffix: '',
    description: 'Fatos e dados que ampliam a compreensão dos destinos.',
  },
  {
    id: 'st4',
    icon: 'landmark',
    label: 'Patrimônios destacados',
    value: 18,
    suffix: '',
    description: 'Lugares que representam memória, cultura e identidade.',
  },
]

export const galleryItems = [
  {
    id: 'g1',
    title: 'Travessias e paisagens',
    type: 'Foto',
    image: '/imgs/elevador-lacerda.jpg',
  },
  {
    id: 'g2',
    title: 'Roteiros culturais',
    type: 'Foto',
    image: '/imgs/faroul-barra.jpg',
  },
  {
    id: 'g3',
    title: 'Encontros e memórias',
    type: 'Entrevista',
    image: '/imgs/pelourinho.jpg',
  },
  {
    id: 'g4',
    title: 'Arquitetura e patrimônio',
    type: 'Foto',
    image: '/imgs/senhor-bonfim.jpg',
  },
  {
    id: 'g5',
    title: 'Cozinhas e sabores',
    type: 'Vídeo',
    image: '/imgs/igreja.jpg',
  },
  {
    id: 'g6',
    title: 'Mapas e fluxos',
    type: 'Infográfico',
    image: '/imgs/itapua.jpg',
  },
]

export const voices = [
  {
    id: 'v1',
    name: 'Aline Souza',
    role: 'Repórter de campo',
    location: 'Paraty, RJ',
    quote:
      'O turismo aqui é feito de encontros. Cada visitante leva uma história e deixa outra.',
  },
  {
    id: 'v2',
    name: 'João Nascimento',
    role: 'Morador e guia local',
    location: 'Lençóis, BA',
    quote:
      'Quando a comunidade participa, o turismo vira oportunidade real e sustentável.',
  },
  {
    id: 'v3',
    name: 'Carla Menezes',
    role: 'Pesquisadora',
    location: 'Manaus, AM',
    quote:
      'Os dados mostram que o turismo pode fortalecer economias locais se houver planejamento.',
  },
  {
    id: 'v4',
    name: 'Rafael Pereira',
    role: 'Jornalista',
    location: 'Ouro Preto, MG',
    quote:
      'Narrar patrimônio é mostrar como passado e presente dialogam no cotidiano das cidades.',
  },
]

export const footerInfo = {
  project: 'Projeto acadêmico da turma de Jornalismo',
  credits: 'Universidade | Laboratório de Jornalismo Digital',
  year: new Date().getFullYear(),
}
