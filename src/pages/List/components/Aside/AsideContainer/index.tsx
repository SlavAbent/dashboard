import React, { useMemo } from 'react'
import { useAxios } from 'hooks/useAxios'
import { uniqueId } from 'lodash'
import { Loader } from 'components/uikit/Loader'
import { Badge } from 'components/uikit/Badge/Badge'
import { Notification } from 'components/uikit/Notification/Notification'
import classNames from 'classnames'
import { AsideRow, AsideRowText, AsideRowWrapper, AsideContain } from './index.styles'
import { IList } from './index.model'
import { Delete } from 'components/Icons/Delete/Delete'

const AsideContainer = () => {
  const { response, error, loading } = useAxios({
    url: '/lists?_expand=color&_embed=tasks',
    method: 'GET',
  })

  const data = useMemo(() => {
    if(Array.isArray(response)) {
      return response.map((list: IList) => {
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
           <Delete />
         </AsideRow>
       )
      })
    }

  }, [response])

  return (
    <AsideContain>
      { loading ?
        <Loader
          size={50}
          title='loading'
          color={''}
          className={' visibility'}
        />
        : (
          <AsideRowWrapper>
            {
              error && (
                <Notification
                  className={'notification__error'}
                  icon={<div></div>}
                  position={'bottom-right'}
                  title={'Error'}
                  type={'error'}
                  children={'data was errors'}
                />
              )
            }
            { data }
          </AsideRowWrapper>
        )
      }
    </AsideContain>
  )
}

export default AsideContainer