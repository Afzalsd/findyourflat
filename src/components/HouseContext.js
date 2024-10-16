import React, { useState, useEffect, createContext } from 'react';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]); // Keep filtered houses separate
  const [city, setCity] = useState('Location (Any)');
  const [cities, setCities] = useState([]);
  const [property, setProperty] = useState('Property type (Any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (Any)');
  const [loading, setLoading] = useState(false);

  // Fetch houses data from backend API
  useEffect(() => {
    const fetchHouses = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/agent/agents'); // Adjust the URL to your backend route
        const data = await response.json();
        if (data && data.payload) {
          setHouses(data.payload);
          setFilteredHouses(data.payload); // Initialize filtered houses
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching houses:', error);
        setLoading(false);
      }
    };
    
    fetchHouses();
  }, []);

  // Return the unique cities from the house data
  useEffect(() => {
    const allCities = houses.map((house) => house.city);
    const uniqueCities = ['Location (Any)', ...new Set(allCities)];
    setCities(uniqueCities);
  }, [houses]);

  // Return the unique property types from the house data
  useEffect(() => {
    const allProperties = houses.map((house) => house.type);
    const uniqueProperties = ['Property type (Any)', ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, [houses]);

  const handleClick = () => {
    setLoading(true);
    
    // Parse price
    const isDefault = (str) => str.includes('(Any)');
    let minPrice = 0, maxPrice = Infinity;

    if (!isDefault(price)) {
      const priceRange = price.split(' ');
      minPrice = parseInt(priceRange[0], 10);
      maxPrice = parseInt(priceRange[2], 10);
    }

    // Filter houses based on selected filters
    const newFilteredHouses = houses.filter((house) => {
      const housePrice = parseInt(house.price, 10) || 0; // Ensure house price is a valid number
      const matchesCity = isDefault(city) || house.city === city;
      const matchesProperty = isDefault(property) || house.type === property;
      const matchesPrice = housePrice >= minPrice && housePrice <= maxPrice;

      return matchesCity && matchesProperty && matchesPrice;
    });

    setTimeout(() => {
      setFilteredHouses(newFilteredHouses.length < 1 ? [] : newFilteredHouses);
      setLoading(false);
    }, 1000);
  };

  return (
    <HouseContext.Provider value={{ 
      houses: filteredHouses, // Pass filtered houses to context consumers
      city, 
      setCity, 
      cities, 
      property, 
      setProperty, 
      properties, 
      price, 
      setPrice, 
      loading, 
      handleClick 
    }}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
