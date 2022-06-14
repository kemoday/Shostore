import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("if the header dispaying the prop", () => {
  render(<Header title={"hello"} />);
  const headingElem = screen.getByText(/hello/i);
  expect(headingElem).toBeInTheDocument();
});
