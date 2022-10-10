import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import Icon from "@/components/Icon";
import Typography from "@/components/Typography";

import { storyIcons } from "../config";

export default {
  title: "Contents/Icon",
  component: Icon,
  argTypes: {},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = () => (
  <div className="flex min-h-screen flex-col rounded-md bg-nero p-4">
    <div className="grid grid-cols-8 gap-6">
      {storyIcons.map((icon, index) => (
        <div key={index} className="flex flex-col items-center gap-3">
          <Typography
            color="text-whisper"
            variant="h2"
            size="text-sm"
            className="font-medium"
          >
            {icon.label}
          </Typography>
          <Icon src={icon.name} height={icon.height} width={icon.width} />
        </div>
      ))}
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
