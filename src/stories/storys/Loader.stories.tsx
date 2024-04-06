import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Loader } from "../UI/Components/Loader";

export default {
	title: "Components/Loader",
	component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (arg) => <Loader {...arg}/>;

export const Default = Template.bind({});

Default.args = {
	size: 70,
	color: "#000000",
	title: "Loading...",
	loading: true,
};
