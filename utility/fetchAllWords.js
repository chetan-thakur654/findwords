export const fetchAllWords = async (lNum) => {
  const { signal } = new AbortController();

  try {
    const response = await fetch(`http://localhost:3000/api/all/${lNum}`, {
      signal,
      next: { revalidate: 72000 },
    });

    if (!response.ok) {
      // Handle non-OK response status (e.g., 404 Not Found, 500 Internal Server Error)
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return { error: "An error occurred while fetching data." };
  }
};
