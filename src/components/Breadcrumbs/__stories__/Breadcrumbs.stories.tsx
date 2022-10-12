import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import Breadcrumbs from "@/components/Breadcrumbs";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {},
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = () => (
  <Breadcrumbs
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
        text: " Get All Orders",
        isActive: false,
      },
      {
        id: 3,
        url: "/profile-emp",
        text: " Get History",
        isActive: true,
      },
    ]}
  />
);

export const Default = Template.bind({});
Default.args = {};
