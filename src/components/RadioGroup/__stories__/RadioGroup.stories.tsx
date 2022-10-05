import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import RadioGroup from "@/components/RadioGroup";

import type { Option } from "../types";

export default {
  title: "Forms/RadioGroup",
  component: RadioGroup,
  argTypes: {},
} as ComponentMeta<typeof RadioGroup>;

const options: Option[] = [
  {
    id: "1",
    label: "test one",
  },
  {
    id: "2",
    label: "test two",
  },
];

const RadioGroupDefault: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args} options={options} />
);

const RadioGroupHorizontal: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args} options={options} orientation="horizontal" />
);

export const Default = RadioGroupDefault.bind({});
Default.args = {};

export const Horizontal = RadioGroupHorizontal.bind({});
Horizontal.args = {};
