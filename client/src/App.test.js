import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ recipes: [] }),
        })
    );
});

afterEach(() => {
    jest.restoreAllMocks();
});

test("renders the PantryPal heading", async () => {
    render(<App />);

    expect(
        screen.getByRole("heading", { name: "PantryPal" })
    ).toBeTruthy();

    await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });
});

test("sends a delete request when deletion is confirmed", async () => {
    const recipe = {
        _id: "recipe-123",
        recipeName: "Limeade",
        username: "Rory",
        ingredients: ["lime"],
        instructions: "Mix with water",
    };

    window.confirm = jest.fn(() => true);

    global.fetch = jest.fn()
        .mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve({ recipes: [recipe] }),
        })
        .mockResolvedValueOnce({
            ok: true,
            json: () =>
                Promise.resolve({
                    message: "Recipe deleted successfully.",
                }),
        })
        .mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve({ recipes: [] }),
        });

    render(<App />);

    await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    fireEvent.click(
        screen.getByRole("button", {
            name: "Show Submitted Recipes",
        })
    );

    expect(await screen.findByText("Limeade")).toBeTruthy();

    fireEvent.click(
        screen.getByRole("button", {
            name: "Delete Recipe",
        })
    );

    await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith(
            "https://pantrypal-sbeo.onrender.com/api/recipes/recipe-123",
            {
                method: "DELETE",
            }
        );
    });

    expect(window.confirm).toHaveBeenCalledWith(
        "Are you sure you want to delete Limeade?"
    );
});