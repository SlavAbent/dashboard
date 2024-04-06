import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Avatar } from "../UI/Components/Avatar";
import React from "react";

export default {
	title: "Components/Avatar",
	component:Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (arg) => <Avatar {...arg}/>;

export const Default = Template.bind({});

Default.args = {
	title: "Avatar",
	size: 42,
	status: "success"
};
