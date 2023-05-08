import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar } from './UI/Avatar';
import React from 'react';


export default {
  title: 'Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (arg) => <Avatar {...arg}/>

export const Default = Template.bind({})

Default.args = {
  title: 'Avatar',
  size: 42,
  status: 'success'
}
