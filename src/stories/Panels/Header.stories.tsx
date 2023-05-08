import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Header } from '../../components/uikit/Panels/Header'
import React from 'react';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (arg) => <Header {...arg}/>

export const Default = Template.bind({})

Default.args = {
  logo: <div>logo</div>,
  title: 'some title',
  date: <div>date</div>,
  search: true,
  content: <div>content</div>,
  avatar: <div>avatar</div>,
  color: 'some color',
}
