import ImageComponent from './ImageComponent'
import ImageTitleDesc from '../ImageTitleDesc'
import React from 'react'
import algorithmFindsMobilePng from '../../../../static/img/psychotherapist/algorithmFindsMobile.png'
import algorithmFindsPng from '../../../../static/img/psychotherapist/algorithmFinds.png'
import contentPadding from '../data/howToFindStepsPadding'
import {
  ALGORITHM_FINDS_PARAGRAPH,
  ALGORITHM_FINDS_Title
} from '../constants/constants'
import { Text } from '../../../atoms/Text'
import { Title } from '../../../atoms/Title'
import { color } from '../../../styles/vars/colors'
import { size } from '../../../constants'

const contentComponent = (
  <Text.Large semiBold color={color.text.dark}>
    {ALGORITHM_FINDS_PARAGRAPH}
  </Text.Large>
)

const imageComponentProps = {
  img: algorithmFindsPng,
  mobileImg: algorithmFindsMobilePng
}

const AlgorithmFindsSpecialist = () => {
  const styles = {
    contentPadding,
    background: color.text.white,
    display: 'flex',
    marginBottom: '16px'
  }

  return (
    <ImageTitleDesc
      title={ALGORITHM_FINDS_Title}
      TitleComponent={Title.PasH3Styles}
      content={contentComponent}
      directionChangeSize={size.sm}
      styles={styles}
      image={<ImageComponent {...imageComponentProps} />}
    />
  )
}

export default AlgorithmFindsSpecialist
