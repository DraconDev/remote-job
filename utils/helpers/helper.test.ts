import { test, expect } from "vitest";
import { generateRandomNumericId } from "./helper";

test("generateRandomNumericId", async () => {
    expect(generateRandomNumericId()).toBeTruthy();
});
