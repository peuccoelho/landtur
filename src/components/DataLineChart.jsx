import { useId } from 'react'

const buildPath = (values, maxValue, width, height, padding, closePath = false) => {
  const safeMax = maxValue || 1
  const chartWidth = width - padding * 2
  const chartHeight = height - padding * 2
  const steps = Math.max(values.length - 1, 1)

  const points = values.map((value, index) => ({
    x: padding + (index / steps) * chartWidth,
    y: padding + (1 - value / safeMax) * chartHeight,
  }))

  let path = `M ${points[0].x},${points[0].y}`
  for (let i = 1; i < points.length; i += 1) {
    path += ` L ${points[i].x},${points[i].y}`
  }

  if (closePath) {
    path += ` L ${points[points.length - 1].x},${height - padding} L ${points[0].x},${
      height - padding
    } Z`
  }

  return { path, points }
}

export default function DataLineChart({
  labels,
  values,
  accent = '#1c74b1',
  fill = 'rgba(28, 116, 177, 0.12)',
  showValues = false,
  valueFormatter = (value) => value,
}) {
  const patternId = useId()
  const maxValue = Math.max(...values) * 1.1
  const width = 640
  const height = 220
  const padding = 40
  const { path: linePath, points } = buildPath(
    values,
    maxValue,
    width,
    height,
    padding,
  )
  const { path: areaPath } = buildPath(
    values,
    maxValue,
    width,
    height,
    padding,
    true,
  )

  return (
    <div className="rounded-2xl border border-sand-200 bg-sand-50/70 p-4">
      <svg className="h-44 w-full" viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <pattern
            id={patternId}
            width="32"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 L 0 0 0 24"
              fill="none"
              stroke="#f1ede2"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width={width} height={height} fill={`url(#${patternId})`} />
        <path d={areaPath} fill={fill} />
        <path
          d={linePath}
          fill="none"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {points.map((point, index) => (
          <circle key={`${labels[index]}-point`} cx={point.x} cy={point.y} r="3" fill={accent} />
        ))}
      </svg>
      {showValues ? (
        <div className="mt-3 space-y-2 text-xs font-medium uppercase tracking-[0.2em] text-ink-500">
          {labels.map((label, index) => (
            <div key={label} className="flex items-center justify-between gap-3">
              <span>{label}</span>
              <span className="text-[11px] font-semibold normal-case text-ink-700">
                {valueFormatter(values[index])}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-3 flex gap-3 overflow-x-auto pb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-ink-500">
          {labels.map((label) => (
            <span key={label} className="min-w-[84px]">
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
