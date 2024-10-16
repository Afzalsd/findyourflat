import React, { useState, useEffect, createContext } from 'react';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState([]);
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
        console.log(data.payload[0].houses)
        setHouses(data.payload[0].houses);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching houses:', error);
        setLoading(false);
      }
    };
    
    fetchHouses();
  }, []);

  // Return the cities
  useEffect(() => {
    const allCities = houses.map((house) => house.city);
    const uniqueCities = ['Location (Any)', ...new Set(allCities)];
    setCities(uniqueCities);
  }, [houses]);

  // Return the properties
  useEffect(() => {
    const allProperties = houses.map((house) => house.type);
    const uniqueProperties = ['Property type (Any)', ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, [houses]);

  const handleClick = () => {
    setLoading(true);
    const isDefault = (str) => str.split(' ').includes('(Any)');
    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = houses.filter((house) => {
      const housePrice = parseInt(house.price);
      if (house.city === city && house.type === property && housePrice >= minPrice && housePrice <= maxPrice) return house;
      if (isDefault(city) && isDefault(property) && isDefault(price)) return house;
      if (!isDefault(city) && isDefault(property) && isDefault(price)) return house.city === city;
      if (isDefault(city) && !isDefault(property) && isDefault(price)) return house.type === property;
      if (isDefault(city) && isDefault(property) && !isDefault(price) && housePrice >= minPrice && housePrice <= maxPrice) return house;
      if (!isDefault(city) && !isDefault(property) && isDefault(price)) return house.city === city && house.type === property;
      if (!isDefault(city) && isDefault(property) && !isDefault(price) && housePrice >= minPrice && housePrice <= maxPrice) return house.city === city;
      if (isDefault(city) && !isDefault(property) && !isDefault(price) && housePrice >= minPrice && housePrice <= maxPrice) return house.type === property;
    });

    setTimeout(() => {
      setHouses(newHouses.length < 1 ? [] : newHouses);
      setLoading(false);
    }, 1000);
  };

  return (
    <HouseContext.Provider value={{ houses, city, setCity, cities, property, setProperty, properties, price, setPrice, loading, handleClick }}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
