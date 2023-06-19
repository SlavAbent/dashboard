import React, { FC, useEffect, useState } from 'react'
import { ITime } from './model/Time.model'
import { AiOutlineCalendar } from 'react-icons/ai'
import { TimeContainer, TimeWrapper } from './styles/Time.styled'
import moment from 'moment'

moment.locale('ru');

export const Time:FC<ITime> = ({
 showIcon,
 showTime,
}) => {
  const [time, setTime] = useState<string>()
  const [date, setDate] = useState<string>()

  useEffect(() => {
    setInterval(() => {
      const date = moment().format('DD MMM YYYY');
      const clock = moment().format('HH:mm:ss')
      setTime(clock)
      setDate(date)
    }, 1000)
  }, [])

  return (
    <>
      <TimeWrapper>
        { showIcon && <AiOutlineCalendar/> }
          <TimeContainer>
            <p>{ showTime && time }</p>
            <p>{ date }</p>
          </TimeContainer>
      </TimeWrapper>
    </>
  )
}
