import styled from 'styled-components'
import { size } from '../../../constants'

export const InfoCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
  row-gap: 24px;
  padding-bottom: 24px;

  @media (max-width: ${size.md}) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media (max-width: ${size.xs}) {
    padding-bottom: 16px;
  }
`
