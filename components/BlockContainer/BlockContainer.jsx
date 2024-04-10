import React from 'react'
import TitleAndParagraph from '../TitleAndParagraph/TitleAndParagraph'

import { Grid } from '../../../atoms/Grid'

import { Content, Wrapper } from './BlockContainer.styles'
import { Title } from '../../../atoms/Title'

const BlockContainer = ({
  ContentComponent = Content,
  TitleComponent = Title.H2,
  guidanceCard,
  style,
  title,
  paragraph,
  content,
  button
}) => {
  return (
    <Wrapper backgroundColor={style.backgroundColor}>
      <section>
        <Grid>
          <TitleAndParagraph
            TitleComponent={TitleComponent}
            paragraph={paragraph}
            title={title}
            style={style}
          />
          {content && <ContentComponent>{content}</ContentComponent>}

          {guidanceCard}
          {button}
        </Grid>
      </section>
    </Wrapper>
  )
}

export default BlockContainer
