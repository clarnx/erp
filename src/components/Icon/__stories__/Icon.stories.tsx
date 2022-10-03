import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import Icon from "@/components/Icon";

export default {
  title: "Contents/Icon",
  component: Icon,
  argTypes: {},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = () => (
  <Icon src="/svg/Chevron.svg" height={24} width={24} />
);

export const Default = Template.bind({});
Default.args = {};
