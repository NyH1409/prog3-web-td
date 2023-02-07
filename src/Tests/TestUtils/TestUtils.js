export let task = [
    {
        id: Math.random(),
        title: "Test title"
    }
]

export const doneTask = jest.fn();
export const handleChange = jest.fn();
export const handleClick = jest.fn();