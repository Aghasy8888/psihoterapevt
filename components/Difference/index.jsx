import ButtonNewPrimary from '../common/ButtonNewPrimary'
import InfoCardContainer from '../InfoCardContainer'
import React from 'react'
import differenceFullSizeData from '../data/differenceFullSizeData'
import differences from '../data/differenceData'
import { DIFFERENCE_TITLE, selectPsychotherapist } from '../constants/constants'
import { Event as GAEvent } from '../../../components/GA'
import { Grid } from '../../../atoms/Grid'
import { Title } from '../../../atoms/Title'
import { TitleWrapper } from './Difference.styles'
import { Wrapper } from '../BlockContainer/BlockContainer.styles'
import { color } from '../../../styles/vars/colors'

const Difference = () => {
  return (
    <Wrapper backgroundColor={color.mdx.link.background}>
      <section>
        <Grid>
          <TitleWrapper>
            <Title.H3asH2styles>{DIFFERENCE_TITLE}</Title.H3asH2styles>
          </TitleWrapper>

          <InfoCardContainer
            fullSizeCardData={differenceFullSizeData}
            infoCards={differences}
          />

          <ButtonNewPrimary
            styles={{ justifyContent: 'center' }}
            href={WIZARD}
            name={selectPsychotherapist}
            onClick={GAEvent.openSemeinyiPageFirstScreen}
          />
        </Grid>
      </section>
    </Wrapper>
  )
}

export default Difference
