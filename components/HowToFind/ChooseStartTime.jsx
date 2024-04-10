import ImageComponent from './ImageComponent'
import ImageTitleDesc from '../ImageTitleDesc'
import ListFromItems from '../ListFromItems'
import React from 'react'
import chooseStartTimeMobilePng from '../../../../static/img/psychotherapist/chooseStartTimeMobile.png'
import chooseStartTimePng from '../../../../static/img/psychotherapist/chooseStartTime.png'
import contentPadding from '../data/howToFindStepsPadding'
import {
  CHOOSE_START_TIME_BTN_NAME,
  CHOOSE_START_TIME_TITLE,
  chooseStartListItems
} from '../constants/constants'
import { Title } from '../../../atoms/Title'
import { color } from '../../../styles/vars/colors'
import { size } from '../../../constants'

const imageComponentProps = {
  img: chooseStartTimePng,
  mobileImg: chooseStartTimeMobilePng
}

const ChooseStartTime = () => {
  const styles = {
    contentPadding,
    background: color.text.white,
    marginBottom: '16px',
    alignSelfInfoCtn: 'center'
  }

  return (
    <ImageTitleDesc
      title={CHOOSE_START_TIME_TITLE}
      TitleComponent={Title.PasH3Styles}
      content={<ListFromItems items={chooseStartListItems} />}
      directionChangeSize={size.sm}
      styles={styles}
      button={{ name: CHOOSE_START_TIME_BTN_NAME, href: { WIZARD } }}
      image={<ImageComponent {...imageComponentProps} />}
    />
  )
}

export default ChooseStartTime
