import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import Typography from "@/components/Typography";

export default {
  title: "Contents/Typography",
  component: Typography,
  argTypes: {},
} as ComponentMeta<typeof Typography>;

const TypographyDefault: ComponentStory<typeof Typography> = (args) => (
  <Typography preset="subheading" {...args}>
    Text is in here
  </Typography>
);

const TypographyCustom: ComponentStory<typeof Typography> = (args) => (
  <Typography
    color="text-improbable"
    variant="h4"
    size="text-base"
    className="font-bold"
    {...args}
  >
    Text is in here
  </Typography>
);

export const Default = TypographyDefault.bind({});
TypographyDefault.args = {};

export const Custom = TypographyCustom.bind({});
Custom.args = {};
