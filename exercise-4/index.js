"use strict";
// 2. Single login function definition
function login(user) {
    const emailDisplay = user.email ?? "Not provided";
    const idDisplay = user.id ?? "No ID assigned";
    console.log(`User: ${user.username} | Email: ${emailDisplay} | ID: ${idDisplay}`);
}
// --- Testing Exercise 1 & 2 (Without ID or Email) ---
const myUser = {
    username: "code_ninja",
    password: "supersecretpassword"
};
login(myUser);
// Output: User: code_ninja | Email: Not provided | ID: No ID assigned
// --- Testing Optional Email ---
login({
    username: "alice_dev",
    password: "password123"
});
// Output: User: alice_dev | Email: Not provided | ID: No ID assigned
login({
    username: "bob_dev",
    password: "password456",
    email: "bob@example.com"
});
// Output: User: bob_dev | Email: bob@example.com | ID: No ID assigned
// --- Testing Exercise 3 (Readonly ID) ---
const currentUser = {
    id: 1001,
    username: "charlie_coder",
    password: "mypassword",
    email: "charlie@example.com"
};
// ✅ Reading the id property works fine:
console.log(currentUser.id); // Output: 1001
// ❌ Trying to reassign the readonly id property will trigger a compile error:
// currentUser.id = 1002; 
// Error: Cannot assign to 'id' because it is a read-only property.
