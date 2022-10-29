import React from 'react'

export type TextProps = {
  children: React.ReactNode
  className?: string
}

export function Text({ children, className }: TextProps) {
  return <span className={className}>{children}</span>
}
