import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);
  const fNameInput = screen.getByLabelText(/First Name/i);
  const lNameInput = screen.getByLabelText(/Last Name/i);
  const addressInput = screen.getByLabelText(/Address/i);
  const cityInput = screen.getByLabelText(/City/i);
  const stateInput = screen.getByLabelText(/State/i);
  const zipInput = screen.getByLabelText(/Zip/i);

  userEvent.type(fNameInput, "Alex");
  userEvent.type(lNameInput, "Pfeifer");
  userEvent.type(addressInput, "123 street");
  userEvent.type(cityInput, "victoria");
  userEvent.type(stateInput, "bc");
  userEvent.type(zipInput, "12345");

  const button = screen.getByRole("button");
  userEvent.click(button);

  const newFNameInput = await screen.findByText(/alex/i);
  const newLNameInput = await screen.findByText(/Pfeifer/i);
  const newAddressInput = await screen.findByText(/123 street/i);
  const newCityInput = await screen.findByText(/victoria/i);
  const newStateInput = await screen.findByText(/bc/i);
  const newZipInput = await screen.findByText(/12345/i);

  expect(newFNameInput).toBeInTheDocument();
  expect(newLNameInput).toBeInTheDocument();
  expect(newAddressInput).toBeInTheDocument();
  expect(newCityInput).toBeInTheDocument();
  expect(newStateInput).toBeInTheDocument();
  expect(newZipInput).toBeInTheDocument();

  const success = await screen.findByTestId("successMessage");
  expect(success).toBeInTheDocument();
});
