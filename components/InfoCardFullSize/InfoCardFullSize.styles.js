import styled from 'styled-components'
import { color } from '../../../styles/vars/colors'
import { size } from '../../../constants'

export const StyledInfoCardFullSize = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  padding: 24px;
  display: flex;
  border-radius: 32px;
  background: ${color.button.outline.hover};
  gap: 16px;

  @media (max-width: ${size.sm}) {
    display: block;
  }
`
