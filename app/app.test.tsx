// test for paragraph with text hey
import { expect, test } from "vitest";
import Home from "./page";

test("Home", async () => {
    const home = <Home />;
    expect(home).toBeTruthy();
});
