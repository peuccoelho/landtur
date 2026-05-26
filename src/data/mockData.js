export const navLinks = [
  { label: 'Panorama', href: '#sobre' },
  { label: 'Painel', href: '#dados' },
  { label: 'Balancete', href: '#balancete' },
  { label: 'Circuitos', href: '#circuitos' },
  { label: 'Contexto', href: '#analise' },
  { label: 'Alunos', href: '#alunos' },
  { label: 'Insights', href: '#insights' },
]

export const heroContent = {
  eyebrow: 'Turma de jornalismo • UCSAL',
  headline: 'Ah, que bom! \n Você chegou.\n Bem-vindo a Salvador!',
  subtitle:
    'Análise minuciosa cruza os dados orçamentais da prefeitura (SECULT, SUCOP e SEMOP) com os indicadores reais de fluxo de passageiros e ocupação hoteleira entre 2022 e 2025.',
  metadata: [
    'Salvador, Bahia',
    'Maio de 2026',
  ],
  summary:
    'O investimento agressivo de Salvador no pós-pandemia transformou a herança cultural soteropolitana numa máquina económica sustentável.',
  highlights: [
    { label: '2022', value: '6,2 milhões de turistas' },
    { label: '2025', value: '10,1 milhões de turistas' },
  ],

  supportingText:
    'O fluxo direto de investimentos liquidados escalou de R$ 10,19 milhões para R$ 28,25 milhões, enquanto o fluxo de visitantes alcançou recorde histórico.',
  image: '/imgs/salvador-principal.jpg',
  primaryCta: 'Ver Entrevista',
  primaryCtaHref: '/entrevista.html',
  secondaryCta: 'Ver balancete',
  secondaryCtaHref: '#balancete',
}

export const aboutContent = {
  label: 'Panorama editorial',
  title: 'Investimento público e fluxo turístico em expansão',
  description:
    'O investimento agressivo de Salvador no pós-pandemia transformou a herança cultural soteropolitana numa máquina económica sustentável.',
  paragraphs: [
    'O fluxo direto de investimentos liquidados escalou de R$ 10,19 milhões para R$ 28,25 milhões, enquanto o fluxo de visitantes alcançou recorde histórico.',
    'A leitura orçamental integra SECULT, SUCOP e SEMOP para explicar a tração do turismo entre 2022 e 2025.',
  ],
  image: '/imgs/pelourinho.jpg',
  stats: [
    { value: '6,2 mi', label: 'turistas em 2022' },
    { value: '10,1 mi', label: 'turistas em 2025' },
  ],
  impact: { value: '+177%', label: 'SECULT (2022–2025)' },
  socials: [
    { label: 'Painel de métricas', href: '#dados', icon: 'globe' },
    { label: 'Balancete', href: '#balancete', icon: 'map' },
  ],
  aside: {
    name: 'Resumo executivo',
    role: 'Salvador, Bahia • Maio 2026',
    ctaTitle: 'Explorar dados completos',
    ctaLabel: 'Abrir painel',
    ctaHref: '#dados',
  },
}

export const destinationFilters = ['Centro histórico', 'Litoral', 'Gastronomia', 'Fé']

export const destinations = [
  {
    id: 'd1',
    category: 'Centro histórico',
    title: 'Pelourinho & Centro Histórico',
    summary: 'Requalificação urbana, museus e segurança assistida.',
    image: '/imgs/pelourinho.jpg',
  },
  {
    id: 'd2',
    category: 'Litoral',
    title: 'Barra',
    summary: 'Farol, praias e circuitos festivos.',
    image: '/imgs/faroul-barra.jpg',
  },
  {
    id: 'd3',
    category: 'Gastronomia',
    title: 'Rio Vermelho',
    summary: 'Gastronomia, boémia e tradição cultural.',
    image: '/imgs/rio-vermelho.jpg',
  },
  {
    id: 'd4',
    category: 'Fé',
    title: 'Colina Sagrada do Bonfim',
    summary: 'Ícone do sincretismo religioso.',
    image: '/imgs/senhor-bonfim.jpg',
  },
]

export const storytelling = [
  {
    id: 's1',
    tag: 'Turismo sem sazonalidade',
    title: 'Calendário permanente de visitantes',
    text: 'O fluxo de turistas mostra maturidade para além do verão e do carnaval.',
    data: 'Agenda anual estabilizada',
    image: '/imgs/itapua.jpg',
  },
  {
    id: 's2',
    tag: 'Novos hubs aéreos',
    title: 'Conectividade impulsiona permanência',
    text: 'Rotas diretas e cruzeiros ampliam o alcance internacional da cidade.',
    data: 'Novas portas de entrada',
    image: '/imgs/dique.jpg',
  },
  {
    id: 's3',
    tag: 'Arrecadação retroalimentada',
    title: 'Ciclo fiscal e investimento',
    text: 'A arrecadação do turismo retorna ao orçamento em novos investimentos.',
    data: 'Efeito multiplicador',
    image: '/imgs/senhor-bonfim.jpg',
  },
]

