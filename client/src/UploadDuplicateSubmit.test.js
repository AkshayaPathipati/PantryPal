import { render, screen, fireEvent } from "@testing-library/react";
import Upload from "./Upload";

test("#124: submitting twice quickly only sends one request", () => {
    window.alert = jest.fn();
    // Fake server that never responds, so the first request stays "in progress"
    global.fetch = jest.fn(() => new Promise(() => {}));

    const { container } = render(<Upload onRecipeSubmitted={() => {}} />);

    fireEvent.change(screen.getByPlaceholderText("Enter Username..."), { target: { value: "Ubay" } });
    fireEvent.change(screen.getByPlaceholderText("Enter Recipe Name..."), { target: { value: "Alfredo Pasta" } });
    fireEvent.change(screen.getByPlaceholderText("Enter Ingredient..."), { target: { value: "pasta" } });
    fireEvent.click(screen.getByRole("button", { name: "Add" }));
    fireEvent.change(screen.getByPlaceholderText("Enter Instructions..."), { target: { value: "Boil pasta" } });

    const form = container.querySelector("form");
    fireEvent.submit(form);
    fireEvent.submit(form);

    expect(global.fetch).toHaveBeenCalledTimes(1);
});
