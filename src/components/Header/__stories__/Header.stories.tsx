import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import Header from "@/components/Header/Header";

export default {
  title: "Components/Layout/Header",
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
