import { ComponentMeta } from "@storybook/react";
import * as React from "react";

import Colors from "@/components/Colors";

export default {
  title: "Components/Colors",
  component: Colors,
  argTypes: {},
} as ComponentMeta<typeof Colors>;

const Template = () => <Colors />;

export const Default = Template.bind({});
