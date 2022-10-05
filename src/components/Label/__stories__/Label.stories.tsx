import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import Label from "@/components/Label";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {},
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
  <div className="flex">
    <Label {...args} text="Label" />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
