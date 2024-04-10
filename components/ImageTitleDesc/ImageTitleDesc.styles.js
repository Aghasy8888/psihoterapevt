import areYouIllSvg from '../../../../static/img/psychotherapist/areYouIllSvg.svg'
import beSureItHelpsSvg from '../../../../static/img/psychotherapist/beSureItHelps.svg'
import psychotherapistMainSvg from '../../../../static/img/psychotherapist/psychotherapist.svg'
import psychotherapistSessionSvg from '../../../../static/img/psychotherapist/psychotherapistSession.svg'

import styled from 'styled-components'

import { color } from '../../../styles/vars/colors'
import { size } from '../../../constants'

export const PsychotherapistMainSvg = styled.img.attrs(() => ({
  src: psychotherapistMainSvg
}))`
  width: 588px;
  height: 478px;

  @media (max-width: ${size.md}) {
    height: 454px;
  }

  @media (max-width: ${size.sm}) {
    width: 294px;
    height: 227px;
  }

  @media (max-width: ${size.xs}) {
    width: 214px;
    height: 145px;
  }
`

export const PsychotherapistSessionSvg = styled.img.attrs(() => ({
  src: psychotherapistSessionSvg
}))`
  width: 588px;
  height: 339px;

  @media (max-width: ${size.lg}) {
    width: 468px;
    height: 382px;
    padding-top: 88px;
  }

  @media (max-width: ${size.md}) {
    width: 449px;
    height: 272px;
    padding-top: 0px;
  }

  @media (max-width: ${size.sm}) {
    width: 374px;
    height: 222px;
  }

  @media (max-width: ${size.xs375}) {
    width: 268px;
    height: 169px;
  }
`

export const BeSureItHelpsSvg = styled.img.attrs(() => ({
  src: beSureItHelpsSvg
}))`
  width: 588px;
  height: 486px;

  @media (max-width: ${size.lg}) {
    width: 441px;
    height: 365px;
  }

  @media (max-width: ${size.sm}) {
    width: 372px;
    height: 308px;
  }

  @media (max-width: ${size.xs375}) {
    width: 279px;
    height: 231px;
  }
`

export const AreYouIllSvg = styled.img.attrs(() => ({
  src: areYouIllSvg
}))`
  width: 588px;
  height: 486px;

  @media (max-width: ${size.lg}) {
    width: 468px;
    height: 468px;
    padding-top: 117px;
  }

  @media (max-width: ${size.md}) {
    width: 349px;
    height: 341px;
    padding-top: 0px;
  }

  @media (max-width: ${size.xs375}) {
    width: 262px;
    height: 262px;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ backgroundColor }) => backgroundColor || 'inherit'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  @media (max-width: ${({ size }) => size}) {
    order: -1;
  }
`

export const ImageWrapper_2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${size.lg}) {
    align-self: flex-end;
  }

  @media (max-width: ${({ size }) => size}) {
    align-self: flex-start;
  }

  @media (max-width: ${size.xs}) {
    align-self: center;
  }
`

export const Wrapper = styled.div`
  background-color: ${({ background }) =>
    background || color.formItem.select.dropdown.press};
`

export const InfoContainer = styled.div`
  align-self: ${({ alignSelf }) => alignSelf || 'auto'};
  display: ${({ display }) => display || 'block'};
  flex-direction: column;
  padding-top: ${({ paddingTop }) => paddingTop || '0'};
  @media (max-width: ${size.lg}) {
    padding-top: 0;
  }
`
