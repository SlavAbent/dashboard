import React, { useMemo } from 'react'
import { DropDownMenu } from 'components/uikit/DropDownMenu'
import { useAxios } from '../../../../../hooks/useAxios'
import { IList } from '../AsideContainer/index.model'

const AsideAddList = () => {
  const { response, error, loading } = useAxios({
    url: '/lists?_expand=color&_embed=tasks',
    method: 'GET',
  })

  const AsideDropDownContent = useMemo(() => {
    return response.map((item: IList, index: number) => {
      console.log('item', item)
      return <div key={index}>
        <>{item.color.id}</>
      </div>
    })
  }, [response])

  return (
    <div>
      <DropDownMenu
        children={AsideDropDownContent}
      />
    </div>
  )
}

export default AsideAddList