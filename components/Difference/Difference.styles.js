import styled from 'styled-components'
import { size } from '../../../constants'

export const TitleWrapper = styled.div`
  padding-bottom: 32px;

  @media (max-width: ${size.sm}) {
    padding-bottom: 24px;
  }

  @media (max-width: ${size.xs}) {
    padding-bottom: 16px;
  }
`
