import folderSVG from '../../../../static/img/psychotherapist/folder.svg'
import styled from 'styled-components'
import { size } from '../../../constants'

export const FolderSVG = styled.img.attrs(() => ({
  src: folderSVG
}))``

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: ${size.lg}) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`
