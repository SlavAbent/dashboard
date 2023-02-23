import React, { FC } from 'react'
import { MainPaneColumn, MainPanelWrapper, MainPanelWrap, MainPanelText } from './styles/MainPanel.styled'
import { MainPanelProps } from './model/MainPanel.model'
import { useDrop } from 'react-dnd'

export const MainPanel:FC<Readonly<MainPanelProps>> = (
  {
    header,
    content,
    footer,
    className,
    children,
    title,
    color
  }
) => {
  //TODO  refactor useDrop -> вырезать нахер отсюда и вынести в контекст
  const [, drop] = useDrop({
    accept: 'kanban panel',
    drop: () => ({ name: title }),
  });
  return (
    <MainPanelWrapper
      ref={drop}
      className={className}
      color={color}
    >
      <MainPaneColumn>
        <MainPanelWrap>{header}</MainPanelWrap>
        <MainPanelWrap>{content}</MainPanelWrap>
        <MainPanelWrap>{footer}</MainPanelWrap>
        <MainPanelText>{title}</MainPanelText>
        {children}
      </MainPaneColumn>
    </MainPanelWrapper>
  )
}

