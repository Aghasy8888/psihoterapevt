import styled from 'styled-components'
import { Button } from '../../atoms/Button'
import { Title } from '../../atoms/Title'
import { color } from '../../styles/vars/colors'
import { size } from '../../constants'

export const StyledListItem = styled.li``

export const StyledList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Content = styled.div`
  padding: ${({ padding }) => padding || '72px 0'};
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media (max-width: ${({ directionChangeSize }) => directionChangeSize}) {
    flex-direction: column;
  }

  @media (max-width: ${size.md}) {
    padding: ${({ paddingMD }) => paddingMD || '48px 0'};
  }

  @media (max-width: ${size.sm}) {
    padding: ${({ paddingSM }) => paddingSM || '32px 0'};
    gap: 16px;
  }
`

export const TitleWrapper = styled.div`
  display: ${({ display }) => display || 'block'};
  align-items: flex-end;
  flex: 1;
  ${Title.H1} {
    color: ${(props) => props.color ?? color.text.dark};
  }
  ${Title.H2asH1styles} {
    color: ${(props) => props.color ?? color.text.dark};
  }

  margin-bottom: 16px;
  padding-right: 16px;
  margin-top: ${({ marginTop }) => marginTop};
  @media (max-width: ${size.sm}) {
    margin-top: 0;
  }
`

export const TitleWrapper_1 = styled.div`
  margin-bottom: 56px;

  @media (max-width: ${size.md}) {
    margin-bottom: 48px;
  }

  @media (max-width: ${size.md}) {
    margin-bottom: 24px;
  }
`

export const DescriptionWrapper = styled.div`
  flex: 1;
  color: ${(props) => props.color ?? color.text.black};
  margin-bottom: ${({ marginBottom, buttonNameExists }) =>
    !buttonNameExists ? '0' : marginBottom};

  > * {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  @media (max-width: ${size.sm}) {
    margin-bottom: 24px;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};

  @media (max-width: ${({ displayChangeSize }) =>
      displayChangeSize || size.sm}) {
    display: block;

    ${Button.NewPrimary}, ${Button.NewOutline} {
      width: 100%;
      margin-bottom: 24px;
    }
  }
`

export const InfoContainer = styled.div``
