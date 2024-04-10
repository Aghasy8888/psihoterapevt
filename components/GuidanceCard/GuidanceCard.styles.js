import styled from 'styled-components'
import { Button } from '../../../atoms/Button'
import { color } from '../../../styles/vars/colors'
import { size } from '../../../constants'

export const Container = styled.div`
  display: flex;
  background: inherit;
  padding-top: ${({ paddingTop }) => paddingTop};
  gap: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 792px;
  padding: ${({ paddingTopBottom }) => paddingTopBottom} 24px;
  border-radius: 24px;
  border: 1px solid #dedede;
  background: ${color.text.white};

  @media (max-width: ${size.md}) {
    width: 604px;
    padding: ${({ paddingTopBottom }) => paddingTopBottom} 24px;
  }

  @media (max-width: ${size.sm}) {
    width: 100%;
  }

  @media (max-width: ${size.xs}) {
    padding: ${({ paddingTopBottom }) => paddingTopBottom} 16px;
  }
`

export const IconWrapper = styled.div`
  text-align: center;
  margin-top: ${({ marginTop }) => marginTop};
`

export const ButtonWrapper = styled.div`
  ${Button.NewPrimary} {
    margin: auto;

    @media (max-width: ${size.xs}) {
      width: 100%;
    }
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 16px;
`
