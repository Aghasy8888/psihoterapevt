import styled from 'styled-components'
import { size } from '../../../constants'

export const Image = styled.img`
  width: 588px;
  height: 486px;

  @media (max-width: ${size.lg}) {
    width: 468px;
    height: 468px;
  }

  @media (max-width: ${size.md}) {
    width: 356px;
    height: 614px;
  }

  @media (max-width: ${size.sm}) {
    width: 100%;
    height: 374px;
  }

  @media (max-width: ${size.xs375}) {
    height: 288px;
  }
`

export const TitleWrapper = styled.div``
