import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import Table from "@/components/Table";
import Typography from "@/components/Typography";

import { Variations } from "../config";
import type { TableData } from "../types";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {},
} as ComponentMeta<typeof Table>;

const Actions = (
  <div className="flex justify-center">
    <div>
      <Typography
        size="text-sm"
        variant="span"
        color="text-blackOut"
        className="cursor-pointer font-medium uppercase"
      >
        view
      </Typography>
    </div>

    <div className="mx-4 h-5 border-x-[0.031rem]" />

    <div>
      <Typography
        size="text-sm"
        variant="span"
        color="text-blackOut"
        className="cursor-pointer font-medium uppercase"
      >
        remove
      </Typography>
    </div>

    <div className="mx-4 h-5 border-x-[0.031rem]" />

    <div>
      <Typography
        size="text-sm"
        variant="span"
        color="text-blackOut"
        className="cursor-pointer font-medium uppercase"
      >
        edit
      </Typography>
    </div>
  </div>
);

const variationOneData: TableData = {
  header: [
    { value: "ship to" },
    { value: "name" },
    { value: "email address" },
    { value: "action" },
  ],
  body: [
    {
      items: [
        { value: "****" },
        { value: "lisa ann swan" },
        { value: "info@sherly.net" },
        { value: Actions },
      ],
    },
    {
      items: [
        { value: "b" },
        { value: "shrely lynn walker" },
        { value: "info@sherly.net" },
        { value: Actions },
      ],
    },
  ],
};

const variationTwoData: TableData = {
  header: [
    { value: "season" },
    { value: "gross" },
    { value: "returned" },
    { value: "net rate (%)" },
    { value: "net" },
    { value: "nbr of buyer" },
    { value: "grs unit/buyer" },
    { value: "waitlist" },
    { value: "forgive net" },
  ],
  body: [
    {
      items: [
        { value: "fall" },
        { value: "1" },
        { value: "0" },
        { value: ".0" },
        { value: "1" },
        { value: "1" },
        { value: "1.0" },
        { value: "0" },
        { value: "0" },
      ],
    },
    {
      items: [
        { value: "fall" },
        { value: "1" },
        { value: "0" },
        { value: ".0" },
        { value: "1" },
        { value: "1" },
        { value: "1.0" },
        { value: "0" },
        { value: "0" },
      ],
    },
  ],
};

const TableVariationOne: ComponentStory<typeof Table> = () => (
  <div className="flex min-h-full flex-col items-center justify-center">
    <Table data={variationOneData} />
  </div>
);

const TableVariationTwo: ComponentStory<typeof Table> = () => (
  <div className="flex min-h-full flex-col items-center justify-center">
    <Table variation={Variations.Secondary} data={variationTwoData} />
  </div>
);

export const VariationOne = TableVariationOne.bind({});
VariationOne.args = {};

export const VariationTwo = TableVariationTwo.bind({});
VariationTwo.args = {};
