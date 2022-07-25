import React, { useEffect, useState } from 'react'
import moment from 'moment'
import 'moment/locale/ru';

import { TimeWrapper } from './Time.styled'

// Sington?

export const TimeDate = () => {
  const [time, setTime] = useState<string>()

  useEffect(() => {
    setInterval(() => {
     const date = moment().format('DD MMM YYYY, HH:mm:ss')
     setTime(date)
    }, 1000)
  }, [])

  return <TimeWrapper>{time}</TimeWrapper>
}