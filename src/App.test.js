import { render, screen } from "@testing-library/react";
import App from "./App";
test("renders Event Booking header", () => {
  render(<App />);
  const titleElement = screen.getByText(/Event Booking/i);
  expect(titleElement).toBeInTheDocument();
});
