import React from 'react'
import { StyledList, StyledListItem } from '../Common.styles'
import { Text } from '../../../atoms/Text'
import { color } from '../../../styles/vars/colors'

const ListFromItems = ({ items }) => {
  return (
    <StyledList>
      {items.map((item, index) => (
        <StyledListItem key={index}>
          <Text.Large semiBold color={color.text.dark}>
            {item}
          </Text.Large>
        </StyledListItem>
      ))}
    </StyledList>
  )
}

export default ListFromItems
