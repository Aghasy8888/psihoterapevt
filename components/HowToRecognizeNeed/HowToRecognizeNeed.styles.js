import redSoundSVG from '../../../../static/img/psychotherapist/redSound.svg'
import styled from 'styled-components'
import { size } from '../../../constants'

export const RedSoundSVG = styled.img.attrs(() => ({
  src: redSoundSVG
}))`
  width: 92px;
  height: 92px;

  @media (max-width: ${size.sm}) {
    width: 69px;
    height: 69px;
  }

  @media (max-width: ${size.xs}) {
    height: 75px;
  }
`
