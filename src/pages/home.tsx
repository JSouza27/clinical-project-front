import React, { useState } from 'react'
import { FaHandHoldingMedical } from 'react-icons/fa'

import { Heading } from '../components/Heading'
import { ServiceCard } from '../components/ServiceCard'
import { Text } from '../components/Text'

export type CategoryProps = {
  name: string
  icon: React.ReactElement
  url: string
  textColor: string
}

const categoriesMock: CategoryProps[] = [
  {
    name: 'Especialista em Cardio',
    icon: <FaHandHoldingMedical />,
    url: '/cardiologista',
    textColor: 'text-sky-600',
  },
  {
    name: 'Especialista em Odontologia',
    icon: <FaHandHoldingMedical />,
    url: '/dentista',
    textColor: 'text-sky-600',
  },
  {
    name: 'Especialista em Visão',
    icon: <FaHandHoldingMedical />,
    url: '/oftamologista',
    textColor: 'text-sky-600',
  },
  {
    name: 'Especialista em Célebro',
    icon: <FaHandHoldingMedical />,
    url: '/neurologista',
    textColor: 'text-sky-600',
  },
  {
    name: 'Especialista em Osso',
    icon: <FaHandHoldingMedical />,
    url: '/pstopedista',
    textColor: 'text-sky-600',
  },
  {
    name: 'Especialista em Criança',
    icon: <FaHandHoldingMedical />,
    url: '/pediatra',
    textColor: 'text-sky-600',
  },
  {
    name: 'Especialista em Pelel',
    icon: <FaHandHoldingMedical />,
    url: '/dermatologista',
    textColor: 'text-sky-600',
  },
  {
    name: 'Especialista em Nutrição',
    icon: <FaHandHoldingMedical />,
    url: '/nutricionista',
    textColor: 'text-sky-600',
  },
]

export function Home() {
  const [categories, setCategories] = useState<CategoryProps[]>(categoriesMock)

  return (
    <div className="flex flex-col gap-3">
      <Heading className="" size="sm">
        Serviços
      </Heading>

      <div className="flex items-center justify-center flex-wrap gap-3">
        {categories?.length ? (
          categories.map(({ name, icon, textColor, url }, i) => (
            <a href={url} key={`${name}-${i}`}>
              <ServiceCard name={name} icon={icon} textColor={textColor} />
            </a>
          ))
        ) : (
          <Text className="self-center font-semibold">
            Sem especialista no momento
          </Text>
        )}
      </div>
    </div>
  )
}
