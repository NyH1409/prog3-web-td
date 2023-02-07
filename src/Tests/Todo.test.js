import { fireEvent, render } from "@testing-library/react";
import  renderer  from "react-test-renderer";
import { TodoList } from "../Common/Todo/Todo";

describe("Test todo component", ()=>{
    it("Render correctly", ()=>{
        const component = renderer.create(
            <TodoList />
        )
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    })

    it("Create task ok", ()=>{
        const { getByTestId } = render(
            <TodoList />
        )
        const inputField = getByTestId("input-field").getElementsByTagName("input")[0];

        expect(inputField).toBeTruthy();
        expect(inputField.getAttribute("placeholder")).toEqual("Write the task decription here... ");
    })
})