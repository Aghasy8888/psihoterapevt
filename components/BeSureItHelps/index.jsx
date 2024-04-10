import GuidanceCard from '../GuidanceCard'
import ImageTitleDesc from '../ImageTitleDesc'
import ListFromItems from '../ListFromItems'
import React from 'react'

import clockSVG from '../../../../static/img/psychotherapist/clock.svg'
import styled from 'styled-components'

import {
  BeSureItHelpsSvg,
  ImageWrapper_2
} from '../ImageTitleDesc/ImageTitleDesc.styles'
import { Grid } from '../../../atoms/Grid'
import { Title } from '../../../atoms/Title'
import { Wrapper } from './BeSureItHelps.styles'

import {
  HOW_FAST_IT_HELPS,
  HOW_FAST_IT_HELPS_PARAGRAPH,
  beSureItHelpsDescription,
  beSureItHelpsListItems,
  beSureItHelpsTitle
} from '../constants/constants'
import { size } from '../../../constants'

export const ClockSVG = styled.img.attrs(() => ({
  src: clockSVG
}))``

const BeSureItHelps = () => {
  const beSureItHelpsImage = (
    <ImageWrapper_2 size={size.md}>
      <BeSureItHelpsSvg />
    </ImageWrapper_2>
  )

  return (
    <>
      <ImageTitleDesc
        styles={{ descriptionBold: true }}
        TitleComponent={Title.H3asH2styles}
        directionChangeSize={size.md}
        descTitle={beSureItHelpsDescription}
        title={beSureItHelpsTitle}
        content={<ListFromItems items={beSureItHelpsListItems} />}
        image={beSureItHelpsImage}
      />

      <Wrapper>
        <section>
          <Grid>
            <GuidanceCard
              style={{ iconWrapper: { marginTop: '-71px' } }}
              title={HOW_FAST_IT_HELPS}
              paragraphs={{
                paragraph: HOW_FAST_IT_HELPS_PARAGRAPH,
                isArray: false
              }}
              imageSVG={<ClockSVG />}
            />
          </Grid>
        </section>
      </Wrapper>
    </>
  )
}

export default BeSureItHelps
