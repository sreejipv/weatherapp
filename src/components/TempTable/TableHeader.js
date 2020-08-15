import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Spacer from '../Spacer';

const TableHeader = ({changeCity}) => {
    const [activeCity, setActivecity] = useState('Bangalore');
    let cities = ['Bangalore', 'Chennai', 'Kolkata', 'Delhi', 'Mumbai']

    function handleCity(cityname) {
        changeCity(cityname);
        setActivecity(cityname);
    }

    return (
        <div className="">
            {cities ? cities.map((item,index) => 
            <div key={index}>
             <Button attribute={item} className={`${activeCity === item ? "active" : ''}`} onClick={()=>handleCity(item)}/>
             <Spacer mt={10} />
            </div>    
            
            ): <span></span>
        }
        
      </div>
    );
};

TableHeader.defaultProps = {
    changeCity: () => {},
}

export default TableHeader;