import React, { useEffect, useState } from 'react'
import moment from 'moment'
import 'moment/locale/ru';

import { TimeWrapper, TimeContainer } from './Time.styled'
import { AiOutlineCalendar } from 'react-icons/ai'

// Sington?

export const TimeDate = () => {
  const [time, setTime] = useState<string>()
  const [date, setDate] = useState<string>()

  useEffect(() => {
    setInterval(() => {
      const date = moment().format('DD MMM YYYY')
      const clock = moment().format('HH:mm:ss')
     setTime(clock)
     setDate(date)
    }, 1000)
  }, [])

  return (
    <TimeWrapper>
      <AiOutlineCalendar/>
      <TimeContainer>
        <p>{time}</p>
        <p>{date}</p>
      </TimeContainer>
    </TimeWrapper>
  )
}