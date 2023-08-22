import React, { FC, useContext } from 'react'
import { Loader } from 'stories/UI/Components/Loader'
import { AsideRowWrapper, AsideContain } from './AsideContainer.styles'
import { IAsideProps } from '../../../../model/index.model'
import 'react-toastify/dist/ReactToastify.css';
import { Notification } from '../../../../../../components/uikit/Notification/Notification'
import { ThemeContext } from '../../../../../../context/themeContext'
import { AsideRowCreate } from './AsideRowCreate'

export const AsideContainer: FC<IAsideProps> = ( props) => {
  const { toggleTheme } = useContext(ThemeContext)
  const { loading, error, handleAsideDeleteItem } = props;


  // TODO refactoring to notification fabric
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
          <AsideRowCreate
            handleAsideDeleteItem={handleAsideDeleteItem}
          />
        </AsideRowWrapper>
      )}
    </AsideContain>
  )
}
