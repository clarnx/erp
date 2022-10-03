import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import Layout from "@/components/Layout";

export default {
  title: "Components/Layout",
  component: Layout,
  argTypes: {},
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args}>
    <div>sample</div>
  </Layout>
);

export const Default = Template.bind({});
Default.args = {};
