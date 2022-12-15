import { render, fireEvent, screen } from "@testing-library/react";
import Avatar from "../components/Avatar";

//test block
//render test
test("check for avatar", () => {
    // render the component on virtual dom
    render(<Avatar name="Baha" lastname="Hzami" />);

    //select the elements you want to interact with
    const avatar = screen.getByTestId("avatar");

    //assert the expected result
    expect(avatar)
});
//sucsess test
test("Create avatar", () => {
    // render the component on virtual dom
    render(<Avatar name="Baha" lastname="Hzami" />);

    //select the elements you want to interact with
    const avatar = screen.getByTestId("avatar");

    //assert the expected result
    expect(avatar).toHaveTextContent('BH')
});
//failure test
test("No valid data", () => {
    // render the component on virtual dom
    render(<Avatar name="" lastname="" />);

    //select the elements you want to interact with
    const avatar = screen.getByTestId("avatar");

    //assert the expected result
    expect(avatar).toHaveTextContent('')
});