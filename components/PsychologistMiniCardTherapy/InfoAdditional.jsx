import React from 'react'
import styled from 'styled-components'
import { Info } from '../../../molecules/Info'
import { Title } from '../../../atoms/Title'

const Spec = styled(({ className, data }) =>
  data?.length
    ? data?.map((data) => (
        <Info.TextWithIcon key={data} className={className} type="dotted">
          {data}
        </Info.TextWithIcon>
      ))
    : null
)`
  margin-bottom: 8px;
  vertical-align: middle;

  &:last-child {
    margin-bottom: 0;
  }

  & p {
    font-size: 14px;
    line-height: 20px;
    margin: auto 0;
  }
`

export const InfoAdditional = styled(({ className, skills, approaches }) => (
  <div className={className}>
    <Title.H5>{'Подход:'}</Title.H5>
    <Spec data={approaches} />
    <Title.H5>{'С чем работает психолог:'}</Title.H5>
    <Spec data={skills} />
  </div>
))`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  & ${Title.H5} {
    font-weight: 600;
    margin-bottom: 8px;
  }
`
