import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SessionProvider } from "next-auth/react";
import * as React from "react";

import Layout from "@/components/Layout";

import { LayoutOptions } from "../config";

export default {
  title: "Components/Layout",
  component: Layout,
  argTypes: {},
} as ComponentMeta<typeof Layout>;

const Authenticated: ComponentStory<typeof Layout> = () => (
  <SessionProvider session={{ user: { email: "email" }, expires: "1" }}>
    <Layout>
      <div>sample</div>
    </Layout>
  </SessionProvider>
);

const NotAuthenticated: ComponentStory<typeof Layout> = () => (
  <SessionProvider session={null}>
    <Layout mode={LayoutOptions.NotAuthenticated}>
      <div>sample</div>
    </Layout>
  </SessionProvider>
);

export const LayoutAuthenticated = Authenticated.bind({});
LayoutAuthenticated.args = {};

export const LayoutUnauthenticated = NotAuthenticated.bind({});
LayoutUnauthenticated.args = {};
