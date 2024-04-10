import React from 'react'
import useMediaWidth from '../../../hooks/useMediaWidth'
import { Image } from './HowToFind.styles'
import { ImageWrapper } from '../ImageTitleDesc/ImageTitleDesc.styles'
import { color } from '../../../styles/vars/colors'
import { size } from '../../../constants'
import { useEffect, useState } from 'react'
import { useWindowWidth } from '../../../hooks/useWindowWidth'

const ImageComponent = ({ mobileImg, img }) => {
  const windowWidth = useWindowWidth()
  const isMobile = useMediaWidth(windowWidth <= parseInt(size.sm))
  const [image, setImage] = useState()

  useEffect(() => {
    if (isMobile) {
      setImage(mobileImg)
    } else {
      setImage(img)
    }
  }, [isMobile])

  return (
    <ImageWrapper
      backgroundColor={color.button.grey.press}
      borderRadius="22px"
      size={size.sm}
    >
      <Image src={image} />
    </ImageWrapper>
  )
}

export default ImageComponent
