import React, { FC, JSX, ReactNode, useEffect } from 'react'
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
  content?: string | ReactNode | JSX.Element
  children?: string | ReactNode | JSX.Element
  iconClose?: ReactNode
  isIconClose?: boolean
  isOpen?: boolean
  isClose?: boolean
  handleClose?: (boolean) => void
  onClose?: (boolean) => void
  theme?: string
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
    isIconClose,
    content,
    children,
    isOpen,
    handleClose,
    theme
  } = props


  useEffect(() => {
    //@ts-ignore
    const closeOnEscapeKey = (e: { key: string }) => e.key === 'Escape' ? handleClose() : null
    document.body.addEventListener('keydown', closeOnEscapeKey)

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [handleClose])

  if (!isOpen) return null

  return (
    <Portal portalId="react-portal-modal-container">
      <ModalContainer>
        <ModalWrapper color={theme}>
          {isIconClose && <ModalIconClose onClick={handleClose}>
            {iconClose}
          </ModalIconClose>}
          { header && !customMode && (
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
            </ModalHeader>
          )}
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
