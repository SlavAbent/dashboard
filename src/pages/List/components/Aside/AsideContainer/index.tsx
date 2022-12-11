import React, { useMemo } from 'react'
import { useAxios } from 'hooks/useAxios'
import { uniqueId } from 'lodash'
import { Loader } from 'components/uikit/Loader'
import { Badge } from 'components/uikit/Badge/Badge'
import { Notification } from '../../../../../components/uikit/Notification/Notification'

export interface IList {
  id: number
  name: string,
  colorId: number
}

const AsideContainer = () => {
  const { response, error, loading } = useAxios({
    url: '/lists',
    method: 'GET',
  })

  const data = useMemo(() => {
    if(Array.isArray(response)) {
      return response.map((list: IList) => {
       return (
         <div key={uniqueId('list')}>
           <Badge size={4} />
           <div>{list?.name}</div>
         </div>
       )
      })
    }

  }, [response])

  return (
    <>
      { loading ?
        <Loader
          size={50}
          title='loading'
          color={''}
          className={' visibility'}
        />
        : (
          <div>
            <Notification
              className={''}
              icon={<div></div>}
              position={'bottom-right'}
              title={'some title'}
              type={'default'}
              children={'some text'}
              timeout={1000}
            />
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
          </div>
        )
      }
    </>
  )
}

export default AsideContainer