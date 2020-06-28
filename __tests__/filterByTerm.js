const filterByTerm = require("../src/filterByTerm");

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        const input = "abc";

        const output = "abcblah";

        expect(filterByTerm(input, "blah")).toEqual(output);
    });
});
