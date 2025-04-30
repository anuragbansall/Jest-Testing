test("mock implementation of a basic fn", () => {
    const mockFn = jest.fn((a, b) => a + b); // Mock function that adds two numbers
    expect(mockFn(1, 2)).toBe(3); // Test the mock function with arguments 1 and 2
    expect(mockFn).toHaveBeenCalled(); // Check if the mock function was called
    expect(mockFn).toHaveBeenCalledWith(1, 2); // Check if the mock function was called with arguments 1 and 2
    expect(mockFn).toHaveBeenCalledTimes(1); // Check if the mock function was called once
})

// Mock functions are useful for testing and spying on function calls without executing the actual implementation.
// They can be used to simulate different behaviors and verify interactions with the function.

test("spying on a method of an object", () => {
    const video = {
        play: () => console.log("Playing video"),
        pause: () => console.log("Pausing video"),
    }

    const spy = jest.spyOn(video, "play"); // Spy on the play method of the video object
    video.play(); // Call the play method

    expect(spy).toHaveBeenCalled(); // Check if the spy was called
    spy.mockRestore(); // Restore the original implementation of the play method
    video.play(); // Call the play method again to verify it works as expected
})

// Spying on methods allows you to track calls to the method, check arguments, and restore the original implementation if needed.
// This is useful for testing interactions with methods of objects without modifying their behavior.

// ✅ Spies run the original function by default,
// ❌ Mocks do not — they replace it with a stub (unless you define otherwise).