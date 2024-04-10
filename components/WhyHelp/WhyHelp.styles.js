import starSVG from '../../../../static/img/family-seo/star.svg'
import styled from 'styled-components'
import { Title } from '../../../atoms/Title'
import { color } from '../../../../youtalk-storybook/src/ui'
import { size } from '../../../constants'

export const Span = styled.span`
  color: ${color.text.white};
`

export const Wrapper = styled.div`
  background-color: ${color.button.primary.hover};
`

export const Container = styled.div`
  display: flex;
  gap: 126px;
  padding-top: 72px;
  padding-bottom: 72px;

  background-image: url(/img/why-help-panic-attack/cross.svg),
    url(/img/why-help-panic-attack/circle-white.svg),
    url(/img/why-help-panic-attack/circle-yellow.svg);
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: top 110px right 310px, right 0 top 250px,
    top 40px right 60px;

  @media (max-width: ${size.lg}) {
    background-image: url(/img/why-help-panic-attack/cross.svg);
    background-position: top 40px right 60px;
    background-repeat: no-repeat;
    padding-top: 48px;
    padding-bottom: 48px;
    gap: 24px;
  }

  @media (max-width: ${size.md}) {
    background-image: none;
    padding-top: 40px;
    padding-bottom: 40px;
    display: block;
  }

  @media (max-width: ${size.sm}) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`

export const FirstCol = styled.div`
  width: 100%;

  @media (max-width: ${size.md}) {
    margin-bottom: 32px;
  }
`

export const SecondCol = styled.div`
  @media (max-width: ${size.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
  }

  @media (max-width: ${size.sm}) {
    display: block;
  }
`

export const TitleWrapper = styled.div`
  margin-bottom: 16px;

   ${Title.H2asH1styles} {
    color: ${color.text.white}};
  }

  @media (max-width: ${size.xs}) {
    margin-bottom: 32px;
  }
`

export const ParagraphContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  gap: 8px;
`

export const ParagraphImgWrapper = styled.div``

export const ParagraphTextWrapper = styled.div`
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  color: white;
`

export const NumbersInfoContainer = styled.div`
  margin-bottom: 24px;
  width: 282px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${size.lg}) {
    width: 304px;
  }

  @media (max-width: ${size.md}) {
    width: 100%;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const NumbersInfo = styled.div`
  color: #f8d763 ${color.text.shadeOfYellow};
  font-family: Montserrat, sans-serif;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px;
  margin-bottom: 16px;

  @media (max-width: ${size.xs}) {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 8px;
  }
`

export const NumbersInfoDescription = styled.div`
  color: ${color.text.white};
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`

export const StarSVG = styled.img.attrs(() => ({
  src: starSVG
}))``
