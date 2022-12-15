import { render, screen, cleanup } from "../test-utils"
import EmployeDetails from "../components/EmployeDetails";
import { BrowserRouter } from "react-router-dom";
import { fireEvent } from "@testing-library/react";

const employe = {
    "_id": "639986e1673c2e48c07f9e52",
    "user": "639715e9bedd2765f39b6bd3",
    "name": "imed",
    "lastname": "sbeai",
    "grade": "senior",
    "age": 23,
    "departement": "RH Department",
    "profession": "recruter",
    "payment": false,
    "updatedAt": "2022-12-14T12:30:36.872Z",
    "createdAt": "2022-12-14T08:18:41.175Z",
    "__v": 0
}


beforeEach(() => {

    render(<BrowserRouter><EmployeDetails employe={employe} /></BrowserRouter>)
});
afterEach(() => {
    cleanup()
})

//test block

// render test
test("check for Employe details", () => {

    //select the elements you want to interact with
    const employeDetails = screen.getByTestId("employe-details");

    //assert the expected result
    expect(employeDetails)
});

// payment
test("pay", () => {
    //select the elements you want to interact with
    const paymentButton = screen.getByTestId("pay-button");
    const paymentmessage = screen.getByTestId("payment");

    //assert the expected result
    expect(paymentButton)
    fireEvent.click(paymentButton)
    expect(paymentmessage).toHaveTextContent('Still waiting for payment ...')
});

//already test
test("Check for payment", () => {
    //select the elements you want to interact with
    const paymentButton = screen.getByTestId("pay-button");
    //assert the expected result
    expect(paymentButton)
});