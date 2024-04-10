import ImageComponent from './ImageComponent'
import ImageTitleDesc from '../ImageTitleDesc'
import ListFromItems from '../ListFromItems'
import React from 'react'
import contentPadding from '../data/howToFindStepsPadding'
import howYouFeelMobileSvg from '../../../../static/img/psychotherapist/howYouFeelMobile.svg'
import howYouFeelSvg from '../../../../static/img/psychotherapist/howYouFeel.svg'
import {
  FILL_THE_FORM_BTN_NAME,
  FILL_THE_FORM_DESC,
  FILL_THE_FORM_TITLE,
  fillTheFormListItems
} from '../constants/constants'
import { Title } from '../../../atoms/Title'
import { color } from '../../../styles/vars/colors'
import { size } from '../../../constants'

const imageComponentProps = {
  img: howYouFeelSvg,
  mobileImg: howYouFeelMobileSvg
}

const FillTheForm = () => {
  const styles = {
    contentPadding,
    background: color.text.white,
    marginBottom: '16px',
    alignSelfInfoCtn: 'center'
  }

  return (
    <ImageTitleDesc
      descTitle={FILL_THE_FORM_DESC}
      title={FILL_THE_FORM_TITLE}
      TitleComponent={Title.PasH3Styles}
      content={<ListFromItems items={fillTheFormListItems} />}
      directionChangeSize={size.sm}
      styles={styles}
      button={{ name: FILL_THE_FORM_BTN_NAME, href: { WIZARD } }}
      image={<ImageComponent {...imageComponentProps} />}
    />
  )
}

export default FillTheForm
