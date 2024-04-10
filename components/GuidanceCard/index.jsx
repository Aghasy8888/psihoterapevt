import ButtonNewPrimary from '../common/ButtonNewPrimary'
import React from 'react'
import {
  Container,
  Content,
  IconWrapper,
  TextWrapper
} from './GuidanceCard.styles'
import { Text } from '../../../atoms/Text'
import { Title } from '../../../atoms/Title'
import { color } from '../../../styles/vars/colors'

const GuidanceCard = ({ buttonName, paragraphs, title, imageSVG, style }) => {
  return (
    <Container paddingTop={style?.container?.paddingTop || '72px'}>
      <Content paddingTopBottom={style?.content?.paddingTopBottom || '40px'}>
        <IconWrapper marginTop={style?.iconWrapper?.marginTop || '0px'}>
          {imageSVG}
        </IconWrapper>
        <TextWrapper>
          {title && <Title.H3>{title}</Title.H3>}

          {paragraphs &&
            (paragraphs.isArray ? (
              paragraphs.paragraph.map((paragraph) => (
                <Text.Large color={color.text.dark} semiBold>
                  {paragraph}
                </Text.Large>
              ))
            ) : (
              <Text.Large color={color.text.dark} semiBold>
                {paragraphs.paragraph}
              </Text.Large>
            ))}
        </TextWrapper>
      </Content>
      {buttonName && <ButtonNewPrimary href="" name={buttonName} />}
    </Container>
  )
}

export default GuidanceCard
