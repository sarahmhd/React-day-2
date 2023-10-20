import { fireEvent, render, screen } from "@testing-library/react";

import Counter from "./Counter";

test("should render the default counter value 10", () => {
  // render component
  // select element
  // events
  // expect results

  render(<Counter />);
  const counter = screen.getByText("10");
  expect(counter).toBeInTheDocument();
});
