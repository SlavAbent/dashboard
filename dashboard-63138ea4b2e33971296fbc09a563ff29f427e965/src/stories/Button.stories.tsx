import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../components/uikit/Button';
import React from 'react';

export default {
    title: 'Button',
    component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (arg) => <Button {...arg}/>

export const Default = Template