import React, { FC, useContext, useMemo } from 'react'
import { IList } from '../../../../model/index.model'
import classNames from 'classnames'
import { AsideNavLink, AsideRow, AsideRowText } from './AsideContainer.styles'
import { uniqueId } from 'lodash'
import { Badge } from '../../../../../../stories/UI/Components/Badge'
import { Delete } from '../../../../../../components/Icons/Delete'
import { ListContext } from '../../../../../../context/providers/listProvider'

interface AsideCreateProps {
  data?: IList[]
  handleAsideDeleteItem?: (list: IList) => void
}

export const AsideRowCreate:FC<AsideCreateProps> = (props) => {
  const { handleAsideDeleteItem} = props
  const { response } = useContext(ListContext)

  const dataAside = useMemo(() => {
    if(Array.isArray(response)) {
      return response && response.map((list: IList) => {
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
  }, [response, handleAsideDeleteItem])

  return <> {dataAside} </>
}
