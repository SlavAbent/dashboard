import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from '../UI/Components/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (arg) => <Button {...arg}/>

export const Default = Template.bind({})

Default.args = {
  isDisabled: false,
  type: 'button',
  children: 'Button',
  className: '',
}
