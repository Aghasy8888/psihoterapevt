import BlockContainer from '../BlockContainer/BlockContainer'
// import GuidanceCard from '../GuidanceCard'
import InfoCard from '../InfoCard'
import ListFromItems from '../ListFromItems'
import React from 'react'
import whenToConsultCardsData from '../data/whenToConsultCardsData'

import {
  // DOWNLOAD_CHECKLIST,
  // DO_YOU_NEED_PSYCHOTHERAPIST,
  WHEN_TO_CONSULT_PARAGRAPH,
  WHEN_TO_CONSULT_TITLE
} from '../constants/constants'
import {
  // FolderSVG,
  Wrapper
} from './WhenToConsult.styles'
import { color } from '../../../styles/vars/colors'
import { size } from '../../../constants'

// const style = {
//   iconWrapper: { marginTop: '-85px' },
//   container: { paddingTop: '38px' },
//   content: { paddingTopBottom: '56px' }
// }

// const guidanceCardProps = {
//   style,
//   imageSVG: <FolderSVG />,
//   paragraphs: { paragraph: DO_YOU_NEED_PSYCHOTHERAPIST, isArray: false },
//   buttonName: DOWNLOAD_CHECKLIST
// }

const cardsDataComponents = whenToConsultCardsData.map((cardData, index) => (
  <InfoCard
    key={index}
    styles={{ directionChangeSize: size.lg }}
    title={cardData.title}
    image={<cardData.image />}
    content={<ListFromItems items={cardData.items} />}
  />
))

const contentComponent = <Wrapper>{cardsDataComponents}</Wrapper>

const WhenToConsult = () => {
  return (
    <BlockContainer
      content={contentComponent}
      // guidanceCard={<GuidanceCard {...guidanceCardProps} />}
      paragraph={WHEN_TO_CONSULT_PARAGRAPH}
      style={{ backgroundColor: color.button.grey.press }}
      title={WHEN_TO_CONSULT_TITLE}
    />
  )
}

export default WhenToConsult
