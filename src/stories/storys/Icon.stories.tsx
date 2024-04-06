import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Icon } from "../UI/Components/Icon";

export default {
	title: "Components/Icon",
	component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (arg) => <Icon {...arg}/>;

export const Default = Template.bind({});

Default.args = {
	className: "icon__default",
	type: "svg",
	color: "#000000",
	size: 42,
};
