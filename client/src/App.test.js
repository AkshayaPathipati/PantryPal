import { render, screen, waitFor } from "@testing-library/react";
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