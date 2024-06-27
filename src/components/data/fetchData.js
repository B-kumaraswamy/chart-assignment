
export const fetchData = async () => {
    const response = await fetch('/data.json'); // Correct path to fetch data.json
    if (!response.ok) {
      console.error('Network response was not ok', response.statusText);
      return [];
    }
  
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.error("Expected JSON but got", contentType);
      return [];
    }
  
    const data = await response.json();
    return data;
  };