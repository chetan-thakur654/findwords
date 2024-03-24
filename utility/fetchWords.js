export const fetchWords = async ({ whatIs, lNum, letter }) => {
  const { signal } = new AbortController();
  // { signal, next: { revalidate: 7200 } }

  try {
    const response = await fetch(
      `http://localhost:3000/api/${whatIs}/${lNum}/${letter}`,
      { signal, cache: "no-store" }
      // `http://localhost:3000/api/${whatIs}/${lNum}/${letter}`,
      // { signal, next: { revalidate: 72000 } }
    );

    if (!response.ok) {
      // Handle non-OK response status (e.g., 404 Not Found, 500 Internal Server Error)
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error); // Log the error for debugging
    return { error: "An error occurred while fetching data." };
  }
};
