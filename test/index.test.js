const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe('capitalizeWords', () => {
    test("capitalizes the first letter of each word", () => {
        expect(capitalizeWords("hello world")).toBe("Hello World")
    });

    test("returns empty string when given empty string", () => {
        expect(capitalizeWords("")).toBe("")
    })

    test("handles single word strings", () => {
        expect(capitalizeWords("javascript")).toBe("Javascript")
    });

    test("handles special characters", ()=> {
        expect(capitalizeWords("hello-world")).toBe("Hello-World");
    });
});

