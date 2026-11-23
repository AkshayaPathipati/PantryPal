import { render, screen, fireEvent } from "@testing-library/react";
import Upload from "./Upload";

function setup() {
    window.alert = jest.fn();
    global.fetch = jest.fn(() => new Promise(() => {}));
    const utils = render(<Upload onRecipeSubmitted={() => {}} />);
    const input = screen.getByPlaceholderText("Enter Ingredient...");
    const addButton = screen.getByRole("button", { name: "Add" });
    return { ...utils, input, addButton };
}

test("Edge 1 (empty input): blank ingredient is not added", () => {
    const { input, addButton } = setup();
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(addButton);
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
});

test("Edge 2 (empty input): spaces-only ingredient is not added", () => {
    const { input, addButton } = setup();
    fireEvent.change(input, { target: { value: "    " } });
    fireEvent.click(addButton);
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
});

test("Edge 3 (missing value): submitting with zero ingredients is blocked", () => {
    const { container } = setup();
    fireEvent.submit(container.querySelector("form"));
    expect(window.alert).toHaveBeenCalledWith("Please add at least one ingredient.");
    expect(global.fetch).not.toHaveBeenCalled();
});

test("Edge 4 (boundary): deleting the only ingredient leaves an empty list", () => {
    const { input, addButton } = setup();
    fireEvent.change(input, { target: { value: "pasta" } });
    fireEvent.click(addButton);
    fireEvent.click(screen.getByRole("button", { name: "Delete" }));
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
});

test("Edge 5 (boundary): same ingredient with different capitalization is blocked", () => {
    const { input, addButton } = setup();
    fireEvent.change(input, { target: { value: "pasta" } });
    fireEvent.click(addButton);
    fireEvent.change(input, { target: { value: "PASTA" } });
    fireEvent.click(addButton);
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
});
