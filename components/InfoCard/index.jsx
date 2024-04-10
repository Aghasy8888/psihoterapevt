import React from 'react'
import {
  InfoCardImageHeader,
  InfoCardTextContainer,
  StyledInfoCard
} from './InfoCard.styles'
import { Title } from '../../../atoms/Title'

const InfoCard = ({ image, title, content, styles }) => {
  return (
    <StyledInfoCard directionChangeSize={styles?.directionChangeSize}>
      <InfoCardImageHeader>{image}</InfoCardImageHeader>
      <InfoCardTextContainer>
        <Title.PasH3Styles>{title}</Title.PasH3Styles>
        {content}
      </InfoCardTextContainer>
    </StyledInfoCard>
  )
}

export default InfoCard