export const dataPanel = {
  eyebrow: 'Painel de métricas e evoluções',
  title: 'Fluxo turístico e ocupação hoteleira',
  subtitle:
    'Indicadores reais de visitantes e hotelaria monitorados entre 2022 e 2025.',
  datasets: [
    {
      id: 'fluxo',
      label: 'Fluxo turístico anual',
      size: '2022–2025',
      color: 'bg-ocean-500',
      dates: ['2022', '2023', '2024', '2025'],
      values: [6200000, 8100000, 9400000, 10100000],
      format: 'number',
      series: {
        primaryLabel: 'Visitantes',
        secondaryLabel: 'Tendência (média móvel)',
      },
      summaryLabel: 'Total estimado',
      summaryNote: 'Visitantes por ano.',
    },
    {
      id: 'ocupacao',
      label: 'Ocupação hoteleira média',
      size: 'Alta x Baixa',
      color: 'bg-sage-500',
      dates: ['Baixa', 'Alta'],
      values: [60, 90],
      format: 'percent',
      series: {
        primaryLabel: 'Ocupação média',
        secondaryLabel: 'Tendência',
      },
      summaryLabel: 'Intervalo médio',
      summaryNote: 'Alta temporada: 85%–95% • Baixa temporada: 55%–65%.',
    },
  ],
}

export const budgetBalance = {
  eyebrow: 'Balancete orçamental',
  title: 'Orçamento público e visitantes (2022–2025)',
  subtitle:
    'SECULT, SUCOP e SEMOP consolidados com totais anuais e fluxo de turistas.',
  rows: [
    {
      year: '2022',
      secult: 'R$ 10.198.763,96',
      sucop: '—',
      semop: 'R$ 30.633,53',
      total: 'R$ 10.229.397,49',
      tourists: '6,2 milhões',
    },
    {
      year: '2023',
      secult: 'R$ 22.587.578,92',
      sucop: '—',
      semop: 'R$ 323.294,90',
      total: 'R$ 22.910.873,82',
      tourists: '8,1 milhões',
    },
    {
      year: '2024',
      secult: 'R$ 26.289.790,16',
      sucop: 'R$ 42.743.435,04',
      semop: 'R$ 5.494.518,07',
      total: 'R$ 74.527.743,27',
      tourists: '9,4 milhões',
    },
    {
      year: '2025',
      secult: 'R$ 28.252.764,19',
      sucop: 'R$ 20.909.486,20',
      semop: 'R$ 3.888.720,00',
      total: 'R$ 53.050.970,39',
      tourists: '10,1 milhões',
    },
  ],
  note: 'Os dados da SUCOP em 2022 e 2023 não estavam discriminados nos CSVs orçamentais fornecidos.',
}

export const contextAnalysis = {
  eyebrow: 'Análise contextual',
  title: 'Leitura territorial e gestão pública',
  subtitle:
    'Síntese narrativa dos impactos locais e da política de ordenamento.',
  images: [
    {
      id: 'c1',
      title: 'Pelourinho',
      src: '/imgs/igreja.jpg',
      text: 'Pelourinho: revitalização urbana e hotéis boutique.',
    },
    {
      id: 'c2',
      title: 'Barra',
      src: '/imgs/salvador-principal.jpg',
      text: 'Barra e Rio Vermelho: ambulantes regulamentados e ambiente mais seguro.',
    },
    {
      id: 'c3',
      title: 'Rio Vermelho',
      src: '/imgs/rio-vermelho.jpg',
      text: 'Patrocínios de eventos: R$ 2,22 milhões em 2025.',
    },
  ],
}

export const students = [
  {
    id: 's1',
    name: 'Guilherme Rios',
    image: '/imgs/Guilherme_rios.png',
  },
  {
    id: 's2',
    name: 'Mirela Portela',
    image: '/imgs/Mirela Portela.png',
  },
  {
    id: 's3',
    name: 'Pérola Lins',
    image: '/imgs/Pérola Lins.png',
  },
  {
    id: 's4',
    name: 'Giuliana Farias',
    image: '/imgs/Giuliana Farias.png',
  },
]

