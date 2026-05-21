export const navLinks = [
  { label: 'Projeto', href: '#sobre' },
  { label: 'Eixos', href: '#destinos' },
  { label: 'Storytelling', href: '#storytelling' },
  { label: 'Dados', href: '#dados' },
  { label: 'Equipe', href: '#equipe' },
]

export const heroContent = {
  eyebrow: 'Dados públicos + entrevista exclusiva',
  headline: 'Ah, que bom!\nVocê chegou.\nBem-vindo a Salvador.',
  subtitle:
    'Um especial jornalístico baseado em bases públicas de turismo e uma entrevista em profundidade com o secretário de turismo.',
  highlights: ['Bases públicas de turismo', 'Comércio e serviços', 'Entrevista com o secretário'],
  image: '/imgs/salvador-principal.jpg',
  primaryCta: 'Explorar análises',
  secondaryCta: 'Ver metodologia',
}

export const aboutContent = {
  label: 'Fontes e método',
  title: 'Dados públicos e entrevista para entender o turismo local',
  description:
    'O projeto cruza indicadores oficiais com uma entrevista exclusiva para revelar como turismo, comércio, serviços e cultura se conectam em Salvador.',
  paragraphs: [
    'As pautas partem de bases abertas (IBGE, dados.gov e portais locais) para mapear fluxo turístico, gasto e emprego.',
    'A entrevista com o secretário de turismo complementa os números com decisões de gestão e desafios do setor.',
  ],
  image: '/imgs/pelourinho.jpg',
  stats: [
    { value: '6', label: 'bases públicas' },
    { value: '18', label: 'indicadores' },
  ],
  impact: { value: '1', label: 'entrevista-chave' },
  socials: [
    { label: 'Dados.gov.br', href: 'https://dados.gov.br/', icon: 'globe' },
    { label: 'IBGE', href: 'https://www.ibge.gov.br/', icon: 'map' },
    { label: 'Ministério do Turismo', href: 'https://www.gov.br/turismo/', icon: 'globe' },
  ],
  aside: {
    name: 'Turma de Jornalismo',
    role: 'UCSAL - 2026',
    ctaTitle: 'Conheça a universidade',
    ctaLabel: 'Site da UCSAL',
    ctaHref: 'https://www.ucsal.br/',
  },
}

export const destinationFilters = [
  'Comércio',
  'Serviços',
  'Cultura',
  'Fluxo turístico',
  'Emprego',
  'Gestão pública',
]

export const destinations = [
  {
    id: 'd1',
    category: 'Comércio',
    title: 'Varejo turístico e gasto médio em Salvador',
    summary:
      'Cruzamento de arrecadação, consumo e fluxo de visitantes nas zonas turísticas.',
    image: '/imgs/itapua.jpg',
  },
  {
    id: 'd2',
    category: 'Serviços',
    title: 'Hospedagem e mobilidade: oferta x demanda',
    summary:
      'Dados públicos ajudam a entender ocupação, transporte e sazonalidade do turismo.',
    image: '/imgs/dique.jpg',
  },
  {
    id: 'd3',
    category: 'Cultura',
    title: 'Agenda cultural como motor de visitação',
    summary:
      'Eventos, museus e patrimônio conectados aos picos de circulação turística.',
    image: '/imgs/pelourinho.jpg',
  },
  {
    id: 'd4',
    category: 'Fluxo turístico',
    title: 'Quem visita, quando visita, por quê',
    summary:
      'Séries históricas revelam origem dos visitantes e permanência média.',
    image: '/imgs/faroul-barra.jpg',
  },
  {
    id: 'd5',
    category: 'Emprego',
    title: 'Trabalho e renda no setor turístico',
    summary:
      'Indicadores de emprego em comércio e serviços que sustentam a atividade.',
    image: '/imgs/elevador-lacerda.jpg',
  },
  {
    id: 'd6',
    category: 'Gestão pública',
    title: 'Entrevista com o secretário de turismo',
    summary:
      'Decisões, prioridades e desafios para a política pública de turismo.',
    image: '/imgs/senhor-bonfim.jpg',
  },
]

export const storytelling = [
  {
    id: 's1',
    tag: 'Base pública',
    title: 'Indicadores que estruturam as pautas',
    text:
      'Séries históricas de turismo, comércio e serviços orientam o recorte jornalístico.',
    data: '6 bases abertas consultadas',
    image: '/imgs/igreja.jpg',
  },
  {
    id: 's2',
    tag: 'Entrevista',
    title: 'A visão do secretário de turismo',
    text:
      'A conversa em profundidade adiciona decisões, desafios e metas ao contexto dos dados.',
    data: '1 entrevista em profundidade',
    image: '/imgs/pelourinho.jpg',
  },
  {
    id: 's3',
    tag: 'Cruzamentos',
    title: 'Cultura como vetor de fluxo turístico',
    text:
      'Comparativos entre eventos culturais e variações de fluxo ajudam a explicar picos.',
    data: '18 indicadores cruzados',
    image: '/imgs/dique.jpg',
  },
]

export const stats = [
  {
    id: 'st1',
    icon: 'compass',
    label: 'Bases públicas',
    value: 6,
    suffix: '',
    description: 'Fontes abertas que sustentam as análises e gráficos.',
  },
  {
    id: 'st2',
    icon: 'camera',
    label: 'Indicadores',
    value: 18,
    suffix: '+',
    description: 'Variáveis de turismo, comércio, serviços e cultura.',
  },
  {
    id: 'st3',
    icon: 'sparkles',
    label: 'Séries históricas',
    value: 12,
    suffix: '',
    description: 'Períodos comparados para leitura de sazonalidade.',
  },
  {
    id: 'st4',
    icon: 'landmark',
    label: 'Entrevista-chave',
    value: 1,
    suffix: '',
    description: 'Visão da gestão pública para contextualizar os dados.',
  },
]

export const teamMembers = [
  {
    id: 't1',
    name: 'Giuliana Farias',
    role: 'Coordenação editorial',
    affiliation: 'Laboratório de Jornalismo Digital',
    quote:
      'Transformamos dados públicos e entrevistas em narrativas claras sobre o turismo.',
    image: '/imgs/Giuliana%20Farias.png',
    thumbnail: '/imgs/Giuliana%20Farias.png',
  },
  {
    id: 't2',
    name: 'Guilherme Rios',
    role: 'Pesquisa de dados',
    affiliation: 'Equipe de reportagem',
    quote:
      'A leitura das bases abertas mostra como comércio e serviços sentem o turismo.',
    image: '/imgs/Guilherme_rios.png',
    thumbnail: '/imgs/Guilherme_rios.png',
  },
  {
    id: 't3',
    name: 'Mirela Portela',
    role: 'Análise de dados',
    affiliation: 'Núcleo de dados',
    quote:
      'Cruzamos indicadores para entender cultura e fluxo turístico com rigor.',
    image: '/imgs/Mirela%20Portela.png',
    thumbnail: '/imgs/Mirela%20Portela.png',
  },
  {
    id: 't4',
    name: 'Pérola Lins',
    role: 'Narrativas visuais',
    affiliation: 'Direção de arte',
    quote:
      'Visualizamos dados e trechos da entrevista para destacar impactos do turismo.',
    image: '/imgs/P%C3%A9rola%20Lins.png',
    thumbnail: '/imgs/P%C3%A9rola%20Lins.png',
  },
]

export const footerInfo = {
  project: 'Projeto acadêmico com dados públicos e entrevista',
  credits: 'Universidade | UCSAL',
  year: new Date().getFullYear(),
}
