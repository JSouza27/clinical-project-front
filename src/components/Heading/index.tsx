import React from 'react'

export type HeadingProps = {
  size?: 'sm' | 'md' | 'lg'
  fontWeight?: 'medium' | 'semibold' | 'bold'
  children: React.ReactNode
  className?: string
}

export function Heading({
  children,
  className,
  size,
  fontWeight = 'semibold',
}: HeadingProps) {
  const sizeOptions = () => {
    switch (size) {
      case 'lg':
        return 'text-5xl'
      case 'md':
        return 'text-4xl'
      default:
        return 'text-2xl'
    }
  }

  return (
    <h1 className={`${sizeOptions()} font-${fontWeight} ${className}`}>
      {children}
    </h1>
  )
}
