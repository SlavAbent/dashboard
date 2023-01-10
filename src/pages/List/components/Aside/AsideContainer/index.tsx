import React, { FC, useMemo } from 'react'
import { uniqueId } from 'lodash'
import { Loader } from 'components/uikit/Loader'
import { Badge } from 'components/uikit/Badge/Badge'
import { Notification } from 'components/uikit/Notification/Notification'
import classNames from 'classnames'
import { AsideRow, AsideRowText, AsideRowWrapper, AsideContain } from './index.styles'
import { IList } from './index.model'
import { Delete } from 'components/Icons/Delete/Delete'

const AsideContainer = ({ data, loading, error, handleAsideDeleteItem }) => {
  const dataAside = useMemo(() => {
    if(Array.isArray(data)) {
      return data.map((list: IList) => {
        const { id, name, hex } = list.color
        const className = classNames('badge', { [`badge--${name}`]: name}, 'default')
        return (
         <AsideRow key={uniqueId('list_')}>
           <Badge
             id={id}
             className={className}
             size={16}
             color="custom--badge"
           />
           <AsideRowText>{list?.name}</AsideRowText>
           <div onClick={() => handleAsideDeleteItem(list)}>
             <Delete
               size={16}
               color='#ffffff'
             />
           </div>
         </AsideRow>
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
              error && (
                <Notification
                  className={'notification__error'}
                  icon={<div/>}
                  position={'bottom-right'}
                  title={'Error'}
                  type={'error'}
                  children={'data was errors'}
                />
              )
            }
            { dataAside }
          </AsideRowWrapper>
        )
      }
    </AsideContain>
  )
}

export default AsideContainer