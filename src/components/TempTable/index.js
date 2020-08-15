import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableContent from './TableContent';
import Spacer from '../Spacer';


const TempTable = () => {
    const [error, setError] = useState(null);
    const [city, setCity] = useState('Bangalore');
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState(null);
    const API_KEY = process.env.API_KEY
  
    useEffect(()=>{
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}
        `).then(res => res.json())
        .then(
            (result) => {
              setData(result.main)
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [city])

      function fetchData(cityname) {
        setCity(cityname);
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${API_KEY}
        `).then(res => res.json())
        .then(
            (result) => {
              console.log(result)
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }

    return (
        <div className="flex flex-middle">
            <TableHeader changeCity={fetchData}/>
            <Spacer ml={10}/>
            <TableContent data={data}/>
        </div>
    );
};


export default TempTable;