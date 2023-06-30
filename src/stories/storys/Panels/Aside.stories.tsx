import { ComponentMeta, ComponentStory } from '@storybook/react';

import Aside from '../../UI/Panels/Aside'
import React from 'react';

export default {
  title: 'Aside',
  component: Aside,
  argTypes: {
    color: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Aside>

const Template: ComponentStory<typeof Aside> = (arg) => <Aside {...arg}/>

export const Default = Template.bind({})

Default.args = {}
