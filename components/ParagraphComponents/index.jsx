import React from 'react'
import { Text } from '../../../atoms/Text'
import { color } from '../../../styles/vars/colors'

export const ParagraphComponents = ({ paragraphs }) => {
  const paragraphsComponents = paragraphs.map((paragraph, index) => (
    <Text.Large key={index} semiBold color={color.text.dark}>
      {paragraph}
    </Text.Large>
  ))

  return paragraphsComponents
}
