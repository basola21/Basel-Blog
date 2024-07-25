export async function getBlogs() {
  const apiUrl = import.meta.env.API_URL;
  try {
    const response = await fetch(`${apiUrl}/api/blog/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data. Status: ${response.status} ${response.statusText}`,
      );
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
