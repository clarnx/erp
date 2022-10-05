import { render, screen } from "@testing-library/react";

import Input from "../Input";

describe("Input", () => {
  it("renders the Input component", () => {
    render(
      <Input
        label="Account Number"
        id="account-number"
        name="account-number"
        type="text"
        disabled={false}
        hasError={false}
        value="example"
        required
        onChange={() => undefined}
        className="relative block w-full border-transparent px-3 py-2 text-blackOut placeholder-shishaCoal focus:border-transparent focus:ring-0 sm:text-sm"
        placeholder="Account Number"
      />
    );

    const inputAccountNumberPlaceHolder =
      screen.getByPlaceholderText("Account Number");
    const inputAccountNumberValue = screen.getByDisplayValue("example");

    expect(inputAccountNumberPlaceHolder).toBeInTheDocument();
    expect(inputAccountNumberValue).toBeInTheDocument();
    expect(inputAccountNumberValue).toBeRequired();
  });
});
