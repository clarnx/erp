import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import Sidebar from "@/components/Sidebar/Sidebar";

export default {
  title: "Components/Sidebar/Sidebar",
  component: Sidebar,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Default = Template.bind({});
Default.args = {};
