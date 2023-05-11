import React, { FC, ReactNode, useEffect } from 'react'
import {
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalIconClose,
  ModalBody,
  ModalBodyContent,
  ModalFooter,
  ModalFooterClose,
  ModalWrapper,
} from './styles/Modal.styled'
import { Portal } from '../Portal'

interface IModalProps {
  title?: string
  header?: boolean
  footer?: boolean
  customMode?: boolean
  customHeader?: ReactNode
  customFooter?: ReactNode
  content?: string | ReactNode
  children?: string | ReactNode
  iconClose?: ReactNode
  isOpen?: boolean
  handleClose?: any
}

export const Modal:FC<IModalProps> = (props) => {
  const {
    title,
    header,
    footer,
    customMode,
    customHeader,
    customFooter,
    iconClose,
    content,
    children,
    isOpen,
    handleClose,
  } = props

  useEffect(() => {
    const closeOnEscapeKey = e => e.key === 'Escape' ? handleClose() : null
    document.body.addEventListener('keydown', closeOnEscapeKey)

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [handleClose])

  if (!isOpen) return null

  return (
    <Portal portalId="react-portal-modal-container">
      <ModalContainer>
        <ModalWrapper >
          <ModalIconClose onClick={handleClose}>{iconClose}</ModalIconClose>
          { header && !customMode ? (
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>

            </ModalHeader>
          ): null}
          {customMode ?? (customHeader && <></>)}
          <ModalBody>
            <ModalBodyContent>
              {content}
            </ModalBodyContent>
            {children}
          </ModalBody>
          { footer && !customMode  && (
            <ModalFooter>
              <ModalFooterClose onClick={handleClose}>
                {iconClose}
              </ModalFooterClose>
            </ModalFooter>
          )}
          {customMode ?? (customFooter && <></>)}
        </ModalWrapper>
      </ModalContainer>
    </Portal>
  )
}