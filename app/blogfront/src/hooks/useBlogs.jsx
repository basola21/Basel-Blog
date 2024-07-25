import { useState, useEffect } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${apiUrl}/api/blog/posts`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          setError(true);
          throw new Error(
            `Failed to fetch data. Status: ${response.status} ${response.statusText}`,
          );
        }

        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { blogs, isLoading, error };
};

export default useBlogs;
