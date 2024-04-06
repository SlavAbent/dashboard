import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Time } from "../UI/Components/Time";

export default {
	title: "Components/Time",
	component: Time,
} as ComponentMeta<typeof Time>;

const Template: ComponentStory<typeof Time> = (arg) => <Time {...arg}/>;

export const Default = Template.bind({});

Default.args = {
	showIcon: true,
	showTime: true,
};
