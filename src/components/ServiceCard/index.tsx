import React from 'react'
import { Text } from '../Text'

export type ServiceCardProps = {
  name: string
  icon: any
  textColor: string
}

export function ServiceCard({ name, icon, textColor }: ServiceCardProps) {
  return (
    <div className="flex flex-col h-44 w-40 rounded-2xl bg-white dark:bg-gray-600 shadow-md border-slate-500 items-center justify-center gap-6">
      <div className={`${textColor} text-4xl`}>{icon}</div>
      <Text className="text-xs text-center font-semibold text-slate-500">
        {name}
      </Text>
    </div>
  )
}
