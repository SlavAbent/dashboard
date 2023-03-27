import React, { FC, useMemo } from 'react'
import { uniqueId } from 'lodash'
import { Loader } from 'components/uikit/Loader'
import { Badge } from 'components/uikit/Badge/Badge'
import classNames from 'classnames'
import { AsideRow, AsideRowText, AsideRowWrapper, AsideContain } from './index.styles'
import { IAsideProps, IList } from '../../../model/index.model'
import { Delete } from 'components/Icons/Delete/Delete'
import { Link } from 'react-router-dom'
import { notificationFabric } from '../../../../../components/uikit/Notification/notificationFabric'
import { notificationEnum } from '../../../../../components/uikit/Notification/model/Notification.model'
import { errorsList } from '../../../../../utils/errorsGenerator'
import { NotifIcon } from '../../../../../components/Icons/Notification/Notification'

const AsideContainer: FC<IAsideProps> = ( props) => {
  const { data, loading, error, handleAsideDeleteItem } = props;
  const dataAside = useMemo(() => {
    if(Array.isArray(data)) {
      return data.map((list: IList) => {
        const { id, name } = list.color
        const className = classNames('badge', { [`badge--${name}`]: name}, 'default')
        return (
          <Link to={`${id}`} key={uniqueId('list_')}>
             <AsideRow>
               <Badge
                 id={id}
                 className={className}
                 size={16}
                 color="custom--badge"
               />
               <AsideRowText>{list?.name}</AsideRowText>
               <div onClick={() => handleAsideDeleteItem && handleAsideDeleteItem(list)}>
                 <Delete size={16} />
               </div>
             </AsideRow>
          </Link>
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
            {
              error && notificationFabric({
                className: 'notification__error',
                type: notificationEnum.error,
                icon: <NotifIcon />,
                title: 'Ошибка',
                position: 'bottom-right',
                children: errorsList.missingListName
              })
            }
            { dataAside }
          </AsideRowWrapper>
        )
      }
    </AsideContain>
  )
}

export default AsideContainer
