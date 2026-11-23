import { render, screen, fireEvent } from "@testing-library/react";
import Upload from "./Upload";

test("#147: the same ingredient cannot be added twice", () => {
    window.alert = jest.fn();
    render(<Upload onRecipeSubmitted={() => {}} />);

    const input = screen.getByPlaceholderText("Enter Ingredient...");
    const addButton = screen.getByRole("button", { name: "Add" });

    fireEvent.change(input, { target: { value: "pasta" } });
    fireEvent.click(addButton);
    fireEvent.change(input, { target: { value: "pasta" } });
    fireEvent.click(addButton);

    expect(screen.getAllByRole("listitem")).toHaveLength(1);
});
