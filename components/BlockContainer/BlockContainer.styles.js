import styled from 'styled-components'
import { size } from '../../../constants'

export const Wrapper = styled.div`
  background: ${({ backgroundColor }) => backgroundColor};
  padding-bottom: 72px;
  padding-top: 72px;

  @media (max-width: ${size.sm}) {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  @media (max-width: ${size.xs}) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`

export const TitleWrapper = styled.div`
  padding-bottom: 72px;

  @media (max-width: ${size.md}) {
    padding-bottom: 0;
  }
`

export const Content = styled.div`
  padding-bottom: 72px;
  padding-top: 72px;

  @media (max-width: ${size.sm}) {
    padding-bottom: 48px;
    padding-top: 48px;
  }

  @media (max-width: ${size.xs}) {
    padding-bottom: 32px;
    padding-top: 32px;
  }
`
