import styled from 'styled-components'
import { size } from '../../../constants'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: ${size.sm}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${size.xs}) {
    grid-template-columns: 1fr;
  }
`

export const SignCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`

export const Div = styled.div`
  color: ${({ color }) => color};
  text-align: center;
`
