import { render, screen } from "@testing-library/react";

import Sidebar from "../Sidebar";

describe("Sidebar", () => {
  it("renders the Sidebar component", () => {
    render(<Sidebar />);

    const testId = screen.getByTestId("sidebar");

    expect(testId).toBeInTheDocument();
  });

  it("renders the Sidebar logo", () => {
    render(<Sidebar />);

    const logo = screen.getByAltText("Logo");

    expect(logo).toBeInTheDocument();
  });

  it("renders the Sidebar links", () => {
    render(<Sidebar />);

    const home = screen.getByText(/Home/i);
    const orders = screen.getByText(/Orders/i);
    const incentives = screen.getByText(/Incentives/i);
    const yourShow = screen.getByText(/Your Show/i);
    const collection = screen.getByText(/Collection/i);
    const university = screen.getByText(/Carlisle University/i);
    const section = screen.getByText(/Style Section/i);
    const policies = screen.getByText(/Policies/i);
    const weblinks = screen.getByText(/Weblinks/i);
    const outlet = screen.getByText(/Outlet/i);
    const contactUs = screen.getByText(/Contact Us/i);
    const logout = screen.getByText(/Logout/i);

    expect(home).toBeInTheDocument();
    expect(orders).toBeInTheDocument();
    expect(incentives).toBeInTheDocument();
    expect(yourShow).toBeInTheDocument();
    expect(collection).toBeInTheDocument();
    expect(university).toBeInTheDocument();
    expect(section).toBeInTheDocument();
    expect(policies).toBeInTheDocument();
    expect(weblinks).toBeInTheDocument();
    expect(outlet).toBeInTheDocument();
    expect(contactUs).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
  });
});
