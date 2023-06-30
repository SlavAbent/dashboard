import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Badge } from '../UI/Components/Badge';
import React from 'react';


export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    color: {
      options: ['--black', '--grey', '--lime', '--purple', '--red', '--green', '--blue', '--pink', '--aside'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (arg) => <Badge {...arg}/>

export const Default = Template.bind({})

Default.args = {
  className: 'badge',
  size: 8,
  color: '--black'
}
