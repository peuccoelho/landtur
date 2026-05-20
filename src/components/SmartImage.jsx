import { useState } from 'react'

export default function SmartImage({
  src,
  alt,
  className = '',
  imageClassName = '',
  ...props
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`absolute inset-0 bg-sand-100 transition-opacity duration-500 ${
          loaded ? 'opacity-0' : 'opacity-100 animate-pulse'
        }`}
      />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition duration-700 ${
          loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        } ${imageClassName}`}
        {...props}
      />
    </div>
  )
}
