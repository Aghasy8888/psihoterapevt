import React from 'react'
import { Text } from '../../../atoms/Text'

import { Span, TextContainer, Wrapper } from './TitleAndParagraph.styles'
import { Title } from '../../../atoms/Title'
import { color } from '../../../styles/vars/colors'

const TitleAndParagraph = ({
  title,
  paragraph,
  style,
  TitleComponent = Title.H2
}) => {
  return (
    <Wrapper>
      <TextContainer>
        <TitleComponent>
          <Span color={style?.color ? style?.color : color.text.dark}>
            {title}
          </Span>
        </TitleComponent>
      </TextContainer>

      <TextContainer>
        <Text.Large semiBold>
          <Span color={style?.color ? style?.color : color.text.dark}>
            {paragraph}
          </Span>
        </Text.Large>
      </TextContainer>
    </Wrapper>
  )
}

export default TitleAndParagraph
