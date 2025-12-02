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

    test("handles special characters", () => {
        expect(capitalizeWords("hello-world")).toBe("Hello-World");
    });
});

describe('filterActiveUsers', () => {
    const users = [
        { name: "Alice", isActive: true },
        { name: "Bob", isActive: false },
    ];
    expect(filterActiveUsers(users)).toEqual([{ name: "Alice", isActive: true }]);

    test("returns empty array when all users are inactive", () => {
        const users = [
            { name: "Alice", isActive: false },
            { name: "Bob", isActive: false },
        ];
        expect(filterActiveUsers(users)).toEqual([]);
    });

    test("returns empty array when given an empty list", () => {
        expect(filterActiveUsers([])).toEqual([]);
    });
});

describe('logAction', () => {
    test("generates the correct log string for valid inputs", () => {
        const action = "login";
        const username = "Alice";
        const result = logAction(action, username);

        expect(result).toMatch(/User Alice performed a login at/);
    });

    test("handles missing action", () => {
        const result = logAction("", "Alice");
        expect(result).toMatch(/User Alice performed  at /);
    });

    test("handles missing username", () => {
        const result = logAction("logout", "");
        expect(result).toMatch(/User  performed logout at /);
    });

});


