import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import Input from "@/components/Input";

export default {
  title: "Forms/Input",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = () => (
  <Input
    label="Account Number"
    id="account-number"
    name="account-number"
    type="text"
    disabled={false}
    hasError={false}
    value="example"
    required
    onChange={() => undefined}
    className="relative block w-full rounded-[0.938rem] border-transparent px-3 py-2 text-blackOut placeholder-shishaCoal focus:border-transparent focus:ring-0 sm:text-sm"
    placeholder="Account Number"
  />
);

export const Default = Template.bind({});
Default.args = {};
