import React from 'react'
import { Notification } from './Notification'
import { notificationEnum } from './model/Notification.model'

export const notificationFabric = (props) => {
  switch (props) {
    case notificationEnum.success: {
      return <Notification type={notificationEnum.success} {...props} />
    }
    case notificationEnum.error: {
      return <Notification type={notificationEnum.error} {...props} />
    }
    case notificationEnum.warning: {
      return <Notification type={notificationEnum.warning} {...props} />
    }
    default:
      return <Notification type={notificationEnum.default} {...props} />
  }
}
