import React, { FC, useEffect, useRef, useState } from 'react'
import { NotificationWrapper } from './Notification.styled'
import { INotification } from './model/Notification.model'

export const Notification: FC<INotification> = (props) => {
  const {
    title,
    children,
    className,
    timeout,
    onClick,
    icon,
    position,
    type,
  } = props

  const ref = useRef(null)
  const [notificationTime, setNotificationTime] = useState('')

  //refactoring
  useEffect(() => {
    const timeIsOver = setTimeout(() => {
      // not working
      setNotificationTime('hideNotification')
    }, timeout)
    return clearTimeout(timeIsOver)
  }, [timeout])


  console.log('notificationTime', notificationTime)

  const classname = `${className} ${type} ${position} ${notificationTime}`

  return (
    <NotificationWrapper
      ref={ref}
      className={classname}
      onClick={onClick}
    >
      <>{icon}</>
      <p>{title}</p>
      {children}
    </NotificationWrapper>
  )
}