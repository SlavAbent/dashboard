import { createPortal } from 'react-dom'
import { useLayoutEffect, useState } from 'react'

export const Portal = ({ children, portalId = 'react-portal-wrapper' }) => {
  const [wrapElement, setWrapElement] = useState<any>(null)

  useLayoutEffect(() => {
    let element = document.getElementById(portalId) as HTMLElement
    let autoCreated = false

    if (!element) {
      autoCreated = true
      element = createWrapperPortal(portalId)
    }
    setWrapElement(element)

    return () => {
      if (autoCreated && element.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [portalId])

  if (wrapElement === null) return null

  return createPortal(children, wrapElement)
}

function createWrapperPortal() {
  const wrapperElement = document.createElement('div')
  document.body.appendChild(wrapperElement)
  return wrapperElement
}
