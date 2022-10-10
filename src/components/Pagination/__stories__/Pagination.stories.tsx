import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import Pagination from "@/components/Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {},
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <div className="flex">
    <Pagination {...args} count={3} rowsPerPage={[10, 20, 30]} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
