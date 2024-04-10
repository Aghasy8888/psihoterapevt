import styled from 'styled-components'
import { size } from '../../../constants'

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: ${size.md}) {
    flex-direction: column;
    gap: 16px;
  }
`

export const Span = styled.span`
  color: ${({ color }) => color};
`

export const TextContainer = styled.div`
  width: 50%;

  @media (max-width: ${size.md}) {
    width: 632px;
  }

  @media (max-width: ${size.sm}) {
    width: 100%;
  }
`
