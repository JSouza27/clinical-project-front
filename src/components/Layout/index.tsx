import React from 'react'
import { Header } from '../Header'

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-slate-100 flex flex-col h-full items-center justify-between w-screen">
      <Header />
      <main className="p-4 h-full w-full">{children}</main>
      <div>FOOTER</div>
    </div>
  )
}
