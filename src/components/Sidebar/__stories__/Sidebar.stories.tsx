import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import Sidebar from "@/components/Sidebar";

export default {
  title: "Components/Sidebar/Sidebar",
  component: Sidebar,
  argTypes: {},
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Default = Template.bind({});
Default.args = {};
