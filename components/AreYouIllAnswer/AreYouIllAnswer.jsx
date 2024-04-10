import React from 'react'
import { Text } from '../../../atoms/Text'
import { color } from '../../../styles/vars/colors'

const AreYouIllAnswer = () => {
  return (
    <>
      <Text.Large color={color.text.dark} semiBold>
        Нет. К психологам и психотерапевтам часто обращаются люди без
        психических расстройств, это совершенно нормально.
      </Text.Large>
      <Text.Large color={color.text.dark} semiBold>
        Но даже если у вас есть психическое расстройство, это не говорит о вас
        ничего плохого. Уходит время, когда ментальные расстройства считались
        проявлением слабости и чем-то постыдным. Всё больше медийных персон
        делятся своим опытом и путем к выздоровлению.
      </Text.Large>
    </>
  )
}

export default AreYouIllAnswer
