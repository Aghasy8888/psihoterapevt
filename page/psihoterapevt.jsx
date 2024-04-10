import App from '../components/App'
import AreYouIllAnswer from '../organisms/Psychotherapist/AreYouIllAnswer/AreYouIllAnswer'
import BeSureItHelps from '../organisms/Psychotherapist/BeSureItHelps'
import Difference from '../organisms/Psychotherapist/Difference'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HowToFind from '../organisms/Psychotherapist/HowToFind'
import HowToRecognizeNeed from '../organisms/Psychotherapist/HowToRecognizeNeed'
import ImageTitleDesc from '../organisms/Psychotherapist/ImageTitleDesc'
import ListFromItems from '../organisms/Psychotherapist/ListFromItems'
import React from 'react'
import SEO from '../atoms/SEO'
import SecondBlock from '../organisms/Psychotherapist/SecondBlock'
import WhenToConsult from '../organisms/Psychotherapist/WhenToConsult'
import WhyHelp from '../organisms/Psychotherapist/WhyHelp'
import styled from 'styled-components'

import {
  AreYouIllSvg,
  ImageWrapper,
  ImageWrapper_2,
  PsychotherapistMainSvg,
  PsychotherapistSessionSvg
} from '../organisms/Psychotherapist/ImageTitleDesc/ImageTitleDesc.styles'
import { Event as GAEvent } from '../components/GA'
import { Title } from '../atoms/Title'
import {
  WHY_NEED_PSYCHOTHERAPIST,
  areYouIllTitle,
  consultationDescription,
  consultationListItems,
  psychotherapistsHelpTitle,
  psychotherapistsSessionListItems,
  psychotherapistsSessionTitle,
  selectPsychotherapist,
  whyNeedPsychotherapistParagraphs,
  DESCRIPTION,
  TITLE,
  WIZARD
} from '../organisms/Psychotherapist/constants/constants'

import { size } from '../constants'

const Page = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 76px repeat(2, auto);
  min-height: calc(var(--vh, 1vh) * 100);
  background: #e6f0fd;

  @media (max-width: ${size.xs}) {
    grid-template-rows: 56px repeat(2, auto);
  }
`

const Main = styled.div`
  & section {
    max-width: 100vw;
  }
`

const psychotherapistMainImage = (
  <ImageWrapper size={size.lg}>
    <PsychotherapistMainSvg />
  </ImageWrapper>
)

const AreYouIllImage = (
  <ImageWrapper_2 size={size.md}>
    <AreYouIllSvg />
  </ImageWrapper_2>
)

const psychotherapistSessionimage = (
  <ImageWrapper size={size.md}>
    <PsychotherapistSessionSvg />
  </ImageWrapper>
)

const button = {
  name: selectPsychotherapist,
  href: { WIZARD },
  onClick: GAEvent.openPsychotherapistPageFirstScreen
}

const Psychotherapist = () => (
  <App>
    <SEO
      description={DESCRIPTION}
      title={TITLE}
    />
    <Page>
      <Header />
      <Main>
        <ImageTitleDesc
          TitleComponent={Title.H1}
          directionChangeSize={size.lg}
          descTitle={consultationDescription}
          title={psychotherapistsHelpTitle}
          content={<ListFromItems items={consultationListItems} />}
          button={button}
          image={psychotherapistMainImage}
          styles={{ buttonDisplayChangeSize: size.md }}
        />

        <SecondBlock />

        <WhenToConsult />

        <HowToRecognizeNeed />

        <ImageTitleDesc
          styles={{ youIllPaddingTop: '68px', background: 'white' }}
          TitleComponent={Title.H3asH2styles}
          directionChangeSize={size.md}
          title={areYouIllTitle}
          content={<AreYouIllAnswer />}
          image={AreYouIllImage}
        />

        <Difference />

        <WhyHelp
          title={WHY_NEED_PSYCHOTHERAPIST}
          paragraphs={whyNeedPsychotherapistParagraphs}
        />

        <BeSureItHelps />

        <HowToFind />

        <ImageTitleDesc
          TitleComponent={Title.H2}
          directionChangeSize={size.md}
          title={psychotherapistsSessionTitle}
          content={<ListFromItems items={psychotherapistsSessionListItems} />}
          button={button}
          image={psychotherapistSessionimage}
          styles={{ buttonDisplayChangeSize: size.md }}
        />
      </Main>
      <Footer />
    </Page>
  </App>
)

export default Psychotherapist