import React, { FC, useMemo } from 'react'
import { uniqueId } from 'lodash'
import { Loader } from 'components/uikit/Loader'
import { Badge } from 'components/uikit/Badge/Badge'
import { Notification } from 'components/uikit/Notification/Notification'
import classNames from 'classnames'
import { AsideRow, AsideRowText, AsideRowWrapper, AsideContain } from './index.styles'
import { IAsideProps, IList } from '../../utility/types/index.model'
import { Delete } from 'components/Icons/Delete/Delete'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'


const AsideContainer: FC<IAsideProps> = ( props) => {
  const { data, loading, error, handleAsideDeleteItem } = props
  const match = useLocation();
  console.log(match)
  const dataAside = useMemo(() => {
    if(Array.isArray(data)) {
      return data.map((list: IList) => {
        const { id, name } = list.color
        const className = classNames('badge', { [`badge--${name}`]: name}, 'default')
        return (
          <Link to={`Chapter/${id}`}>
             <AsideRow key={uniqueId('list_')}>
               <Badge
                 id={id}
                 className={className}
                 size={16}
                 color="custom--badge"
               />
               <AsideRowText>{list?.name}</AsideRowText>
               <div onClick={() => handleAsideDeleteItem && handleAsideDeleteItem(list)}>
                 <Delete
                   size={16}
                   color='#ffffff'
                 />
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