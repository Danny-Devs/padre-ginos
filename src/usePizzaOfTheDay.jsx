import { useEffect, useState } from "react";

// Custom hook to fetch and return the pizza of the day
export const usePizzaOfTheDay = () => {
  // State to store the pizza of the day
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  // useEffect hook to run the fetch operation when the component mounts
  useEffect(() => {
    // Function to fetch the pizza of the day from the API
    async function fetchPizzaOfTheDay() {
      // Fetch data from the API endpoint
      const res = await fetch("/api/pizza-of-the-day");
      // Parse the JSON response
      const data = await res.json();
      // Update the state with the fetched data
      setPizzaOfTheDay(data);
    }

    // Call the fetch function
    fetchPizzaOfTheDay();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Return the pizza of the day
  return pizzaOfTheDay;
};
