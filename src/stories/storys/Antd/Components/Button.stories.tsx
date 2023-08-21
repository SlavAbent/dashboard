import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ANTDButton } from '../../../UI/ANTD/Button';

export default {
  title: 'ANTD/Button',
  component: ANTDButton,
  argTypes: {
    size: {
      options: ['large', 'middle', 'small'],
      control: { type: 'radio' },
    },
    type: {
      options: ['primary', 'dashed', 'link', 'text', 'default'],
      control: { type: 'radio' },
    },
    shape: {
      options: ['default', 'circle', 'round'],
      control: { type: 'radio' }
    },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
    textTransform: {
      options: ['uppercase', 'lowercase', 'capitalize'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof ANTDButton>

const Template: ComponentStory<typeof ANTDButton> = (arg) => <ANTDButton {...arg}/>

export const Default = Template.bind({})

Default.args = {
  children: 'button',
  disable: false,
  danger: false,
  loading: false,
  ghost: false,
  defaultIcon: true,
  href: '',
  className: '',
}
