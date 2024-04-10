import styled, { css } from 'styled-components'
import { size } from '../../../constants'

const InfoCardFlexStyles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${size.xs}) {
    gap: 8px;
  }
`

export const InfoCardImageHeader = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 254px;
  height: 183px;
  margin-bottom: 16px;

  @media (max-width: ${size.md}) {
    width: 208px;
    height: auto;
  }

  @media (max-width: ${size.sm}) {
    margin: auto;
    margin-bottom: 16px;
  }

  @media (max-width: ${size.xs}) {
    width: 156px;
  }
`

export const InfoCardTextContainer = styled.div`
  ${InfoCardFlexStyles}
  width: 100%;
`

export const Image = styled.img`
  width: 100%;
`

export const StyledInfoCard = styled.div`
  padding: 24px;
  border-radius: 32px;
  background: #f9fdfd;

  @media (max-width: ${({ directionChangeSize }) =>
      directionChangeSize || size.md}) {
    display: flex;
    gap: 16px;
  }

  @media (max-width: ${size.sm}) {
    display: block;
  }
`
