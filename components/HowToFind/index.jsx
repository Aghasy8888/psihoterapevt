import AlgorithmFindsSpecialist from './AlgorithmFindsSpecialist'
import ChooseStartTime from './ChooseStartTime'
import FillTheForm from './FillTheForm'
import ManageYourSchedule from './ManageYourSchedule'
import React from 'react'

import { Grid } from '../../../atoms/Grid'
import { HOW_TO_FIND_TITLE } from '../constants/constants'
import { Title } from '../../../atoms/Title'
import { TitleWrapper } from './HowToFind.styles'
import { Wrapper } from '../BlockContainer/BlockContainer.styles'

import { color } from '../../../styles/vars/colors'

const HowToFind = () => {
  return (
    <Wrapper backgroundColor={color.text.white}>
      <Grid>
        <TitleWrapper>
          <Title.H2>{HOW_TO_FIND_TITLE}</Title.H2>
        </TitleWrapper>
      </Grid>

      <FillTheForm />
      <AlgorithmFindsSpecialist />
      <ChooseStartTime />
      <ManageYourSchedule />
    </Wrapper>
  )
}

export default HowToFind
