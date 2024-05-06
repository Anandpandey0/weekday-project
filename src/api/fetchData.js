import { useState, useEffect } from "react";

function useDataFetcher() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = "https://api.weekday.technology/adhoc/getSampleJdJSON";
  const headersData = JSON.stringify({
    limit: 10,
    offset: 0,
  });
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Pass headersData here
      "Your-Custom-Header": headersData,
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isLoading, error };
}

export default useDataFetcher;
