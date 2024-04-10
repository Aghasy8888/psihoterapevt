import React from 'react'
import { InfoAdditional } from './InfoAdditional'
import { PsychologistUniCard } from '../../PsychologistMiniCard'

const PsychologistMiniCardTherapy = ({ psychologist, params }) => {
  const approaches = psychologist?.approaches?.map((approach) => approach.name)

  const infoAdditionalProps = {
    approaches: approaches?.length ? approaches : [],
    skills: psychologist?.features?.length
      ? psychologist.features.split('\n')
      : []
  }

  return (
    <PsychologistUniCard
      infoAdditional={<InfoAdditional {...infoAdditionalProps} />}
      params={params}
      psychologist={psychologist}
    />
  )
}

export default PsychologistMiniCardTherapy
