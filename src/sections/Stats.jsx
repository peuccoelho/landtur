import { useEffect, useState } from 'react'
import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { dataPanel } from '../data/mockData.js'

const generateSmoothPath = (values, maxValue, height = 320, isArea = false) => {
  const width = 800
  const padding = 56
  const chartWidth = width - padding * 2
  const chartHeight = height - padding * 2

  const points = values.map((value, index) => ({
    x: padding + (index / (values.length - 1)) * chartWidth,
    y: padding + (1 - value / maxValue) * chartHeight,
  }))

  if (points.length < 2) return ''

  let path = `M ${points[0].x},${points[0].y}`

  for (let i = 1; i < points.length; i += 1) {
    const prev = points[i - 1]
    const curr = points[i]
    const next = points[i + 1]

    const cp1x = prev.x + (curr.x - prev.x) * 0.5
    const cp1y = prev.y
    const cp2x = curr.x - (next ? (next.x - curr.x) * 0.3 : 0)
    const cp2y = curr.y

    path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${curr.x},${curr.y}`
  }

  if (isArea) {
    path += ` L ${points[points.length - 1].x},${height - padding} L ${padding},${
      height - padding
    } Z`
  }

  return path
}

const buildTrend = (values) =>
  values.map((value, index) =>
    index === 0 ? value : (value + values[index - 1]) / 2,
  )

const formatCompactNumber = (value) =>
  new Intl.NumberFormat('pt-BR', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value)

const formatPercent = (value) => {
  if (!Number.isFinite(value)) return '—'
  const rounded = Math.round(value)
  return `${rounded >= 0 ? '+' : ''}${rounded}%`
}

export default function Stats() {
  const [selectedDataset, setSelectedDataset] = useState(dataPanel.datasets[0].id)
  const [hoveredPoint, setHoveredPoint] = useState(null)
  const [animationPhase, setAnimationPhase] = useState(0)
  const [chartVisible, setChartVisible] = useState(false)

  const currentData =
    dataPanel.datasets.find((dataset) => dataset.id === selectedDataset) ??
    dataPanel.datasets[0]
  const trendValues = buildTrend(currentData.values)
  const maxValue = Math.max(...currentData.values, ...trendValues) * 1.1

  useEffect(() => {
    setChartVisible(false)
    setAnimationPhase(0)

    const timers = [
      setTimeout(() => setAnimationPhase(1), 120),
      setTimeout(() => setAnimationPhase(2), 360),
      setTimeout(() => setAnimationPhase(3), 720),
      setTimeout(() => setChartVisible(true), 980),
    ]

    return () => timers.forEach(clearTimeout)
  }, [selectedDataset])

  const total = currentData.values.reduce((acc, value) => acc + value, 0)
  const peak = Math.max(...currentData.values)
  const average = total / currentData.values.length
  const growth =
    currentData.values.length > 1
      ? ((currentData.values.at(-1) - currentData.values[0]) /
          currentData.values[0]) *
        100
      : 0

  const formatValue = (value, format = currentData.format) =>
    format === 'percent' ? `${Math.round(value)}%` : formatCompactNumber(value)

  const formatLegendValue = (value, format = currentData.format) =>
    format === 'percent' ? `${Math.round(value)}%` : formatCompactNumber(value)

  const summaryValue =
    currentData.format === 'percent'
      ? `${Math.min(...currentData.values)}%–${Math.max(...currentData.values)}%`
      : formatCompactNumber(total)

  const metrics = [
    {
      label: 'Pico',
      value: formatValue(peak),
      color: 'border-ocean-400',
      size: 'ano',
    },
    {
      label: 'Média',
      value: formatValue(average),
      color: 'border-sand-500',
      size: 'período',
    },
    {
      label: 'Variação',
      value: formatPercent(growth),
      color: 'border-sage-500',
      size: currentData.size,
    },
  ]

  return (
    <section id="dados" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={dataPanel.eyebrow}
          title={dataPanel.title}
          subtitle={dataPanel.subtitle}
        />
        <div className="mt-12 rounded-3xl bg-white p-6 shadow-soft md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h3
                className={`text-2xl font-semibold text-ink-900 transition-all duration-700 ${
                  animationPhase >= 1
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-3'
                }`}
              >
                Séries consolidadas do turismo
              </h3>
              <p
                className={`text-sm text-ink-500 transition-all duration-700 delay-150 ${
                  animationPhase >= 1
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-3'
                }`}
              >
                Fluxo de visitantes e ocupação hoteleira em evolução.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {dataPanel.datasets.map((dataset, index) => (
                <button
                  key={dataset.id}
                  type="button"
                  className={`rounded-2xl border px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-all duration-700 ${
                    selectedDataset === dataset.id
                      ? 'border-ocean-500 bg-ocean-600 text-white shadow-soft'
                      : 'border-sand-200 bg-sand-50 text-ink-600 hover:border-ocean-300'
                  } ${
                    animationPhase >= 2
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-2'
                  }`}
                  style={{ transitionDelay: `${240 + index * 120}ms` }}
                  onClick={() => setSelectedDataset(dataset.id)}
                >
                  <span className={`mr-2 inline-flex h-2 w-2 rounded-full ${dataset.color}`} />
                  {dataset.label}
                  <span className="ml-2 text-[10px] opacity-70">{dataset.size}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-sand-50/70 p-4 md:p-6">
            <div className="flex flex-wrap items-center gap-6 text-sm text-ink-600">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-ocean-600" />
                <span className="font-medium">{currentData.series.primaryLabel}</span>
                <span className="text-ink-900">
                  {formatLegendValue(currentData.values.at(-1))}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-ink-700" />
                <span className="font-medium">{currentData.series.secondaryLabel}</span>
                <span className="text-ink-900">
                  {formatLegendValue(trendValues.at(-1))}
                </span>
              </div>
            </div>

            <div className="mt-6 h-72 sm:h-80">
              <svg className="h-full w-full" viewBox="0 0 800 360">
                <defs>
                  <pattern
                    id="data-grid"
                    width="40"
                    height="32"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 32"
                      fill="none"
                      stroke="#f1ede2"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="800" height="360" fill="url(#data-grid)" />

                <path
                  d={generateSmoothPath(trendValues, maxValue, 320, true)}
                  fill="rgba(61, 65, 75, 0.08)"
                  className={`transition-all duration-[1600ms] ${
                    chartVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transform: chartVisible ? 'scale(1)' : 'scale(0.96)',
                    transformOrigin: 'center bottom',
                  }}
                />
                <path
                  d={generateSmoothPath(currentData.values, maxValue, 320, true)}
                  fill="rgba(28, 116, 177, 0.12)"
                  className={`transition-all duration-[1600ms] ${
                    chartVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transform: chartVisible ? 'scale(1)' : 'scale(0.96)',
                    transformOrigin: 'center bottom',
                    transitionDelay: '200ms',
                  }}
                />

                <path
                  d={generateSmoothPath(trendValues, maxValue, 320)}
                  fill="none"
                  stroke="#3d414b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className={`transition-all duration-[1600ms] ${
                    chartVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    strokeDasharray: chartVisible ? 'none' : '1000',
                    strokeDashoffset: chartVisible ? '0' : '1000',
                    transitionDelay: '400ms',
                  }}
                />
                <path
                  d={generateSmoothPath(currentData.values, maxValue, 320)}
                  fill="none"
                  stroke="#1c74b1"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className={`transition-all duration-[1600ms] ${
                    chartVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    strokeDasharray: chartVisible ? 'none' : '1000',
                    strokeDashoffset: chartVisible ? '0' : '1000',
                    transitionDelay: '650ms',
                  }}
                />

                {currentData.dates.map((date, index) => {
                  const padding = 56
                  const chartWidth = 800 - padding * 2
                  const chartHeight = 320 - padding * 2
                  const x =
                    padding +
                    (index / (currentData.dates.length - 1)) * chartWidth
                  const primaryY =
                    padding +
                    (1 - currentData.values[index] / maxValue) * chartHeight
                  const trendY =
                    padding +
                    (1 - trendValues[index] / maxValue) * chartHeight

                  return (
                    <g key={date}>
                      <circle
                        cx={x}
                        cy={trendY}
                        r={hoveredPoint === index ? 5 : 3}
                        fill="#3d414b"
                        className={`transition-all duration-500 ${
                          chartVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                        }`}
                        style={{ transitionDelay: `${900 + index * 90}ms` }}
                        onMouseEnter={() => setHoveredPoint(index)}
                        onMouseLeave={() => setHoveredPoint(null)}
                      />
                      <circle
                        cx={x}
                        cy={primaryY}
                        r={hoveredPoint === index ? 5 : 3}
                        fill="#1c74b1"
                        className={`transition-all duration-500 ${
                          chartVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                        }`}
                        style={{ transitionDelay: `${980 + index * 90}ms` }}
                        onMouseEnter={() => setHoveredPoint(index)}
                        onMouseLeave={() => setHoveredPoint(null)}
                      />
                    </g>
                  )
                })}

                {currentData.dates.map((date, index) => {
                  const padding = 56
                  const chartWidth = 800 - padding * 2
                  const x =
                    padding +
                    (index / (currentData.dates.length - 1)) * chartWidth

                  return (
                    <text
                      key={`${date}-label`}
                      x={x}
                      y={342}
                      textAnchor="middle"
                      fill="#9ea4af"
                      fontSize="12"
                      fontWeight="500"
                      className={`transition-all duration-500 ${
                        chartVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ transitionDelay: `${1200 + index * 45}ms` }}
                    >
                      {date}
                    </text>
                  )
                })}

                {hoveredPoint !== null && (
                  <g>
                    <rect
                      x={
                        56 +
                        (hoveredPoint / (currentData.dates.length - 1)) * 688 -
                        66
                      }
                      y={16}
                      width="132"
                      height="68"
                      fill="white"
                      stroke="#e2e4e8"
                      strokeWidth="1"
                      rx="10"
                    />
                    <text
                      x={56 + (hoveredPoint / (currentData.dates.length - 1)) * 688}
                      y={36}
                      textAnchor="middle"
                      fill="#1f232a"
                      fontSize="12"
                      fontWeight="600"
                    >
                      {currentData.dates[hoveredPoint]}
                    </text>
                    <text
                      x={56 + (hoveredPoint / (currentData.dates.length - 1)) * 688}
                      y={53}
                      textAnchor="middle"
                      fill="#1c74b1"
                      fontSize="11"
                      fontWeight="600"
                    >
                      {currentData.series.primaryLabel}:{' '}
                      {formatLegendValue(currentData.values[hoveredPoint])}
                    </text>
                    <text
                      x={56 + (hoveredPoint / (currentData.dates.length - 1)) * 688}
                      y={68}
                      textAnchor="middle"
                      fill="#3d414b"
                      fontSize="11"
                      fontWeight="600"
                    >
                      {currentData.series.secondaryLabel}:{' '}
                      {formatLegendValue(trendValues[hoveredPoint])}
                    </text>
                  </g>
                )}
              </svg>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-4">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`min-w-0 transition-all duration-700 sm:min-w-[140px] ${
                    animationPhase >= 3
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${1400 + index * 140}ms` }}
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
                    {metric.label} • {metric.size}
                  </div>
                  <div className="mt-2 text-lg font-semibold text-ink-900 sm:text-2xl">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
            <div
              className={`rounded-2xl bg-ink-900 px-6 py-4 text-sm text-sand-50 shadow-soft transition-all duration-700 ${
                animationPhase >= 3
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '1800ms' }}
            >
              <div className="flex items-center justify-between gap-6">
                <span className="uppercase tracking-[0.2em] text-sand-200/70">
                  {currentData.summaryLabel}
                </span>
                <span className="font-semibold text-white">
                  {summaryValue}
                </span>
              </div>
              <div className="mt-3 h-2 w-48 overflow-hidden rounded-full bg-ink-700">
                <div
                  className={`h-full rounded-full bg-gradient-to-r from-ocean-400 via-sage-500 to-sand-400 transition-all duration-[1600ms] ${
                    chartVisible ? 'w-full' : 'w-0'
                  }`}
                  style={{ transitionDelay: '2100ms' }}
                />
              </div>
              {currentData.summaryNote ? (
                <p className="mt-3 text-xs text-sand-200/70">
                  {currentData.summaryNote}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
