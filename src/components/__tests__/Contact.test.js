import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Contact us Test Cases", () => {

  // beforeAll(()=>{
  //   console.log("Before All")
  // })

  
  // beforeEach(()=>{
  //   console.log("Before Each")
  // })

  it("Should load contact us component", () => {
    render(<ContactUs />);
    //Quering
    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact Us component", () => {
    render(<ContactUs />);
    //Quering
    const button = screen.getByRole("button");
    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside Contact Us component", () => {
    render(<ContactUs />);
    //Quering
    const inputName = screen.getByPlaceholderText("name");
    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should load input components inside Contact Us component", () => {
    render(<ContactUs />);
    //Quering
    const inputs = screen.getAllByRole("textbox");
    // Assertion
    expect(inputs.length).toBe(2);
  });
});
