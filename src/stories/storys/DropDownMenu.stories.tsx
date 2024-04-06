import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { DropDownMenu } from "../UI/Components/DropDownMenu";

export default {
	title: "Components/DropDownMenu",
	component: DropDownMenu,
	argTypes: {
		direction: {
			options: ["topToLeft", "topToRight", "bottomToLeft", "bottomToRight"],
			control: { type: "radio" },
		},
	},
} as ComponentMeta<typeof DropDownMenu>;

const Template: ComponentStory<typeof DropDownMenu> = (arg) => <DropDownMenu {...arg}/>;

export const Default = Template.bind({});

Default.args = {
	activeDropDown: false,
	width: 0,
	direction: "bottomToRight",
	header: "header content",
	footer: "footer content",
	isHeader: false,
	isFooter: false,
};
