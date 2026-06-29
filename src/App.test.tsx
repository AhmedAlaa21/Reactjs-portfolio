import { render } from "@testing-library/react";
import App from "./App";

test("renders portfolio header", () => {
  const { getByText } = render(<App />);
  expect(getByText(/Ahmed Mohamed Alaa/i)).toBeInTheDocument();
});
