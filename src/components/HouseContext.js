import React from 'react';
import {useState,useEffect,useContext} from 'react';
import {housesData} from '../data'

export const HouseContext = React.createContext();
const HouseContextProvider = ({children}) => {
  const[houses, setHouses] = useState(housesData);
  const[city, setCity] = useState('Location (Any)');
  const[cities, setCities] = useState([]);
  const[property, setProperty] = useState('Property type (Any)');
  const[properties, setProperties] = useState([]);
  const[price, setPrice] = useState('Price range (Any)');
  const[loading, setLoading] = useState(false);

  //return the cities
  useEffect(() => {
    const allCities = houses.map((house) => {
      return house.City;
    });
    console.log(allCities);

    //remove duplicate cities
    const uniqueCities = ['Location (Any)', ...new Set(allCities)];
    //console.log(uniqueCities);
    setCities(uniqueCities);
    // setProperties(['Property type (Any)', 'House', 'Apartment', 'Condo']);
  },[]);
 
  //return the properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    //console.log(allProperties);

    //remove duplicate cities
    const uniqueProperties = ['Property type (Any)', ...new Set(allProperties)];
    //console.log(uniqueCities);
    setProperties(uniqueProperties);
    // setProperties(['Property type (Any)', 'House', 'Apartment', 'Condo']);
  },[]);

  const handleClick = () => {
    console.log('clicked');
  };

  return <HouseContext.Provider value={{houses, setHouses, city, setCity, cities, setCities, property, setProperty, properties, setProperties, price, setPrice, loading, setLoading, handleClick}}>{children}</HouseContext.Provider>;
};

export default HouseContextProvider;
