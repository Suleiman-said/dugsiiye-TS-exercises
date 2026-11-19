// Define the UserRole enum with string values
enum UserRole {
    SuperAdmin = "superadmin",
    Moderator = "moderator",
    Viewer = "viewer"
  }
  
  // Function that returns false ONLY for "viewer"
  function canEdit(role: UserRole): boolean {
    return role !== UserRole.Viewer;
  }
  
  // Calling the function with each role:
  console.log(canEdit(UserRole.SuperAdmin)); // true
  console.log(canEdit(UserRole.Moderator));  // true
  console.log(canEdit(UserRole.Viewer));     // false

  // Select the button and use 'as HTMLButtonElement' to tell TypeScript the exact element type
const submitButton = document.querySelector("#submit-btn") as HTMLButtonElement;

// Safely set the disabled property without TypeScript compilation errors
submitButton.disabled = true;