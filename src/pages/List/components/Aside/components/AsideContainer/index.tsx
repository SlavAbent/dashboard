import React, { FC, useContext, useMemo } from 'react'
import { uniqueId } from 'lodash'
import { Loader } from 'stories/UI/Components/Loader'
import { Badge } from 'stories/UI/Components/Badge/Badge'
import classNames from 'classnames'
import { AsideRow, AsideRowText, AsideRowWrapper, AsideContain, AsideNavLink } from './index.styles'
import { IAsideProps, IList } from '../../../../model/index.model'
import { Delete } from 'components/Icons/Delete/Delete'
import 'react-toastify/dist/ReactToastify.css';
import { Notification } from '../../../../../../components/uikit/Notification/Notification'
import { ThemeContext } from '../../../../../../context/themeContext'

const AsideContainer: FC<IAsideProps> = ( props) => {
  const { toggleTheme } = useContext(ThemeContext)
  const { data, loading, error, handleAsideDeleteItem } = props;
  console.log(props)

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

  console.log(loading)

  if (error) {
    return (
      <Notification
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        progress
        theme={toggleTheme}
      />
    )
  }

  return (
    <AsideContain>
      { loading ? (
        <Loader
          size={50}
          title='loading'
          className='visibility'
          loading={loading}
        />
      ) : (
        <AsideRowWrapper>
          { dataAside }
        </AsideRowWrapper>
      )}
    </AsideContain>
  )
}

export default AsideContainer
