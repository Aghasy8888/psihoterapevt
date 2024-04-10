import React from 'react'
import { Button } from '../../../../atoms/Button'
import { ButtonsWrapper } from '../../Common.styles'

const ButtonNewPrimary = ({ name, href, styles, onClick }) => {
  const onClickCallback = onClick ? onClick : () => {}

  return (
    <ButtonsWrapper
      displayChangeSize={styles?.buttonDisplayChangeSize}
      justifyContent={styles?.justifyContent}
    >
      <Button.NewPrimary
        href={href ? href : ''}
        onClick={onClickCallback}
        size="large"
        type="link"
      >
        {name}
      </Button.NewPrimary>
    </ButtonsWrapper>
  )
}

export default ButtonNewPrimary
