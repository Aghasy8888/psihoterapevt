import React from 'react'
import {
  InfoCardImageHeader,
  InfoCardTextContainer
} from '../InfoCard/InfoCard.styles'
import { StyledInfoCardFullSize } from './InfoCardFullSize.styles'
import { Title } from '../../../atoms/Title'

const InfoCardFullSize_ = ({ image, title, content }) => {
  return (
    <StyledInfoCardFullSize>
      <InfoCardImageHeader>{image}</InfoCardImageHeader>
      <InfoCardTextContainer>
        {title && <Title.H3>{title}</Title.H3>}
        {content}
      </InfoCardTextContainer>
    </StyledInfoCardFullSize>
  )
}

export default InfoCardFullSize_
