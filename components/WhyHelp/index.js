import React from 'react'
import {
  Container,
  FirstCol,
  NumbersInfo,
  NumbersInfoContainer,
  NumbersInfoDescription,
  ParagraphContainer,
  ParagraphImgWrapper,
  ParagraphTextWrapper,
  SecondCol,
  Span,
  StarSVG,
  TitleWrapper,
  Wrapper
} from './WhyHelp.styles'
import { Grid } from '../../../atoms/Grid'
import { Title } from '../../../atoms/Title'

const WhyHelp = ({ title, paragraphs }) => (
  <Wrapper>
    <section>
      <Grid>
        <Container>
          <FirstCol>
            <TitleWrapper>
              <Title.H2>
                <Span>{title}</Span>
              </Title.H2>
            </TitleWrapper>

            {paragraphs.map((paragraph, index) => (
              <ParagraphContainer key={index}>
                <ParagraphImgWrapper>
                  <StarSVG />
                </ParagraphImgWrapper>
                <ParagraphTextWrapper>{paragraph}</ParagraphTextWrapper>
              </ParagraphContainer>
            ))}
          </FirstCol>

          <SecondCol>
            <NumbersInfoContainer>
              <NumbersInfo>280+</NumbersInfo>
              <NumbersInfoDescription>
                психологов в&nbsp;нашей команде
              </NumbersInfoDescription>
            </NumbersInfoContainer>
            <NumbersInfoContainer>
              <NumbersInfo>7 лет</NumbersInfo>
              <NumbersInfoDescription>
                средний опыт работы специалистов
              </NumbersInfoDescription>
            </NumbersInfoContainer>
            <NumbersInfoContainer>
              <NumbersInfo>22 434</NumbersInfo>
              <NumbersInfoDescription>
                человек получили поддержку за&nbsp;год
              </NumbersInfoDescription>
            </NumbersInfoContainer>
          </SecondCol>
        </Container>
      </Grid>
    </section>
  </Wrapper>
)

export default WhyHelp
