import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import Tabs from "@/components/Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = () => (
  <Tabs
    items={[
      {
        id: 1,
        url: "/",
        text: " Main",
        isActive: false,
      },
      {
        id: 2,
        url: "/profile",
        text: " Get All Orders for Partner/Assoc",
        isActive: false,
      },
      {
        id: 3,
        url: "/profile-emp",
        text: " Get History for Partner/Assoc",
        isActive: true,
      },
    ]}
  />
);

export const Default = Template.bind({});
Default.args = {};
