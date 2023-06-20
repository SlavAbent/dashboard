import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextInput } from '../../UI/Inputs/TextInput'

export default {
  title: 'Inputs/TextInput',
  component:TextInput,
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = (arg) => <TextInput {...arg}/>

export const Default = Template.bind({})

Default.args = {
  type: 'text',
  placeholder: 'some placeholder',
  error: false,
  disabled: false,
  required: true,
}
