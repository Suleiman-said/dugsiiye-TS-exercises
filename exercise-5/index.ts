function echo<T>(input: T): T {
    return input;
  }
  
  // Calling with different types:
  const strResult = echo("Hello World"); // Type is inferred as string
  const numResult = echo(100);           // Type is inferred as number
  const arrResult = echo([1, 2, 3]);     // Type is inferred as number[]
  const objResult = echo({ theme: "dark" }); // Type is inferred as { theme: string }
  
  // 💡 Autocomplete in action:
  // Because TypeScript knows strResult is a string, autocomplete will suggest string methods:
  console.log(strResult.toLowerCase());

  // Define the generic interface
interface ApiResult<T> {
    status: string;
    data: T;
  }
  
  // 1. Using ApiResult with a string data type
  const stringResponse: ApiResult<string> = {
    status: "success",
    data: "Operation completed successfully."
  };
  
  // 2. Using ApiResult with an object data type
  const userResponse: ApiResult<{ id: number; name: string }> = {
    status: "success",
    data: {
      id: 42,
      name: "Alice"
    }
  };
  
  console.log(stringResponse.data);
  console.log(userResponse.data.name);

  function first<T>(items: T[]): T {
    return items[0];
  }
  
  // Test with an array of numbers
  const firstNumber = first([10, 20, 30, 40]); 
  // Returns: 10 (TypeScript infers return type as number)
  
  // Test with an array of strings
  const firstString = first(["apple", "banana", "cherry"]); 
  // Returns: "apple" (TypeScript infers return type as string)
  
  // Test with an array of objects
  const firstUser = first([
    { id: 1, role: "admin" },
    { id: 2, role: "editor" }
  ]); 
  // Returns: { id: 1, role: "admin" } (TypeScript infers the object type)
  