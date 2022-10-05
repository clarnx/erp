import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import CardInfo from "@/components/CardInfo";

export default {
  title: "Components/CardInfo",
  component: CardInfo,
  argTypes: {},
} as ComponentMeta<typeof CardInfo>;

const CardInfoDefault: ComponentStory<typeof CardInfo> = (args) => (
  <div className="flex">
    <CardInfo
      {...args}
      header="Winter 22 Product Presentation Line-up"
      date="September, 21 2022"
    />
  </div>
);

const CardInfoPromo: ComponentStory<typeof CardInfo> = (args) => (
  <div className="flex">
    <CardInfo
      {...args}
      header="Winter 22 Product Presentation Line-up"
      promo="new"
      date="September, 21 2022"
    />
  </div>
);

export const Default = CardInfoDefault.bind({});
Default.args = {};

export const HasPromo = CardInfoPromo.bind({});
HasPromo.args = {};
