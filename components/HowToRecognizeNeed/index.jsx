import BlockContainer from '../BlockContainer/BlockContainer'
import GuidanceCard from '../GuidanceCard'
import PsychotherapistNeedSigns from '../PsychotherapistNeedSigns/PsychotherapistNeedSigns'
import React from 'react'
import {
  CONSULT_PSYCHOTHERAPIST,
  RECOGNIZE_NEED_PARAGRAPH,
  RECOGNIZE_NEED_TITLE
} from '../constants/constants'
import { RedSoundSVG } from './HowToRecognizeNeed.styles'
import { Title } from '../../../atoms/Title'
import { color } from '../../../styles/vars/colors'

const guidanceCardProps = {
  style: {
    iconWrapper: { marginTop: '-94px' },
    container: { paddingTop: '38px' }
  },
  title: CONSULT_PSYCHOTHERAPIST,
  imageSVG: <RedSoundSVG />
}

const HowToRecognizeNeed = () => {
  return (
    <BlockContainer
      TitleComponent={Title.H3asH2styles}
      content={<PsychotherapistNeedSigns />}
      guidanceCard={<GuidanceCard {...guidanceCardProps} />}
      paragraph={RECOGNIZE_NEED_PARAGRAPH}
      style={{ backgroundColor: color.backgroundBlue, color: color.text.white }}
      title={RECOGNIZE_NEED_TITLE}
    />
  )
}

export default HowToRecognizeNeed
