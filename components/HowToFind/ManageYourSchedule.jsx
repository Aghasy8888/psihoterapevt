import ImageComponent from './ImageComponent'
import ImageTitleDesc from '../ImageTitleDesc'
import React from 'react'
import contentPadding from '../data/howToFindStepsPadding'
import manageScheduleMobilePng from '../../../../static/img/psychotherapist/manageScheduleMobile.png'
import manageSchedulePng from '../../../../static/img/psychotherapist/manageSchedule.png'
import {
  MANAGE_SCHEDULE_PARAGRAPH,
  MANAGE_SCHEDULE_Title
} from '../constants/constants'
import { Text } from '../../../atoms/Text'
import { Title } from '../../../atoms/Title'
import { size } from '../../../constants'

import { color } from '../../../styles/vars/colors'

const contentComponent = (
  <Text.Large semiBold color={color.text.dark}>
    {MANAGE_SCHEDULE_PARAGRAPH}
  </Text.Large>
)

const imageComponentProps = {
  img: manageSchedulePng,
  mobileImg: manageScheduleMobilePng
}

const ManageYourSchedule = () => {
  const styles = {
    contentPadding,
    background: color.text.white,
    display: 'flex',
    marginBottom: '16px'
  }

  return (
    <ImageTitleDesc
      title={MANAGE_SCHEDULE_Title}
      TitleComponent={Title.PasH3Styles}
      content={contentComponent}
      directionChangeSize={size.sm}
      styles={styles}
      image={<ImageComponent {...imageComponentProps} />}
    />
  )
}

export default ManageYourSchedule
