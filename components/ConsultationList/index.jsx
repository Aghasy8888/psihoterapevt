import React from 'react'
import { StyledList, StyledListItem } from '../Common.styles'
import { consultationListItems } from '../constants/constants'

const ConsultationList = () => {
  return (
    <StyledList>
      {consultationListItems.map((item, index) => (
        <StyledListItem key={index}>{item}</StyledListItem>
      ))}
    </StyledList>
  )
}

export default ConsultationList
