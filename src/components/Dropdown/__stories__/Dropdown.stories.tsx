import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import Dropdown from "@/components/Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {},
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = () => (
  <Dropdown
    isScrolled
    label=""
    options={[
      {
        id: "1",
        label: "opt 1",
      },
      {
        id: "2",
        label: "opt 2",
      },
      {
        id: "3",
        label: "opt 3",
      },
      {
        id: "4",
        label: "opt 4",
      },
      {
        id: "5",
        label: "opt 5",
      },
      {
        id: "6",
        label: "opt 6",
      },
      {
        id: "1",
        label: "opt 1",
      },
      {
        id: "2",
        label: "opt 2",
      },
      {
        id: "3",
        label: "opt 3",
      },
      {
        id: "4",
        label: "opt 4",
      },
      {
        id: "5",
        label: "opt 5",
      },
      {
        id: "6",
        label: "opt 6",
      },
    ]}
  />
);

export const Default = Template.bind({});
Default.args = {};
