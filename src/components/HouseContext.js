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
      return house.city;
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
    //console.log(city, property, price);
    //set loading
    setLoading(true);

    //create a function that checks if the string includes '(Any)'
    const isDefault = (str) => {
      return str.split(' ').includes('(Any)');
    };
    
    //get first value of price and parse it to number
    const minPrice =   parseInt(price.split(' ')[0]);

    //get second value of price and parse it to number
    const maxPrice = parseInt(price.split(' ')[2]);
    
    const newHouses = housesData.filter((house) => {
      const housePrice =  parseInt(house.price);

      //if all values are selected 
      if(house.city === city && house.type === property && housePrice >= minPrice && housePrice <= maxPrice) {
        return house;
      }

      //if all values are default 

      if( isDefault(city) && isDefault(property) && isDefault(price) ){
        return house;
      }

      //if city is not default 
      if( !isDefault(city) && isDefault(property) && isDefault(price) ){
        return house.city === city;
      }

      //if property is not default
      if( isDefault(city) && !isDefault(property) && isDefault(price) ){
        return house.type === property;
      }

      //if price is not default
      if( isDefault(city) && isDefault(property) && !isDefault(price) ){
        if(housePrice >= minPrice && housePrice <= maxPrice){
          return house;
        }
      }

      //if city and property are not default
      if( !isDefault(city) && !isDefault(property) && isDefault(price) ){
        return  house.city === city && house.type === property
      }

      //if city and price is not default
      if( !isDefault(city) && isDefault(property) && !isDefault(price) ){
        if(housePrice >= minPrice && housePrice <= maxPrice){
          return house.city === city;
        }
      }

      //  property and price are not default
      if( isDefault(city) && !isDefault(property) && !isDefault(price)){
        if(housePrice >= minPrice && housePrice <= maxPrice){
          return house.type === property;
        }
      }
    });

    setTimeout(() => {
      return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
      setLoading(false); 
    }, 1000)
  };

  return <HouseContext.Provider value={{houses, setHouses, city, setCity, cities, setCities, property, setProperty, properties, setProperties, price, setPrice, loading, setLoading, handleClick}}>{children}</HouseContext.Provider>;
};

export default HouseContextProvider;
