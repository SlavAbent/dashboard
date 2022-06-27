import React from 'react';
import Avatar from 'pages/UI/uikit/Avatar';


export default {
    title: 'Avatar',
    component: Avatar,
}

const Template = (arg) => <Avatar {...arg}/>

export const Default = Template.bind({})

Default.args = {
    title: 'Name',
    className: 'some class',
    size: 42,
    image: 'some image',
}