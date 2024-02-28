import React, { FC } from 'react'
import { Loader } from 'stories/UI/Components/Loader'
import { AsideRowWrapper } from './AsideContainer.styles'
import { IAsideProps } from '../../../../model/index.model'
import 'react-toastify/dist/ReactToastify.css';
import { Notification } from '../../../../../../components/uikit/Notification/Notification'
import { AsideRowCreate } from './AsideRowCreate'

export const AsideContainer: FC<IAsideProps> = ( props) => {
  const { loading, error, handleAsideDeleteItem, themeColor } = props;


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
        theme={themeColor}
      />
    )
  }

  return (
    <>
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
            themeColor={themeColor}
            handleAsideDeleteItem={handleAsideDeleteItem}
          />
        </AsideRowWrapper>
      )}
    </>
  )
}
