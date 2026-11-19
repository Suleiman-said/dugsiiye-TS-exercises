function fullName(first: string, last: string): string {
    return first + " " + last;
  }
  
  // Example usage:
  const user = fullName("Ada", "Lovelace");
  console.log(user); // "Ada Lovelace"

  function registerUser(username: string, isAdmin?: boolean, language: string = "en"): void {
    console.log(`Username: ${username}`);
    console.log(`Is Admin: ${isAdmin ?? false}`); // Fallback display if undefined
    console.log(`Language: ${language}`);
    console.log("-------------------");
  }
  
  // Example usages:
  registerUser("alice_dev"); 
  // Output: username: alice_dev, Is Admin: false, Language: en
  
  registerUser("bob_admin", true, "es");
  // Output: username: bob_admin, Is Admin: true, Language: es

  function average(...scores: number[]): number {
    if (scores.length === 0) return 0; // Safe fallback for empty inputs
    
    let sum = 0;
    for (let score of scores) {
      sum += score;
    }
    return sum / scores.length;
  }
  
  // Testing with 3, 4, and 5 values:
  console.log(average(85, 90, 95));                // Test with 3 values -> 90
  console.log(average(70, 80, 90, 100));            // Test with 4 values -> 85
  console.log(average(60, 70, 80, 90, 100));        // Test with 5 values -> 80