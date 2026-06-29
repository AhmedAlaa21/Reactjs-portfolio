import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio header", () => {
  render(<App />);
  const nameElement = screen.getByText(/Ahmed Mohamed Alaa/i);
  expect(nameElement).toBeInTheDocument();
});