export const teamMembers = [
  {
    id: 't1',
    name: 'Emissores principais',
    role: 'Argentina, EUA, Portugal e França',
    affiliation: 'Perfil do turista estrangeiro',
    quote: 'Origem dos visitantes internacionais com maior peso em Salvador.',
    image: '/imgs/faroul-barra.jpg',
    thumbnail: '/imgs/faroul-barra.jpg',
  },
  {
    id: 't2',
    name: 'Gasto médio',
    role: 'US$ 120–150/dia',
    affiliation: 'Perfil do turista estrangeiro',
    quote: 'Faixa diária que sustenta comércio, hotelaria e serviços.',
    image: '/imgs/dique.jpg',
    thumbnail: '/imgs/dique.jpg',
  },
  {
    id: 't3',
    name: 'Motivação',
    role: 'História, Música e Património',
    affiliation: 'Perfil do turista estrangeiro',
    quote: 'O patrimônio cultural segue como principal motor de visitação.',
    image: '/imgs/pelourinho.jpg',
    thumbnail: '/imgs/pelourinho.jpg',
  },
  {
    id: 't4',
    name: 'Chegada',
    role: 'Voos diretos e cruzeiros',
    affiliation: 'Perfil do turista estrangeiro',
    quote: 'Conectividade aérea e marítima amplia o alcance internacional.',
    image: '/imgs/senhor-bonfim.jpg',
    thumbnail: '/imgs/senhor-bonfim.jpg',
  },
]

export const imageReferences = [
  {
    id: 'ref-pelourinho',
    title: 'Pelourinho',
    description: 'Imagem do Pelourinho',
    author: 'Autor não identificado',
    href:
      'https://blog.viagensmontreal.com/cidades-historicas-do-nordeste-explore-a-cultura-da-regiao/',
    accessDate: '26 maio 2026',
    image: '/imgs/pelourinho.jpg',
  },
  {
    id: 'ref-dique',
    title: 'Dique do Tororó',
    description: 'Imagem do Dique do Tororó',
    author: 'Autor não identificado',
    href:
      'https://i0.wp.com/jornaldachapada.com.br/wp-content/uploads/2022/09/m00.jpg?fit=800,400&ssl=1&w=640',
    accessDate: '26 maio 2026',
    image: '/imgs/dique.jpg',
  },
  {
    id: 'ref-elevador-lacerda',
    title: 'Elevador Lacerda',
    description: 'Imagem do Elevador Lacerda',
    author: 'Autor não identificado',
    href:
      'https://partiupelomundo.com/wp-content/uploads/2019/10/por-do-sol-em-salvador-1.jpg',
    accessDate: '26 maio 2026',
    image: '/imgs/elevador-lacerda.jpg',
  },
  {
    id: 'ref-farol-barra',
    title: 'Farol da Barra',
    description: 'Imagem do Farol da Barra',
    author: 'Autor não identificado',
    href:
      'https://www.facebook.com/hortobelavistasalvador/photos/o-privil%C3%A9gio-de-morar-em-uma-cidade-banhada-pelo-mar/1076921047769996/',
    accessDate: '26 maio 2026',
    image: '/imgs/faroul-barra.jpg',
  },
  {
    id: 'ref-igreja-francisco',
    title: 'Igreja de São Francisco',
    description: 'Imagem da Igreja de São Francisco',
    author: 'Autor não identificado',
    href:
      'https://guia.melhoresdestinos.com.br/igreja-de-sao-francisco-salvador.html',
    accessDate: '26 maio 2026',
    image: '/imgs/igreja.jpg',
  },
  {
    id: 'ref-itapua',
    title: 'Itapuã',
    description: 'Imagem de Itapuã',
    author: 'Autor não identificado',
    href:
      'https://aloalobahia.com/fotos/que-salvador-voce-ve-fotografos-escolhem-registros-para-representar-a-cidade-nos-seus-475-anos',
    accessDate: '26 maio 2026',
    image: '/imgs/itapua.jpg',
  },
  {
    id: 'ref-rio-vermelho',
    title: 'Rio Vermelho',
    description: 'Imagem do Rio Vermelho',
    author: 'Autor não identificado',
    href:
      'https://www.melhoresdestinos.com.br/retrofit-pestana-salvador.html',
    accessDate: '26 maio 2026',
    image: '/imgs/rio-vermelho.jpg',
  },
  {
    id: 'ref-hero',
    title: 'Salvador (foto principal)',
    description: 'Imagem principal do hero',
    author: 'Autor não identificado',
    href:
      'https://sintibref-ba.org.br/posts/salvador-477-anos-da-primeira-capital-do-brasil',
    accessDate: '26 maio 2026',
    image: '/imgs/salvador-principal.jpg',
  },
  {
    id: 'ref-bonfim',
    title: 'Igreja do Senhor do Bonfim',
    description: 'Imagem da Igreja do Senhor do Bonfim',
    author: 'Autor não identificado',
    href:
      'https://admin.nazarethvillage.com/naz/igreja-senhor-do-bonfim-salvador-historia.html',
    accessDate: '26 maio 2026',
    image: '/imgs/senhor-bonfim.jpg',
  },
]

export const footerInfo = {
  project: 'Especial em jornalismo de dados sobre turismo e economia cultural',
  credits: 'Universidade Católica de Salvador (UCSAL)',
  year: new Date().getFullYear(),
}
