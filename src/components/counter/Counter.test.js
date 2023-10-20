import { fireEvent, render, screen } from "@testing-library/react";

import Counter from "./Counter";

test("should render counter value 1", () => {
  render(<Counter />);
  const counterVal = screen.getByText("0");
  expect(counterVal).toBeInTheDocument();
});

test("should render increment button", () => {
  render(<Counter />);
  const counterVal = screen.getByText("0");
  expect(counterVal).toHaveTextContent("0");

  const increaseBtn = screen.getByRole("button", { name: "+" });
  expect(increaseBtn).toBeInTheDocument();

  fireEvent.click(increaseBtn);
  expect(counterVal).toHaveTextContent("1");
});

test("should render decrement button", () => {
  render(<Counter />);
  const counterVal = screen.getByText("0");
  expect(counterVal).toHaveTextContent("0");

  const decreaseBtn = screen.getByRole("button", { name: "-" });
  expect(decreaseBtn).toBeInTheDocument();

  fireEvent.click(decreaseBtn);
  expect(counterVal).toHaveTextContent("0");
});
