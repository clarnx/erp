import "@testing-library/jest-dom/extend-expect";

// Allow router mocks.
// eslint-disable-next-line no-undef
jest.mock("next/router", () => require("next-router-mock"));

// Allow router mocks.
// eslint-disable-next-line no-undef
jest.mock("next/image", () => ({
  __esModule: true,
  default: () => {
    return "Next image stub"; // whatever
  },
}));
