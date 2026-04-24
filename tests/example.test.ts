import { describe, it, expect } from "vitest";

describe("Example Test", () => {
  it("should pass basic assertion", () => {
    expect(1 + 1).toBe(2);
  });

  it("should work with strings", () => {
    const hello = "Hello";
    const world = "World";
    expect(`${hello} ${world}`).toBe("Hello World");
  });
});
