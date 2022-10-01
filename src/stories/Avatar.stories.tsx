import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar } from '../components/uikit/Avatar/Avatar';
import React from 'react';

export default {
    title: 'Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (arg) => <Avatar {...arg}/>

export const Default = Template.bind({})

Default.args = {
    title: 'Name',
    className: 'some class',
    size: 42,
    image: 'some image',
}