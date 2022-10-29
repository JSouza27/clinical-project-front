import React from 'react'
import { Text } from '../Text'

export function Header() {
  const welcomeMessage = () => {
    const hour = new Date().getHours()

    if (hour >= 6 && hour <= 12) {
      return 'Bom dia 👋'
    } else if (hour > 12 && hour <= 18) {
      return 'Boa tarde 👋'
    } else {
      return 'Boa noite 👋'
    }
  }

  return (
    <div className="flex items-center justify-between p-4 h-16 w-full">
      <div className="flex gap-4">
        <div className="self-start overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 shadow-md border-slate-500">
          <svg
            className="absolute -left-1 w-12 h-12 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>

        <div className="flex flex-col">
          <Text className="text-xs text-gray-500">{welcomeMessage()}</Text>
          <Text className="font-semibold">Andrew Ainsley</Text>
        </div>
      </div>
    </div>
  )
}
