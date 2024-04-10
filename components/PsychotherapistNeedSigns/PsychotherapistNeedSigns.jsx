import React from 'react'
import { Div, SignCard, Wrapper } from './PsychotherapistNeedSigns.styles'
import { Text } from '../../../atoms/Text'

import signsOfPsychotherapistNeed from '../data/signsOfPsychotherapistNeed'
import { color } from '../../../styles/vars/colors'

const PsychotherapistNeedSigns = () => {
  const signsComponents = signsOfPsychotherapistNeed.map((sign, i) => (
    <SignCard key={i}>
      <sign.image />
      <Text.Large semiBold>
        <Div color={color.text.white}>{sign.paragraph}</Div>
      </Text.Large>
    </SignCard>
  ))

  return <Wrapper>{signsComponents}</Wrapper>
}

export default PsychotherapistNeedSigns
