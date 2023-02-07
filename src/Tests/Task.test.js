import { fireEvent, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Task } from "../Common/Todo/components/Task"
import { doneTask, task } from "./TestUtils/TestUtils";

describe("Test task component", ()=>{
    it("Render correctly", ()=>{
        const component = renderer.create(
            <Task data={task} title="Task title" />
        )
        const tree = component.toJSON();
        
        expect(tree).toMatchSnapshot();
        expect(task).toMatchSnapshot([{
            id: expect.any(Number),
            title: "Test title"
        }]);
        expect("Task title").toMatchSnapshot();
    })

    it("Read component props ok", ()=>{
        const { getByTestId } = render(
            <Task data={task} title="Task title" doneTask={doneTask} />
        )

        fireEvent.click(getByTestId("to-check"));

        expect(doneTask).toHaveBeenCalled();
        expect(getByTestId("title").textContent).toBe("Task title");
        expect(getByTestId("element-title").textContent).toBe("Test title");
    })
})