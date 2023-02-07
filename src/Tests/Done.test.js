import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Done } from "../Common/Todo/components/Done";
import { task } from "./TestUtils/TestUtils";

describe("Test done component", ()=>{
    it("Render correctly", ()=>{
        const component = renderer.create(
            <Done done={task} title="Done title" />
        )
        const tree = component.toJSON();
        
        expect(tree).toMatchSnapshot();
        expect(task).toMatchSnapshot([{
            id: expect.any(Number),
            title: "Test title"
        }]);
        expect("Done title").toMatchSnapshot();
    })

    it("Read component props ok", ()=>{
        const { getByTestId } = render(
            <Done done={task} title="Done title" />
        )

        expect(getByTestId("title").textContent).toBe("Done title");
        expect(getByTestId("element-title").textContent).toBe("Test title");
    })
})