import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import Button from "@/components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Click me</Button>
);

export const Default = Template.bind({});
Default.args = {};
