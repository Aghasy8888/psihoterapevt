import InfoCard from '../InfoCard'
import InfoCardFullSize from '../InfoCardFullSize'
import React from 'react'
import { InfoCardsContainer } from './InfoCardContainer.styles'
import { ParagraphComponents } from '../ParagraphComponents'
import { Text } from '../../../atoms/Text'
import { color } from '../../../styles/vars/colors'

const InfoCardContainer = ({ infoCards, fullSizeCardData }) => {
  return (
    <InfoCardsContainer>
      {infoCards.map((infoCard, index) => (
        <InfoCard
          key={index}
          content={
            <Text.Large semiBold color={color.text.dark}>
              {infoCard.paragraph}
            </Text.Large>
          }
          title={infoCard.title}
          image={<infoCard.image />}
        />
      ))}

      <InfoCardFullSize
        content={
          <ParagraphComponents paragraphs={fullSizeCardData.paragraphs} />
        }
        image={<fullSizeCardData.image />}
      />
    </InfoCardsContainer>
  )
}

export default InfoCardContainer
