import React, { FC, useMemo } from 'react'
import { uniqueId } from 'lodash'
import { Loader } from 'components/uikit/Loader'
import { Badge } from 'components/uikit/Badge/Badge'
import classNames from 'classnames'
import { AsideRow, AsideRowText, AsideRowWrapper, AsideContain, AsideNavLink } from './index.styles'
import { IAsideProps, IList } from '../../../model/index.model'
import { Delete } from 'components/Icons/Delete/Delete'
import { notificationFabric } from '../../../../../components/uikit/Notification/notificationFabric'
import { notificationEnum } from '../../../../../components/uikit/Notification/model/Notification.model'
import { errorsList } from '../../../../../utils/errorsGenerator'
import { NotificationIcon } from '../../../../../components/Icons/Notification'

const AsideContainer: FC<IAsideProps> = ( props) => {
  const { data, loading, error, handleAsideDeleteItem } = props;

  const dataAside = useMemo(() => {
    if(Array.isArray(data)) {
      return data.map((list: IList) => {
        const { id, name } = list.color
        const className = classNames('badge', { [`badge--${name}`]: name}, 'default')
        return (
          <AsideNavLink
            to={`${list.id}`}
            key={uniqueId('list_')}
          >
             <AsideRow>
               <Badge
                 id={id}
                 className={className}
                 size={12}
                 color="custom--badge"
               />
               <AsideRowText>{list?.name}</AsideRowText>
               <div onClick={() => handleAsideDeleteItem && handleAsideDeleteItem(list)}>
                 <Delete size={16} />
               </div>
             </AsideRow>
          </AsideNavLink>
        )
      })
    }
  }, [data, handleAsideDeleteItem])

  return (
    <AsideContain>
      { loading ?
        <Loader
          size={50}
          title='loading'
          className='visibility'
        />
        : (
          <AsideRowWrapper>
            { error && notificationFabric({
              className: 'notification__error',
              type: notificationEnum.error,
              icon: <NotificationIcon />,
              title: 'Ошибка',
              position: 'bottom-right',
              children: errorsList.missingListName
            })}
            { dataAside }
          </AsideRowWrapper>
        )
      }
    </AsideContain>
  )
}

export default AsideContainer
