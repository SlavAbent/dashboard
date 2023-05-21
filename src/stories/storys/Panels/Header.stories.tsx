import { ComponentMeta, ComponentStory } from '@storybook/react';

import Header from '../../UI/Panels/Header'
import React from 'react';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    color: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (arg) => <Header {...arg}/>

export const Default = Template.bind({})

// TODO add redux toolkit in stories and refactor Header Component

Default.args = {
  color: 'light',
  title: false,
  date: false,
  logo: false,
  search: false,
  avatar: false,
  content: false,
}
