import React, { useEffect, useState } from "react";
import Spacer from "../Spacer";

const TableContent = (props) => {
  const data = props.data;

  return (
    <div>
      <div className="card br-5  hover:bg-white ">
        <Spacer mt={30} />
        {data ? (
          <div>
            <div>Current Temperature: {data.temp}</div>
            <Spacer mt={10} />
            <div>Highest Temperature: {data.temp_max} </div>
            <Spacer mt={10} />

            <div>Lowest Temperature: {data.temp_min}</div>
            <Spacer mt={10} />

            <div>Humidity: {data.humidity}</div>
            <Spacer mt={10} />

            <div>Pressure: {data.pressure}</div>
            <Spacer mt={10} />
          </div>
        ) : (
          <div>Loading...</div>
        )}
        <Spacer mt={10} />
      </div>
    </div>
  );
};

export default TableContent;
