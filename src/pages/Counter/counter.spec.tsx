import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Counter from ".";

test("renders counter with initial count", () => {
  render(<Counter />);
  const countElement = screen.getByText(/count: 0/i);
  expect(countElement).toBeInTheDocument();
});

test("increments count when increment button is clicked", async () => {
  const user = userEvent.setup();
  render(<Counter />);
  const button = screen.getByText(/increment/i);
  await user.click(button);
  const countElement = screen.getByText(/count: 1/i);
  expect(countElement).toBeInTheDocument();
});

test("increments count twice when increment button is clicked twice", async () => {
  const user = userEvent.setup();
  render(<Counter />);
  const button = screen.getByText(/increment/i);
  await user.click(button);
  await user.click(button);
  const countElement = screen.getByText(/count: 2/i);
  expect(countElement).toBeInTheDocument();
});
