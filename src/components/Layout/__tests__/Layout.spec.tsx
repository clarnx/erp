import { render, screen } from "@testing-library/react";

import Layout from "../Layout";

describe("Layout", () => {
  it("renders the Layout component", () => {
    render(
      <Layout>
        <div>sample</div>
      </Layout>
    );

    const testId = screen.getByTestId("layout");

    expect(testId).toBeInTheDocument();
  });

  it("renders the Header component", () => {
    render(
      <Layout>
        <div>sample</div>
      </Layout>
    );

    const testId = screen.getByTestId("header");

    expect(testId).toBeInTheDocument();
  });

  it("renders the Sidebar component", () => {
    render(
      <Layout>
        <div>sample</div>
      </Layout>
    );

    const testId = screen.getByTestId("sidebar");

    expect(testId).toBeInTheDocument();
  });

  it("renders the Content component", () => {
    render(
      <Layout>
        <div>sample</div>
      </Layout>
    );

    const testId = screen.getByTestId("content");

    expect(testId).toBeInTheDocument();
  });
});
