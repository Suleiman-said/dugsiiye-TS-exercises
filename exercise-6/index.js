"use strict";
// Define the UserRole enum with string values
var UserRole;
(function (UserRole) {
    UserRole["SuperAdmin"] = "superadmin";
    UserRole["Moderator"] = "moderator";
    UserRole["Viewer"] = "viewer";
})(UserRole || (UserRole = {}));
// Function that returns false ONLY for "viewer"
function canEdit(role) {
    return role !== UserRole.Viewer;
}
// Calling the function with each role:
console.log(canEdit(UserRole.SuperAdmin)); // true
console.log(canEdit(UserRole.Moderator)); // true
console.log(canEdit(UserRole.Viewer)); // false
// Select the button and use 'as HTMLButtonElement' to tell TypeScript the exact element type
const submitButton = document.querySelector("#submit-btn");
// Safely set the disabled property without TypeScript compilation errors
submitButton.disabled = true;
