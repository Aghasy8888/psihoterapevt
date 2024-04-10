import GuidanceCard from '../GuidanceCard'
import React from 'react'
import { Grid } from '../../../atoms/Grid'
import { IMPORTANT, IMPORTANT_PARAGRAPH } from '../constants/constants'
import { Wrapper } from './SecondBlock.styles'

import importantSVG from '../../../../static/img/psychotherapist/important.svg'
import styled from 'styled-components'

export const ImportantSVG = styled.img.attrs(() => ({
  src: importantSVG
}))``

const SecondBlock = () => {
  return (
    <Wrapper>
      <section>
        <Grid>
          <GuidanceCard
            style={{ iconWrapper: { marginTop: '-94px' } }}
            title={IMPORTANT}
            paragraphs={{ paragraph: IMPORTANT_PARAGRAPH, isArray: false }}
            imageSVG={<ImportantSVG />}
          />
        </Grid>
      </section>
    </Wrapper>
  )
}
export default SecondBlock
