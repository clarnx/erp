import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import Popup from "@/components/Popup";

export default {
  title: "Components/Popup",
  component: Popup,
  argTypes: {},
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = () => (
  <Popup
    show
    type="warning"
    msg="Your text warning about this pop up will be placed in here"
    icon={{
      src: "/svg/PopupWarningIcon.svg",
    }}
  />
);

export const Default = Template.bind({});
Default.args = {};
