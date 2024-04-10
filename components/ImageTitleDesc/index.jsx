import ButtonNewPrimary from '../common/ButtonNewPrimary'
import React from 'react'
import { Content, DescriptionWrapper, TitleWrapper } from '../Common.styles'
import { Grid } from '../../../atoms/Grid'
import { InfoContainer, Wrapper } from './ImageTitleDesc.styles'
import { Text } from '../../../atoms/Text'
import { color } from '../../../styles/vars/colors'

const ImageTitleDesc = ({
  title,
  TitleComponent,
  descTitle,
  content,
  button,
  image,
  directionChangeSize,
  styles
}) => {
  return (
    <Wrapper background={styles?.background}>
      <section>
        <Grid>
          <Content
            padding={styles?.contentPadding?.padding}
            paddingMD={styles?.contentPadding?.paddingMD}
            paddingSM={styles?.contentPadding?.paddingSM}
            directionChangeSize={directionChangeSize}
          >
            <InfoContainer
              paddingTop={styles?.youIllPaddingTop}
              display={styles?.display}
              alignSelf={styles?.alignSelfInfoCtn}
            >
              <TitleWrapper
                marginTop={button?.name ? '0' : '20px'}
                display={styles?.display}
              >
                <TitleComponent>{title}</TitleComponent>
              </TitleWrapper>
              <DescriptionWrapper
                buttonNameExists={button?.name}
                marginBottom={styles?.marginBottom || '32px'}
              >
                {descTitle && (
                  <Text.Large
                    semiBold={!styles?.descriptionBold}
                    bold={styles?.descriptionBold}
                    color={color.text.dark}
                  >
                    {descTitle}
                  </Text.Large>
                )}

                {content}
              </DescriptionWrapper>

              {button?.name && (
                <ButtonNewPrimary
                  styles={styles}
                  href={button?.href}
                  name={button?.name}
                  onClick={button?.onClick}
                />
              )}
            </InfoContainer>
            {image}
          </Content>
        </Grid>
      </section>
    </Wrapper>
  )
}
export default ImageTitleDesc
