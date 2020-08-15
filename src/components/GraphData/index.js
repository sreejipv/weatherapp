import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Chart from "react-google-charts";
import Button from '../Button';
import Spacer from '../Spacer';

const GraphData = (props) => {
    const [currentList, setCurrentlist] = useState(null);
    const [compare,setCompare] = useState(false);

    const API_KEY = process.env.API_KEY
    let cities = ['Bangalore', 'Chennai', 'Kolkata', 'Delhi', 'Mumbai']

    function fetchAllcity() {
        setCompare(true);
        Promise.all(cities.map((item) =>
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${item}&units=metric&appid=${API_KEY}`)
        )).then(function (responses) {
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
        }).then(function (data) {

        let graphData = [['City', 'Temp']];
        data.map((item)=>{
            return graphData.push([item.name, item.main.temp])
        });
        setCurrentlist(graphData);

    }).catch(function (error) {
        console.log(error);
    });
    }

    // useEffect(()=>{
    //     fetchAllcity();
    // },[]);


    return (
        <>
        <Spacer mt="40"/>
        <div className="graphCard">
            <div className="flex flex-middle">
                <Button attribute="show graph" className="lg" onClick={fetchAllcity}/>
                
            </div>
            
            {compare && <div className="chartContainer">
            { currentList  ? 
                <div>
                    <Chart chartType="BarChart" width="100%" height="400px" data={currentList} /> 
                </div>
            
            : <div className="flex flex-middle mt-50 pt-50"><p>Fetching...</p></div> }

            </div> }
        </div>
        </>
    );
};


export default GraphData;